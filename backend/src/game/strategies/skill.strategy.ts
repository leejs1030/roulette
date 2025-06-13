import { GameRoom } from '../game-room';
import { SkillPosition } from '../types/skill.type';
import { gamestate, SkillEffect } from 'common';

export interface SkillStrategy<T extends gamestate.SkillType> {
  execute(room: GameRoom, skillPosition: SkillPosition, extra: SkillEffect, userNickname?: string): void;
}

// This map ensures that the 'extra' parameter is correctly typed based on the skill type.
export interface SkillExtraMap {
  [gamestate.SkillType.Impact]: gamestate.ImpactSkillEffect;
  [gamestate.SkillType.DummyMarble]: gamestate.DummyMarbleSkillEffect;
  // Add other skill types here as they are created
}
