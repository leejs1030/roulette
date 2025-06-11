import * as protobuf from 'protobufjs';

// protobuf 메시지 타입들
export interface ProtoMarbleState {
  id: number;
  name: string;
  x: number;
  y: number;
  angle: number;
  color: string;
  isActive: boolean;
  skill: string;
  radius: number;
}

export interface ProtoMapEntityState {
  x: number;
  y: number;
  angle: number;
  shape: string; // EntityShape를 JSON 문자열로 직렬화
  life: number;
}

export interface ProtoServerSkillEffect {
  type: string;
  x: number;
  y: number;
  extra: string;
}

export interface ProtoGameState {
  marbles: ProtoMarbleState[];
  winners: ProtoMarbleState[];
  winner?: ProtoMarbleState;
  entities: ProtoMapEntityState[];
  isRunning: boolean;
  winnerRank: number;
  totalMarbleCount: number;
  shakeAvailable: boolean;
  skillEffects: ProtoServerSkillEffect[];
}

// protobuf 메시지 정의
const protoSchema = `
syntax = "proto3";

package gamestate;

message MarbleState {
  int32 id = 1;
  string name = 2;
  double x = 3;
  double y = 4;
  double angle = 5;
  string color = 6;
  bool isActive = 7;
  string skill = 8;
  double radius = 9;
}

message MapEntityState {
  double x = 1;
  double y = 2;
  double angle = 3;
  string shape = 4;
  double life = 5;
}

message ServerSkillEffect {
  string type = 1;
  double x = 2;
  double y = 3;
  string extra = 4;
}

message GameState {
  repeated MarbleState marbles = 1;
  repeated MarbleState winners = 2;
  MarbleState winner = 3;
  repeated MapEntityState entities = 4;
  bool isRunning = 5;
  int32 winnerRank = 6;
  int32 totalMarbleCount = 7;
  bool shakeAvailable = 8;
  repeated ServerSkillEffect skillEffects = 9;
}
`;

let root: protobuf.Root | null = null;
let GameStateMessage: protobuf.Type | null = null;

// protobuf 스키마 초기화
export async function initProtobuf(): Promise<void> {
  if (root && GameStateMessage) return;
  
  root = protobuf.parse(protoSchema).root;
  GameStateMessage = root.lookupType('gamestate.GameState');
}

// GameState를 protobuf로 직렬화
export function serializeGameState(gameState: any): Uint8Array {
  if (!GameStateMessage) {
    throw new Error('Protobuf not initialized. Call initProtobuf() first.');
  }

  // 데이터 변환
  const protoData: ProtoGameState = {
    marbles: gameState.marbles.map((marble: any) => ({
      id: marble.id,
      name: marble.name,
      x: marble.x,
      y: marble.y,
      angle: marble.angle,
      color: marble.color,
      isActive: marble.isActive,
      skill: marble.skill || 'None',
      radius: marble.radius,
    })),
    winners: gameState.winners.map((marble: any) => ({
      id: marble.id,
      name: marble.name,
      x: marble.x,
      y: marble.y,
      angle: marble.angle,
      color: marble.color,
      isActive: marble.isActive,
      skill: marble.skill || 'None',
      radius: marble.radius,
    })),
    winner: gameState.winner ? {
      id: gameState.winner.id,
      name: gameState.winner.name,
      x: gameState.winner.x,
      y: gameState.winner.y,
      angle: gameState.winner.angle,
      color: gameState.winner.color,
      isActive: gameState.winner.isActive,
      skill: gameState.winner.skill || 'None',
      radius: gameState.winner.radius,
    } : undefined,
    entities: gameState.entities.map((entity: any) => ({
      x: entity.x,
      y: entity.y,
      angle: entity.angle,
      shape: JSON.stringify(entity.shape),
      life: entity.life,
    })),
    isRunning: gameState.isRunning,
    winnerRank: gameState.winnerRank,
    totalMarbleCount: gameState.totalMarbleCount,
    shakeAvailable: gameState.shakeAvailable,
    skillEffects: gameState.skillEffects?.map((effect: any) => ({
      type: effect.type,
      x: effect.x,
      y: effect.y,
      extra: JSON.stringify(effect.extra || {}),
    })) || [],
  };

  // protobuf 메시지 생성 및 직렬화
  const message = GameStateMessage.create(protoData);
  return GameStateMessage.encode(message).finish();
}

// protobuf를 GameState로 역직렬화
export function deserializeGameState(buffer: Uint8Array): any {
  if (!GameStateMessage) {
    throw new Error('Protobuf not initialized. Call initProtobuf() first.');
  }

  const message = GameStateMessage.decode(buffer);
  const protoData = GameStateMessage.toObject(message) as ProtoGameState;

  // 데이터 변환
  return {
    marbles: protoData.marbles.map(marble => ({
      id: marble.id,
      name: marble.name,
      x: marble.x,
      y: marble.y,
      angle: marble.angle,
      color: marble.color,
      isActive: marble.isActive,
      skill: marble.skill === 'None' ? null : marble.skill,
      radius: marble.radius,
    })),
    winners: (protoData.winners ?? []).map(marble => ({
      id: marble.id,
      name: marble.name,
      x: marble.x,
      y: marble.y,
      angle: marble.angle,
      color: marble.color,
      isActive: marble.isActive,
      skill: marble.skill === 'None' ? null : marble.skill,
      radius: marble.radius,
    })),
    winner: protoData.winner ? {
      id: protoData.winner.id,
      name: protoData.winner.name,
      x: protoData.winner.x,
      y: protoData.winner.y,
      angle: protoData.winner.angle,
      color: protoData.winner.color,
      isActive: protoData.winner.isActive,
      skill: protoData.winner.skill === 'None' ? null : protoData.winner.skill,
      radius: protoData.winner.radius,
    } : null,
    entities: (protoData.entities || []).map(entity => ({
      x: entity.x,
      y: entity.y,
      angle: entity.angle,
      shape: JSON.parse(entity.shape),
      life: entity.life,
    })),
    isRunning: protoData.isRunning,
    winnerRank: protoData.winnerRank,
    totalMarbleCount: protoData.totalMarbleCount,
    shakeAvailable: protoData.shakeAvailable,
    skillEffects: protoData.skillEffects?.map(effect => ({
      type: effect.type,
      x: effect.x,
      y: effect.y,
      extra: effect.extra ? JSON.parse(effect.extra) : {},
    })) || [],
  };
}
