import { Injectable, Logger } from '@nestjs/common';
import { game } from 'common/src/generated/game_state';

@Injectable()
export class ProtobufService {
  private readonly logger = new Logger(ProtobufService.name);

  constructor() {
    this.logger.log('ProtobufService initialized');
  }

  public encodeGameState(gameState: game.IGameState): Uint8Array {
    const message = game.GameState.create(gameState);
    return game.GameState.encode(message).finish();
  }

  public decodeGameState(data: Uint8Array): game.IGameState {
    return game.GameState.decode(data);
  }
}
