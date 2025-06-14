import { GameStateDto as IGameStateDto, MarbleDto as IMarbleDto } from '../types/game-state.dto';
import { MapEntityState as IMapEntityState } from '../types/MapEntity.type';
import { SkillType as ISkillType } from '../types/skill.type';
import { SkillEffect as ISkillEffect } from '../types/skill-effect.type';
import * as protoRoot from './generated/game-state';

// protobuf 메시지 타입들을 가져옴
const GameStateDtoProto = protoRoot.gamestate.GameStateDto;
const MarbleDtoProto = protoRoot.gamestate.MarbleDto;
const MapEntityStateProto = protoRoot.gamestate.MapEntityState;
const SkillEffectProto = protoRoot.gamestate.SkillEffect;
const SkillTypeProto = protoRoot.gamestate.SkillType;

// Enum 매핑 함수들
const skillTypeToProto = (skillType: ISkillType): protoRoot.gamestate.SkillType => {
  switch (skillType) {
    case ISkillType.Impact:
      return SkillTypeProto.SKILL_TYPE_IMPACT;
    case ISkillType.DummyMarble:
      return SkillTypeProto.SKILL_TYPE_DUMMY_MARBLE;
    default:
      return SkillTypeProto.SKILL_TYPE_IMPACT;
  }
};

const skillTypeFromProto = (protoSkillType: protoRoot.gamestate.SkillType): ISkillType => {
  switch (protoSkillType) {
    case SkillTypeProto.SKILL_TYPE_IMPACT:
      return ISkillType.Impact;
    case SkillTypeProto.SKILL_TYPE_DUMMY_MARBLE:
      return ISkillType.DummyMarble;
    default:
      return ISkillType.Impact;
  }
};

// EntityShape 변환 함수들
const entityShapeToProto = (shape: IMapEntityState['shape']): protoRoot.gamestate.IEntityShape => {
  switch (shape.type) {
    case 'box':
      return {
        boxShape: {
          type: protoRoot.gamestate.EntityShapeType.ENTITY_SHAPE_BOX,
          width: shape.width,
          height: shape.height,
          rotation: shape.rotation,
        },
      };
    case 'circle':
      return {
        circleShape: {
          type: protoRoot.gamestate.EntityShapeType.ENTITY_SHAPE_CIRCLE,
          radius: shape.radius,
        },
      };
    case 'polyline':
      return {
        polylineShape: {
          type: protoRoot.gamestate.EntityShapeType.ENTITY_SHAPE_POLYLINE,
          rotation: shape.rotation,
          points: shape.points.map((p) => ({ x: p[0], y: p[1] })),
        },
      };
    default:
      throw new Error(`Unknown entity shape type: ${(shape as any).type}`);
  }
};

const entityShapeFromProto = (protoShape: protoRoot.gamestate.IEntityShape): IMapEntityState['shape'] => {
  if (protoShape.boxShape) {
    return {
      type: 'box',
      width: protoShape.boxShape.width || 0,
      height: protoShape.boxShape.height || 0,
      rotation: protoShape.boxShape.rotation || 0,
    };
  } else if (protoShape.circleShape) {
    return {
      type: 'circle',
      radius: protoShape.circleShape.radius || 0,
    };
  } else if (protoShape.polylineShape) {
    return {
      type: 'polyline',
      rotation: protoShape.polylineShape.rotation || 0,
      points: (protoShape.polylineShape.points || []).map((p) => [p.x || 0, p.y || 0] as [number, number]),
    };
  } else {
    throw new Error('Unknown protobuf entity shape');
  }
};

// MapEntityState 변환 함수들
const mapEntityStateToProto = (entity: IMapEntityState): protoRoot.gamestate.IMapEntityState => {
  return {
    x: entity.x,
    y: entity.y,
    angle: entity.angle,
    shape: entityShapeToProto(entity.shape),
    life: entity.life,
  };
};

const mapEntityStateFromProto = (protoEntity: protoRoot.gamestate.IMapEntityState): IMapEntityState => {
  return {
    x: protoEntity.x || 0,
    y: protoEntity.y || 0,
    angle: protoEntity.angle || 0,
    shape: entityShapeFromProto(protoEntity.shape!),
    life: protoEntity.life || 0,
  };
};

// MarbleDto 변환 함수들
const marbleDtoToProto = (marble: IMarbleDto): protoRoot.gamestate.IMarbleDto => {
  return {
    id: marble.id,
    name: marble.name,
    x: marble.x,
    y: marble.y,
    angle: marble.angle,
    color: marble.color,
    hue: marble.hue,
    isActive: marble.isActive,
    isDummy: marble.isDummy,
    radius: marble.radius,
  };
};

const marbleDtoFromProto = (protoMarble: protoRoot.gamestate.IMarbleDto): IMarbleDto => {
  return {
    id: protoMarble.id || 0,
    name: protoMarble.name || '',
    x: protoMarble.x || 0,
    y: protoMarble.y || 0,
    angle: protoMarble.angle || 0,
    color: protoMarble.color || '',
    hue: protoMarble.hue || 0,
    isActive: protoMarble.isActive || false,
    isDummy: protoMarble.isDummy || false,
    radius: protoMarble.radius || 0,
  };
};

// SkillEffect 변환 함수들
const skillEffectToProto = (skillEffect: ISkillEffect): protoRoot.gamestate.ISkillEffect => {
  if (skillEffect.type === ISkillType.Impact) {
    return {
      impactEffect: {
        base: {
          id: skillEffect.id,
          type: skillTypeToProto(skillEffect.type),
          timestamp: skillEffect.timestamp,
        },
        position: {
          x: skillEffect.position.x,
          y: skillEffect.position.y,
        },
        radius: skillEffect.radius,
      },
    };
  } else if (skillEffect.type === ISkillType.DummyMarble) {
    return {
      dummyMarbleEffect: {
        base: {
          id: skillEffect.id,
          type: skillTypeToProto(skillEffect.type),
          timestamp: skillEffect.timestamp,
        },
      },
    };
  } else {
    throw new Error(`Unknown skill effect type: ${(skillEffect as any).type}`);
  }
};

const skillEffectFromProto = (protoSkillEffect: protoRoot.gamestate.ISkillEffect): ISkillEffect => {
  if (protoSkillEffect.impactEffect) {
    const effect = protoSkillEffect.impactEffect;
    return {
      id: effect.base?.id || '',
      type: ISkillType.Impact,
      timestamp: effect.base?.timestamp || 0,
      position: {
        x: effect.position?.x || 0,
        y: effect.position?.y || 0,
      },
      radius: effect.radius || 0,
    };
  } else if (protoSkillEffect.dummyMarbleEffect) {
    const effect = protoSkillEffect.dummyMarbleEffect;
    return {
      id: effect.base?.id || '',
      type: ISkillType.DummyMarble,
      timestamp: effect.base?.timestamp || 0,
    };
  } else {
    throw new Error('Unknown protobuf skill effect');
  }
};

// 메인 GameStateDto 변환 함수들
const gameStateDtoToProto = (gameState: IGameStateDto): protoRoot.gamestate.IGameStateDto => {
  return {
    marbles: gameState.marbles.map(marbleDtoToProto),
    winners: gameState.winners.map(marbleDtoToProto),
    winner: gameState.winner ? marbleDtoToProto(gameState.winner) : undefined,
    entities: gameState.entities.map(mapEntityStateToProto),
    isRunning: gameState.isRunning,
    winnerRank: gameState.winnerRank,
    totalMarbleCount: gameState.totalMarbleCount,
    shakeAvailable: gameState.shakeAvailable,
    skillEffects: gameState.skillEffects.map(skillEffectToProto),
  };
};

const gameStateDtoFromProto = (protoGameState: protoRoot.gamestate.IGameStateDto): IGameStateDto => {
  return {
    marbles: (protoGameState.marbles || []).map(marbleDtoFromProto),
    winners: (protoGameState.winners || []).map(marbleDtoFromProto),
    winner: protoGameState.winner ? marbleDtoFromProto(protoGameState.winner) : null,
    entities: (protoGameState.entities || []).map(mapEntityStateFromProto),
    isRunning: protoGameState.isRunning || false,
    winnerRank: protoGameState.winnerRank || 0,
    totalMarbleCount: protoGameState.totalMarbleCount || 0,
    shakeAvailable: protoGameState.shakeAvailable || false,
    skillEffects: (protoGameState.skillEffects || []).map(skillEffectFromProto),
  };
};

// 직렬화/역직렬화 함수들
export const serializeGameState = (gameState: IGameStateDto): Uint8Array => {
  const protoGameState = gameStateDtoToProto(gameState);
  const message = GameStateDtoProto.create(protoGameState);
  return GameStateDtoProto.encode(message).finish();
};

export const deserializeGameState = (buffer: Uint8Array): IGameStateDto => {
  const decoded = GameStateDtoProto.decode(buffer);
  const protoGameState = GameStateDtoProto.toObject(decoded);
  return gameStateDtoFromProto(protoGameState);
};

// 바이너리 데이터를 Base64로 인코딩/디코딩 하는 헬퍼 함수들 (Socket.IO에서 사용)
export const serializeGameStateToBase64 = (gameState: IGameStateDto): string => {
  const buffer = serializeGameState(gameState);
  return Buffer.from(buffer).toString('base64');
};

export const deserializeGameStateFromBase64 = (base64String: string): IGameStateDto => {
  const buffer = Buffer.from(base64String, 'base64');
  return deserializeGameState(new Uint8Array(buffer));
};
