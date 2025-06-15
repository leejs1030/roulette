import { Injectable, Logger } from '@nestjs/common';
import { ConnectedSocket, MessageBody, WsException } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { User } from '@prisma/client';
import { prefixGameRoomId } from '../utils/roomId.util';
import { GameSessionService } from '../game-session.service';
import { GameEngineService } from '../game-engine.service';
import { UseSkillDto } from '../dto/use-skill.dto';
import { SkillCooldownResponse } from 'common';

@Injectable()
export class GameSkillHandler {
  private readonly logger = new Logger(GameSkillHandler.name);

  constructor(
    private readonly gameSessionService: GameSessionService,
    private readonly gameEngineService: GameEngineService,
  ) {}

  async handleUseSkill(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: UseSkillDto<any>,
    user: User,
    server: Server,
  ): Promise<SkillCooldownResponse> {
    const { roomId, skillType, skillPosition, extra } = data;
    this.logger.log('스킬 사용 요청 수신:', {
      roomId,
      skillType,
      skillPosition,
      extra,
      user: `${user.nickname} (${user.id})`,
    });
    const prefixedRoomId = prefixGameRoomId(roomId);

    try {
      // 스킬 쿨타임 확인
      const canUse = await this.gameEngineService.canUseSkill(roomId, user.id, skillType);
      if (!canUse.success) {
        this.logger.log(`스킬 쿨타임으로 인한 사용 불가: ${user.nickname} (${user.id}) - ${skillType}`);
        return {
          success: false,
          message: canUse.message || '스킬이 쿨타임 중입니다.',
          cooldowns: canUse.cooldowns,
        };
      }

      this.logger.log(
        `클라이언트 ${user.nickname} (${client.id})가 방 ${prefixedRoomId}(${roomId})에서 스킬 사용 시도: ${skillType}`,
      );

      // gameEngineService에 스킬 발동 로직 위임 (사용자 ID와 닉네임 전달)
      await this.gameEngineService.useSkill(roomId, skillType, skillPosition, extra, user.id, user.nickname);

      // 스킬 발동 후 게임 상태 업데이트 및 클라이언트에게 전파
      this.gameSessionService.broadcastGameStateToRoom(roomId);

      this.logger.log(
        `방 ${prefixedRoomId}(${roomId})에서 스킬 ${skillType} 발동 완료 by ${user.nickname} (${client.id})`,
      );
      
      return { 
        success: true, 
        message: `스킬 ${skillType} 발동 성공`,
        cooldowns: await this.gameEngineService.getUserCooldowns(roomId, user.id),
      };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      throw new WsException(message || '스킬 발동 중 오류 발생');
    }
  }
}
