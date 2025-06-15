import { Injectable } from '@nestjs/common';
import { SkillType, SkillCooldown, SKILL_COOLDOWN_TIMES } from 'common';

interface UserCooldownData {
  userId: number;
  cooldowns: Map<SkillType, number>; // SkillType -> endTime (timestamp)
}

@Injectable()
export class SkillCooldownManager {
  private userCooldowns = new Map<number, UserCooldownData>();

  public canUseSkill(userId: number, skillType: SkillType): boolean {
    const userData = this.userCooldowns.get(userId);
    if (!userData) return true;

    const endTime = userData.cooldowns.get(skillType);
    if (!endTime) return true;

    return Date.now() >= endTime;
  }

  public useSkill(userId: number, skillType: SkillType): void {
    const cooldownDuration = SKILL_COOLDOWN_TIMES[skillType];
    const endTime = Date.now() + cooldownDuration;

    let userData = this.userCooldowns.get(userId);
    if (!userData) {
      userData = {
        userId,
        cooldowns: new Map(),
      };
      this.userCooldowns.set(userId, userData);
    }

    userData.cooldowns.set(skillType, endTime);
  }

  public getUserCooldowns(userId: number): SkillCooldown[] {
    const userData = this.userCooldowns.get(userId);
    if (!userData) return [];

    const now = Date.now();
    const cooldowns: SkillCooldown[] = [];

    for (const [skillType, endTime] of userData.cooldowns.entries()) {
      const remainingTime = Math.max(0, endTime - now);
      if (remainingTime > 0) {
        cooldowns.push({
          skillType,
          remainingTime,
          totalCooldownTime: SKILL_COOLDOWN_TIMES[skillType],
        });
      }
    }

    // 만료된 쿨타임 정리
    for (const [skillType, endTime] of userData.cooldowns.entries()) {
      if (now >= endTime) {
        userData.cooldowns.delete(skillType);
      }
    }

    return cooldowns;
  }

  public clearUserCooldowns(userId: number): void {
    this.userCooldowns.delete(userId);
  }

  public getRemainingCooldown(userId: number, skillType: SkillType): number {
    const userData = this.userCooldowns.get(userId);
    if (!userData) return 0;

    const endTime = userData.cooldowns.get(skillType);
    if (!endTime) return 0;

    return Math.max(0, endTime - Date.now());
  }
}
