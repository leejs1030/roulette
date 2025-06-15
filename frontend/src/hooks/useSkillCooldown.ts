import { useState, useEffect } from 'react';
import { SkillCooldown, SkillType } from 'common';
import { skillCooldownManager } from '../utils/skillCooldownManager';

export interface SkillCooldownInfo {
  canUse: boolean;
  remainingTime: number;
  totalTime: number;
  progress: number; // 0-1 사이의 진행률
}

export const useSkillCooldown = (skillType?: SkillType) => {
  const [cooldowns, setCooldowns] = useState<SkillCooldown[]>([]);
  const [skillInfo, setSkillInfo] = useState<SkillCooldownInfo>({
    canUse: true,
    remainingTime: 0,
    totalTime: 0,
    progress: 0,
  });

  useEffect(() => {
    if (skillType === SkillType.None) {
      setSkillInfo({
        canUse: true,
        remainingTime: 0,
        totalTime: 0,
        progress: 0,
      });
      return;
    }

    const handleCooldownUpdate = (updatedCooldowns: SkillCooldown[]) => {
      setCooldowns(updatedCooldowns);

      if (skillType) {
        const cooldown = updatedCooldowns.find(c => c.skillType === skillType);
        if (cooldown) {
          const progress = 1 - (cooldown.remainingTime / cooldown.totalCooldownTime);
          setSkillInfo({
            canUse: false,
            remainingTime: cooldown.remainingTime,
            totalTime: cooldown.totalCooldownTime,
            progress: Math.max(0, Math.min(1, progress)),
          });
        } else {
          setSkillInfo({
            canUse: true,
            remainingTime: 0,
            totalTime: 0,
            progress: 0,
          });
        }
      }
    };

    // 리스너 등록
    skillCooldownManager.addListener(handleCooldownUpdate);

    // 초기 상태 설정
    handleCooldownUpdate(skillCooldownManager.getAllCooldowns());

    // 타이머 시작 (100ms마다 업데이트)
    const stopTimer = skillCooldownManager.startUpdateTimer(100);

    return () => {
      skillCooldownManager.removeListener(handleCooldownUpdate);
      stopTimer();
    };
  }, [skillType]);

  return {
    cooldowns,
    skillInfo,
    canUseSkill: (type: SkillType) => skillCooldownManager.canUseSkill(type),
    getRemainingTime: (type: SkillType) => skillCooldownManager.getRemainingCooldown(type),
  };
};
