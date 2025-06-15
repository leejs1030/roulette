import { Injectable, Logger, OnModuleDestroy, BadRequestException } from '@nestjs/common';
import { Server } from 'socket.io';
import { GameSessionService } from './game-session.service';
import { prefixGameRoomId } from './utils/roomId.util';
import { SkillPosition } from './types/skill.type';
import { GameRoom } from './game-room';
import { SkillStrategy } from './strategies/skill.strategy';
import { ImpactSkillStrategy } from './strategies/impact.strategy';
import { DummyMarbleSkillStrategy } from './strategies/dummy-marble.strategy';
import { SkillExtra, SkillType, SkillCooldownResponse, SkillCooldown } from 'common';

@Injectable()
export class GameEngineService implements OnModuleDestroy {
  private readonly logger = new Logger(GameEngineService.name);
  private gameLoops: Map<number, NodeJS.Timeout> = new Map();
  private skillStrategies: Map<SkillType, SkillStrategy<any>>;

  constructor(
    private readonly gameSessionService: GameSessionService,
    impactSkillStrategy: ImpactSkillStrategy,
    dummyMarbleSkillStrategy: DummyMarbleSkillStrategy,
  ) {
    this.skillStrategies = new Map();
    this.skillStrategies.set(SkillType.Impact, impactSkillStrategy);
    this.skillStrategies.set(SkillType.DummyMarble, dummyMarbleSkillStrategy);
  }

  async useSkill<T extends SkillType>(
    roomId: number,
    skillType: T,
    skillPosition: SkillPosition,
    extra: SkillExtra<T>,
    userId: number,
    userNickname?: string,
  ): Promise<void> {
    const room = this.gameSessionService.getRoom(roomId);
    if (!room || !room.game) {
      throw new BadRequestException(`Room ${roomId} not found or game not started.`);
    }

    // 쿨타임 검증 (이중 검증)
    const cooldownManager = room.game.skillManager.skillCooldownManager;
    if (!cooldownManager.canUseSkill(userId, skillType)) {
      const remainingTime = cooldownManager.getRemainingCooldown(userId, skillType);
      throw new BadRequestException(`스킬이 쿨타임 중입니다. 남은 시간: ${Math.ceil(remainingTime / 1000)}초`);
    }

    const strategy = this.skillStrategies.get(skillType);
    if (!strategy) {
      throw new BadRequestException(`Unknown skill type: ${skillType}`);
    }

    // 스킬 사용 처리
    cooldownManager.useSkill(userId, skillType);
    strategy.execute(room, skillPosition, extra, userNickname);
  }

  async canUseSkill(roomId: number, userId: number, skillType: SkillType): Promise<SkillCooldownResponse> {
    const room = this.gameSessionService.getRoom(roomId);
    if (!room || !room.game) {
      return {
        success: false,
        message: `Room ${roomId} not found or game not started.`,
      };
    }

    const cooldownManager = room.game.skillManager.skillCooldownManager;
    const canUse = cooldownManager.canUseSkill(userId, skillType);
    
    if (!canUse) {
      const remainingTime = cooldownManager.getRemainingCooldown(userId, skillType);
      return {
        success: false,
        message: `스킬이 쿨타임 중입니다. 남은 시간: ${Math.ceil(remainingTime / 1000)}초`,
        cooldowns: cooldownManager.getUserCooldowns(userId),
      };
    }

    return {
      success: true,
      cooldowns: cooldownManager.getUserCooldowns(userId),
    };
  }

  async getUserCooldowns(roomId: number, userId: number): Promise<SkillCooldown[]> {
    const room = this.gameSessionService.getRoom(roomId);
    if (!room || !room.game) {
      return [];
    }

    return room.game.skillManager.skillCooldownManager.getUserCooldowns(userId);
  }

  startGameLoop(roomId: number, server: Server) {
    if (this.gameLoops.has(roomId)) {
      this.logger.warn(`Game loop for room ${roomId} is already running.`);
      return;
    }

    this.logger.log(`Starting game loop for room ${roomId}`);
    const prefixedRoomId = prefixGameRoomId(roomId);
    const interval = setInterval(() => this._gameLoopTick(roomId, server, prefixedRoomId), 1000 / 60);
    this.gameLoops.set(roomId, interval);
  }

  private async _gameLoopTick(roomId: number, server: Server, prefixedRoomId: string) {
    try {
      const room = this.gameSessionService.getRoom(roomId);
      if (!room || !room.game) {
        this.logger.warn(`Room or game not found for room ${roomId}. Stopping loop.`);
        this.stopGameLoop(roomId, server);
        return;
      }

      this._updateAndBroadcastState(room);
      await this._checkAndHandleGameEnd(room, prefixedRoomId, server);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      const errorStack = error instanceof Error ? error.stack : undefined;
      this.logger.error(`Error in game loop for room ${roomId}: ${errorMessage}`, errorStack);
      this.stopGameLoop(roomId, server);
    }
  }

  private _updateAndBroadcastState(room: GameRoom) {
    if (room.isRunning) {
      room.game.update();
    }
    this.gameSessionService.broadcastGameStateToRoom(room);
  }

  private async _checkAndHandleGameEnd(room: GameRoom, prefixedRoomId: string, server: Server) {
    const gameState = room.game.getGameState();
    if (!gameState.isRunning && room.isRunning) {
      this.logger.log(`Game in room ${room.id} has ended. Notifying GameSessionService and cleaning up.`);
      await this.gameSessionService.endGame(room.id);
      server.to(prefixedRoomId).emit('game_over', {
        winner: gameState.winner,
      });
      this.stopGameLoop(room.id, server);
    }
  }

  stopGameLoop(roomId: number, server?: Server) {
    const interval = this.gameLoops.get(roomId);
    if (interval) {
      clearInterval(interval);
      this.gameLoops.delete(roomId);
      this.logger.log(`Stopped game loop for room ${roomId}`);

      if (server) {
        const prefixedRoomId = prefixGameRoomId(roomId);
        server.socketsLeave(prefixedRoomId);
        this.logger.log(`Room ${roomId}: All sockets left from room ${prefixedRoomId}.`);
        this.gameSessionService.removeRoom(roomId);
        this.logger.log(`Room ${roomId}: Game session removed from memory.`);
      }
    }
  }

  isLoopRunning(roomId: number): boolean {
    return this.gameLoops.has(roomId);
  }

  onModuleDestroy() {
    this.logger.log('Clearing all active game loops...');
    this.gameLoops.forEach((interval, roomId) => {
      clearInterval(interval);
      this.logger.log(`Cleared game loop for room ${roomId}`);
    });
    this.gameLoops.clear();
  }
}
