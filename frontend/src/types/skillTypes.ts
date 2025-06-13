import { gamestate } from 'common';

export type ServerSkillType = gamestate.SkillType;
export type SkillPosition = gamestate.IPosition;
export type SkillEffectBase = gamestate.ISkillEffectBase;

export interface ImpactSkillEffectFromServer extends gamestate.ImpactSkillEffect {
  type: gamestate.SkillType.Impact;
}

export interface DummyMarbleSkillEffectFromServer extends gamestate.DummyMarbleSkillEffect {
  type: gamestate.SkillType.DummyMarble;
}

export type ServerSkillEffect = ImpactSkillEffectFromServer | DummyMarbleSkillEffectFromServer;

export interface FrontendSkillEffectWrapper {
  id: string;
  type: gamestate.SkillType;
  serverEffectData: ServerSkillEffect;
  startTime: number;
  duration: number;
}
