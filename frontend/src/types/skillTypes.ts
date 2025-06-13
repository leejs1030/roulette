import {
  SkillType as ServerSkillType,
  SkillPosition,
  SkillEffectBase,
  ImpactSkillEffect,
  DummyMarbleSkillEffect,
} from 'common';

export { ServerSkillType };

export { SkillPosition };

export { SkillEffectBase };

export interface ImpactSkillEffectFromServer extends ImpactSkillEffect {
  type: ServerSkillType.Impact;
}

export interface DummyMarbleSkillEffectFromServer extends DummyMarbleSkillEffect {
  type: ServerSkillType.DummyMarble;
}

export type ServerSkillEffect = ImpactSkillEffectFromServer | DummyMarbleSkillEffectFromServer;

export interface FrontendSkillEffectWrapper {
  id: string;
  type: ServerSkillType;
  serverEffectData: ServerSkillEffect;
  startTime: number;
  duration: number;
}
