import { gamestate } from 'common';

export type ServerSkillType = gamestate.SkillType;
export type SkillPosition = gamestate.IPosition;
export type SkillEffectBase = gamestate.ISkillEffectBase;

export interface ImpactSkillEffectFromServer extends gamestate.ImpactSkillEffect {
  type: gamestate.SkillType.Impact;
  toJSON: () => { [k: string]: any }; // toJSON 메서드 필수
}

export interface DummyMarbleSkillEffectFromServer extends gamestate.DummyMarbleSkillEffect {
  type: gamestate.SkillType.DummyMarble;
  toJSON: () => { [k: string]: any }; // toJSON 메서드 필수
}

export type ServerSkillEffect = ImpactSkillEffectFromServer | DummyMarbleSkillEffectFromServer;

export interface FrontendSkillEffectWrapper {
  id: string;
  type: gamestate.SkillType;
  serverEffectData: ServerSkillEffect;
  startTime: number;
  duration: number;
}
