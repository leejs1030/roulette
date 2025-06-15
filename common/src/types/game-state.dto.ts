import { MapEntityState } from './MapEntity.type';
import { SkillEffect } from './skill-effect.type';
import { SkillCooldown } from './skill-cooldown.type';

export interface MarbleDto {
  id: number;
  name: string;
  x: number;
  y: number;
  angle: number;
  color: string;
  hue: number;
  isActive: boolean;
  isDummy: boolean;
  radius: number;
}

export interface GameStateDto {
  marbles: MarbleDto[];
  winners: MarbleDto[];
  winner: MarbleDto | null;
  entities: MapEntityState[];
  isRunning: boolean;
  winnerRank: number;
  totalMarbleCount: number;
  shakeAvailable: boolean;
  skillEffects: SkillEffect[];
  userSkillCooldowns?: SkillCooldown[]; // 현재 유저의 스킬 쿨타임 정보
}
