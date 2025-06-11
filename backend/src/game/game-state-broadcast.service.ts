import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Server } from 'socket.io';
import { initProtobuf, serializeGameState } from 'common';

@Injectable()
export class GameStateBroadcastService implements OnModuleInit {
  private readonly logger = new Logger(GameStateBroadcastService.name);
  private initialized = false;

  async onModuleInit() {
    try {
      await initProtobuf();
      this.initialized = true;
      this.logger.log('Protobuf initialized successfully');
    } catch (error) {
      this.logger.error('Failed to initialize protobuf:', error);
    }
  }

  /**
   * 게임 상태를 protobuf로 직렬화하여 특정 룸에 브로드캐스트합니다.
   * @param server Socket.IO 서버 인스턴스
   * @param roomId 브로드캐스트할 룸 ID (prefixed)
   * @param gameState 게임 상태 객체
   */
  public broadcastGameState(server: Server, roomId: string, gameState: any): void {
    if (!this.initialized) {
      this.logger.warn('Protobuf not initialized, falling back to JSON broadcast');
      server.to(roomId).emit('game_state', gameState);
      return;
    }

    try {
      // protobuf로 직렬화
      const serializedData = serializeGameState(gameState);
      
      // 직렬화된 데이터를 base64로 인코딩하여 전송
      const base64Data = Buffer.from(serializedData).toString('base64');
      
      // 'game_state_proto' 이벤트로 protobuf 데이터 전송
      server.to(roomId).emit('game_state_proto', base64Data);
      
      // 호환성을 위해 기존 JSON 형태도 함께 전송 (옵션)
      // server.to(roomId).emit('game_state', gameState);
      
      this.logger.debug(`Broadcasted game state to room ${roomId} using protobuf (${serializedData.length} bytes)`);
    } catch (error) {
      this.logger.error('Failed to serialize game state with protobuf, falling back to JSON:', error);
      // protobuf 직렬화 실패 시 기존 JSON 방식으로 폴백
      server.to(roomId).emit('game_state', gameState);
    }
  }

  /**
   * 기존 JSON 방식으로 게임 상태를 브로드캐스트합니다.
   * @param server Socket.IO 서버 인스턴스
   * @param roomId 브로드캐스트할 룸 ID (prefixed)
   * @param gameState 게임 상태 객체
   */
  public broadcastGameStateJson(server: Server, roomId: string, gameState: any): void {
    server.to(roomId).emit('game_state', gameState);
  }

  /**
   * protobuf와 JSON 두 방식 모두로 브로드캐스트합니다.
   * @param server Socket.IO 서버 인스턴스
   * @param roomId 브로드캐스트할 룸 ID (prefixed)
   * @param gameState 게임 상태 객체
   */
  public broadcastGameStateBoth(server: Server, roomId: string, gameState: any): void {
    // JSON 방식
    server.to(roomId).emit('game_state', gameState);
    
    // protobuf 방식
    this.broadcastGameState(server, roomId, gameState);
  }
}
