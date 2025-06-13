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

type IGameStateDto = protoRoot.gamestate.IGameStateDto;
type IMarbleDto = protoRoot.gamestate.IMarbleDto;

// Enum 매핑 함수들
const skillTypeToProto = (skillType: ISkillType): protoRoot.gamestate.SkillType => {
  switch (skillType) {
    case protoRoot.gamestate.SkillType.Impact:
      return protoRoot.gamestate.SkillType.Impact;
    case protoRoot.gamestate.SkillType.DummyMarble:
      return protoRoot.gamestate.SkillType.DummyMarble;
    default:
      return protoRoot.gamestate.SkillType.Impact;
  }
};

const skillTypeFromProto = (protoSkillType: protoRoot.gamestate.SkillType): ISkillType => {
  switch (protoSkillType) {
    case protoRoot.gamestate.SkillType.Impact:
      return protoRoot.gamestate.SkillType.Impact;
    case protoRoot.gamestate.SkillType.DummyMarble:
      return protoRoot.gamestate.SkillType.DummyMarble;
    default:
      return protoRoot.gamestate.SkillType.Impact;
  }
};

// EntityShape 변환 함수들
const entityShapeToProto = (shape: IMapEntityState['shape']): protoRoot.gamestate.IEntityShape => {
  if (shape?.boxShape) {
    return {
      boxShape: {
        type: protoRoot.gamestate.EntityShapeType.box,
        width: shape.boxShape.width,
        height: shape.boxShape.height,
        rotation: shape.boxShape.rotation,
      },
    };
  } else if (shape?.circleShape) {
    return {
      circleShape: {
        type: protoRoot.gamestate.EntityShapeType.circle,
        radius: shape.circleShape.radius,
      },
    };
  } else if (shape?.polylineShape) {
    return {
      polylineShape: {
        type: protoRoot.gamestate.EntityShapeType.polyline,
        rotation: shape.polylineShape.rotation,
        points: shape.polylineShape.points?.map((p) => ({ x: p.x, y: p.y })),
      },
    };
  } else {
    throw new Error(`Unknown entity shape type: ${JSON.stringify(shape)}`);
  }
};

const entityShapeFromProto = (protoShape: protoRoot.gamestate.IEntityShape): IMapEntityState['shape'] => {
  if (protoShape.boxShape) {
    return {
      boxShape: {
        type: protoRoot.gamestate.EntityShapeType.box,
        width: protoShape.boxShape.width || 0,
        height: protoShape.boxShape.height || 0,
        rotation: protoShape.boxShape.rotation || 0,
      },
    };
  } else if (protoShape.circleShape) {
    return {
      circleShape: {
        type: protoRoot.gamestate.EntityShapeType.circle,
        radius: protoShape.circleShape.radius || 0,
      },
    };
  } else if (protoShape.polylineShape) {
    return {
      polylineShape: {
        type: protoRoot.gamestate.EntityShapeType.polyline,
        rotation: protoShape.polylineShape.rotation || 0,
        points: (protoShape.polylineShape.points || []).map((p) => ({ x: p.x || 0, y: p.y || 0 })),
      },
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
  if (skillEffect.impactEffect) {
    return {
      impactEffect: {
        base: {
          id: skillEffect.impactEffect.base?.id,
          type: skillTypeToProto(skillEffect.impactEffect.base?.type as ISkillType),
          timestamp: skillEffect.impactEffect.base?.timestamp,
        },
        position: {
          x: skillEffect.impactEffect.position?.x,
          y: skillEffect.impactEffect.position?.y,
        },
        radius: skillEffect.impactEffect.radius,
      },
    };
  } else if (skillEffect.dummyMarbleEffect) {
    return {
      dummyMarbleEffect: {
        base: {
          id: skillEffect.dummyMarbleEffect.base?.id,
          type: skillTypeToProto(skillEffect.dummyMarbleEffect.base?.type as ISkillType),
          timestamp: skillEffect.dummyMarbleEffect.base?.timestamp,
        },
      },
    };
  } else {
    throw new Error(`Unknown skill effect type: ${JSON.stringify(skillEffect)}`);
  }
};

const skillEffectFromProto = (protoSkillEffect: protoRoot.gamestate.ISkillEffect): ISkillEffect => {
  if (protoSkillEffect.impactEffect) {
    const effect = protoSkillEffect.impactEffect;
    return {
      impactEffect: {
        base: {
          id: effect.base?.id || '',
          type: skillTypeFromProto(effect.base?.type || 0),
          timestamp: effect.base?.timestamp || 0,
        },
        position: {
          x: effect.position?.x || 0,
          y: effect.position?.y || 0,
        },
        radius: effect.radius || 0,
      },
    };
  } else if (protoSkillEffect.dummyMarbleEffect) {
    const effect = protoSkillEffect.dummyMarbleEffect;
    return {
      dummyMarbleEffect: {
        base: {
          id: effect.base?.id || '',
          type: skillTypeFromProto(effect.base?.type || 0),
          timestamp: effect.base?.timestamp || 0,
        },
      },
    };
  } else {
    throw new Error('Unknown protobuf skill effect');
  }
};

// 메인 GameStateDto 변환 함수들
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
  const message = GameStateDtoProto.create(gameState);
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
