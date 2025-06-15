import { SkillType } from './skill.type';

export interface SkillCooldown {
  skillType: SkillType;
  remainingTime: number; // milliseconds
  totalCooldownTime: number; // milliseconds
}

export interface UserSkillCooldowns {
  userId: number;
  cooldowns: SkillCooldown[];
}

export const SKILL_COOLDOWN_TIMES: Record<SkillType, number> = {
  [SkillType.None]: 0, // 없음 스킬은 쿨타임 없음
  [SkillType.Impact]: 3000, // 3초
  [SkillType.DummyMarble]: 5000, // 5초
};

export interface SkillCooldownResponse {
  success: boolean;
  message?: string;
  cooldowns?: SkillCooldown[];
}
