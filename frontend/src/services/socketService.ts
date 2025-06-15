import { io, Socket } from 'socket.io-client';
import { MapInfo } from '../types/gameTypes';
import { GameStateDto, deserializeGameStateFromBase64, SkillCooldownResponse, SkillType } from 'common';
import { skillCooldownManager } from '../utils/skillCooldownManager';

interface PlayerJoinedData {
  playerId: string;
  userInfo: { nickname: string };
}
interface PlayerLeftData {
  playerId: string;
}
interface GameOverData {
  winner?: { name: string; color: string };
}
interface SpeedChangedData {
  speed: number;
}

interface JoinRoomResponse {
  success: boolean;
  message?: string;
  gameState?: GameStateDto;
  requiresPassword?: boolean;
}

class SocketService {
  private socket: Socket | null = null;
  private currentRoomId: string | null = null;
  private joinedRooms: Set<string> = new Set();
  private isConnecting: boolean = false;
  private latestAvailableMaps: MapInfo[] | null = null;

  private gameStateListeners: Array<(gameState: GameStateDto) => void> = [];
  private availableMapsListeners: Array<(maps: MapInfo[]) => void> = [];
  private playerJoinedListeners: Array<(data: PlayerJoinedData) => void> = [];
  private playerLeftListeners: Array<(data: PlayerLeftData) => void> = [];
  private gameStartedListeners: Array<() => void> = [];
  private gameResetListeners: Array<() => void> = [];
  private gameOverListeners: Array<(data: GameOverData) => void> = [];
  private speedChangedListeners: Array<(data: SpeedChangedData) => void> = [];

  public connect(roomId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.isConnecting) {
        console.log('Socket connection already in progress.');
        resolve();
        return;
      }

      if (this.socket?.connected && this.currentRoomId === roomId) {
        console.log('Socket already connected to this room.');
        resolve();
        return;
      }

      if (this.socket?.connected) {
        this.disconnect();
      }

      this.isConnecting = true;

      const apiUrlFromEnv = process.env.REACT_APP_API_URL || 'http://localhost:3000';
      const protocol = apiUrlFromEnv.startsWith('https://') ? 'wss:' : 'ws:';
      const host_port = apiUrlFromEnv.replace(/^https?:\/\//, '');
      const socketUrl = `${protocol}//${host_port}/game`;
      console.log(`Connecting to socket server at ${socketUrl} for room ${roomId}...`);
      const token = localStorage.getItem('access_token');
      this.socket = io(socketUrl, {
        auth: {
          token: token,
        },
      });

      this.socket.on('connect', () => {
        console.log(`Socket connected: ${this.socket?.id}`);
        this.currentRoomId = roomId;
        this.setupEventListeners();

        console.log(`Socket connected for room ${roomId}. Ready for explicit joinRoom call.`);
        resolve();
      });

      this.socket.on('disconnect', (reason) => {
        console.log(`Socket disconnected: ${reason}`);
        this.currentRoomId = null;
        this.joinedRooms.clear();
        this.gameStateListeners = [];
        this.availableMapsListeners = [];
        this.playerJoinedListeners = [];
        this.playerLeftListeners = [];
        this.gameStartedListeners = [];
        this.gameResetListeners = [];
        this.gameOverListeners = [];
        this.speedChangedListeners = [];
      });

      this.socket.on('connect_error', (error) => {
        console.error('Socket connection error:', error);
        this.disconnect();
        reject(error);
      });
    });
  }

  private setupEventListeners(): void {
    if (!this.socket) {
      console.warn('socketService: Socket not available for setupEventListeners.');
      return;
    }
    console.log('socketService: Setting up event listeners.');

    this.socket.off('game_state').on('game_state', (data: string | GameStateDto) => {
      try {
        // protobuf 직렬화된 데이터인지 확인 (Base64 문자열인 경우)
        let gameState: GameStateDto;
        if (typeof data === 'string') {
          // Base64 문자열을 protobuf로 역직렬화
          gameState = deserializeGameStateFromBase64(data);
        } else {
          // 기존 JSON 객체 (fallback)
          gameState = data;
        }

        this.gameStateListeners.forEach((listener) => listener(gameState));
      } catch (error) {
        console.error('Failed to deserialize game state:', error);
        // 역직렬화 실패 시 원본 데이터 사용 (fallback)
        if (typeof data !== 'string') {
          this.gameStateListeners.forEach((listener) => listener(data));
        }
      }
    });

    this.socket.off('available_maps').on('available_maps', (maps: MapInfo[]) => {
      this.latestAvailableMaps = maps;
      this.availableMapsListeners.forEach((listener) => listener(maps));
    });

    this.socket.off('player_joined').on('player_joined', (data: PlayerJoinedData) => {
      this.playerJoinedListeners.forEach((listener) => listener(data));
    });

    this.socket.off('player_left').on('player_left', (data: PlayerLeftData) => {
      this.playerLeftListeners.forEach((listener) => listener(data));
    });

    this.socket.off('game_started').on('game_started', () => {
      this.gameStartedListeners.forEach((listener) => listener());
    });

    this.socket.off('game_reset').on('game_reset', () => {
      this.gameResetListeners.forEach((listener) => listener());
    });

    this.socket.off('game_over').on('game_over', (data: GameOverData) => {
      this.gameOverListeners.forEach((listener) => listener(data));
    });

    this.socket.off('speed_changed').on('speed_changed', (data: SpeedChangedData) => {
      this.speedChangedListeners.forEach((listener) => listener(data));
    });
  }

  public onGameStateUpdate(listener: (gameState: GameStateDto) => void): () => void {
    this.gameStateListeners.push(listener);
    return () => {
      this.gameStateListeners = this.gameStateListeners.filter((l) => l !== listener);
    };
  }

  public onAvailableMapsUpdate(listener: (maps: MapInfo[]) => void): () => void {
    this.availableMapsListeners.push(listener);
    if (this.latestAvailableMaps) {
      listener(this.latestAvailableMaps);
    }
    return () => {
      this.availableMapsListeners = this.availableMapsListeners.filter((l) => l !== listener);
    };
  }

  public onPlayerJoined(listener: (data: PlayerJoinedData) => void): () => void {
    this.playerJoinedListeners.push(listener);
    return () => {
      this.playerJoinedListeners = this.playerJoinedListeners.filter((l) => l !== listener);
    };
  }

  public onPlayerLeft(listener: (data: PlayerLeftData) => void): () => void {
    this.playerLeftListeners.push(listener);
    return () => {
      this.playerLeftListeners = this.playerLeftListeners.filter((l) => l !== listener);
    };
  }

  public onGameStarted(listener: () => void): () => void {
    this.gameStartedListeners.push(listener);
    return () => {
      this.gameStartedListeners = this.gameStartedListeners.filter((l) => l !== listener);
    };
  }

  public onGameReset(listener: () => void): () => void {
    this.gameResetListeners.push(listener);
    return () => {
      this.gameResetListeners = this.gameResetListeners.filter((l) => l !== listener);
    };
  }

  public onGameOver(listener: (data: GameOverData) => void): () => void {
    this.gameOverListeners.push(listener);
    return () => {
      this.gameOverListeners = this.gameOverListeners.filter((l) => l !== listener);
    };
  }

  public onSpeedChanged(listener: (data: SpeedChangedData) => void): () => void {
    this.speedChangedListeners.push(listener);
    return () => {
      this.speedChangedListeners = this.speedChangedListeners.filter((l) => l !== listener);
    };
  }

  public async joinRoom(roomId: string, password?: string): Promise<JoinRoomResponse> {
    if (!this.socket) {
      console.error('socketService: Socket not connected for joinRoom.');
      return { success: false, message: 'Socket not connected.' };
    }
    const response: JoinRoomResponse = await this.socket.emitWithAck('join_room', { roomId, password });
    if (response.success) {
      this.currentRoomId = roomId;
      this.joinedRooms.add(roomId);
    }
    return response;
  }

  public async setMarbles(names: string[]): Promise<{ success: boolean; message?: string }> {
    if (!this.socket || !this.currentRoomId) {
      console.warn('socketService: Cannot set marbles, socket not connected or not in a room.');
      return { success: false, message: 'Socket not connected or not in a room.' };
    }
    return await this.socket.emitWithAck('set_marbles', { roomId: this.currentRoomId, names });
  }

  public async setWinningRank(rank: number): Promise<{ success: boolean; message?: string }> {
    if (!this.socket || !this.currentRoomId) {
      console.warn('socketService: Cannot set winning rank, socket not connected or not in a room.');
      return { success: false, message: 'Socket not connected or not in a room.' };
    }
    return await this.socket.emitWithAck('set_winning_rank', { roomId: this.currentRoomId, rank });
  }

  public async setMap(mapIndex: number): Promise<{ success: boolean; message?: string }> {
    if (!this.socket || !this.currentRoomId) {
      console.warn('socketService: Cannot set map, socket not connected or not in a room.');
      return { success: false, message: 'Socket not connected or not in a room.' };
    }
    return await this.socket.emitWithAck('set_map', { roomId: this.currentRoomId, mapIndex });
  }

  public async setSpeed(speed: number): Promise<{ success: boolean; message?: string }> {
    if (!this.socket || !this.currentRoomId) {
      console.warn('socketService: Cannot set speed, socket not connected or not in a room.');
      return { success: false, message: 'Socket not connected or not in a room.' };
    }
    return await this.socket.emitWithAck('set_speed', { roomId: this.currentRoomId, speed });
  }

  public async startGame(): Promise<{ success: boolean; message?: string }> {
    if (!this.socket || !this.currentRoomId) {
      console.warn('socketService: Cannot start game, socket not connected or not in a room.');
      return { success: false, message: 'Socket not connected or not in a room.' };
    }
    return await this.socket.emitWithAck('start_game', { roomId: this.currentRoomId });
  }

  public async resetGame(): Promise<{ success: boolean; message?: string }> {
    if (!this.socket || !this.currentRoomId) {
      console.warn('socketService: Cannot reset game, socket not connected or not in a room.');
      return { success: false, message: 'Socket not connected or not in a room.' };
    }
    return await this.socket.emitWithAck('reset_game', { roomId: this.currentRoomId });
  }

  public async useSkill(
    skillType: SkillType,
    skillPosition: { x: number; y: number },
    extra: any,
  ): Promise<{ success: boolean; message?: string }> {
    if (!this.socket || !this.currentRoomId) {
      console.warn('socketService: Cannot use skill, socket not connected or not in a room.');
      return { success: false, message: 'Socket not connected or not in a room.' };
    }

    // Skills를 SkillType으로 매핑

    // 클라이언트 측 쿨타임 체크
    if (skillType && !skillCooldownManager.canUseSkill(skillType)) {
      const remainingTime = skillCooldownManager.getRemainingCooldown(skillType);
      const remainingSeconds = Math.ceil(remainingTime / 1000);
      console.log(`스킬이 쿨타임 중입니다. 남은 시간: ${remainingSeconds}초`);
      return {
        success: false,
        message: `스킬이 쿨타임 중입니다. 남은 시간: ${remainingSeconds}초`,
      };
    }

    try {
      const response: SkillCooldownResponse = await this.socket.emitWithAck('use_skill', {
        roomId: this.currentRoomId,
        skillType,
        skillPosition,
        extra,
      });

      if (response.success) {
        // 스킬 사용 성공 시 클라이언트 쿨타임 시작
        if (skillType) {
          skillCooldownManager.useSkill(skillType);
        }

        // 서버 쿨타임 정보와 동기화
        if (response.cooldowns) {
          skillCooldownManager.syncWithServer(response.cooldowns);
        }
      } else if (response.cooldowns) {
        // 실패했지만 쿨타임 정보가 있으면 동기화
        skillCooldownManager.syncWithServer(response.cooldowns);
      }

      return response;
    } catch (error) {
      console.error('스킬 사용 중 오류 발생:', error);
      return { success: false, message: '스킬 사용 중 오류가 발생했습니다.' };
    }
  }

  public disconnect(): void {
    this.socket?.disconnect();
    console.log('Socket disconnected by client call.');
  }

  public isConnected(): boolean {
    return !!this.socket?.connected;
  }

  public getCurrentRoomId(): string | null {
    return this.currentRoomId;
  }

  public getJoinedStatus(roomId: string): boolean {
    return this.joinedRooms.has(roomId);
  }
}

const socketService = new SocketService();
export default socketService;
