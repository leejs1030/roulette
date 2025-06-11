import { Injectable, Logger } from '@nestjs/common';
import { Server } from 'socket.io';
import { ProtobufService } from './protobuf.service';
import { game } from 'common/src/generated/game_state';

@Injectable()
export class GameBroadcastService {
  private readonly logger = new Logger(GameBroadcastService.name);

  constructor(private readonly protobufService: ProtobufService) {}

  public broadcastGameState(server: Server, room: string, gameState: game.IGameState) {
    try {
      const buffer = this.protobufService.encodeGameState(gameState);
      server.to(room).emit('game_state', buffer);
    } catch (error) {
      this.logger.error(`Failed to encode or broadcast game state for room ${room}`, error);
    }
  }
}
