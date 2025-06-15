import { useState, useCallback } from 'react';
import socketService from '../services/socketService';
import { Skills, skillsToSkillType } from '../types/gameTypes';
import { Roulette } from '../roulette';
import { GameStateDto } from 'common';
import { skillCooldownManager } from '../utils/skillCooldownManager';

export const useSkillHandler = (
  rouletteInstance: Roulette | null,
  gameState: GameStateDto | null,
) => {
  const [selectedSkill, setSelectedSkill] = useState<Skills>(Skills.None);

  const handleSkillSelect = useCallback((skill: Skills) => {
    setSelectedSkill(skill);
  }, []);

  const handleCanvasClick = useCallback(
    async (event: React.MouseEvent<HTMLDivElement>) => {
      if (!rouletteInstance || selectedSkill === Skills.None || !gameState?.isRunning) {
        return;
      }

      // Skills를 SkillType으로 매핑
      const skillType = skillsToSkillType(selectedSkill);
      if (!skillType) {
        return;
      }

      // 클라이언트 측 쿨타임 체크
      if (!skillCooldownManager.canUseSkill(skillType)) {
        const remainingTime = skillCooldownManager.getRemainingCooldown(skillType);
        const remainingSeconds = Math.ceil(remainingTime / 1000);
        alert(`스킬이 쿨타임 중입니다. 남은 시간: ${remainingSeconds}초`);
        return;
      }

      const canvas = event.currentTarget.querySelector('canvas');
      if (!canvas) {
        console.error('Canvas element not found.');
        return;
      }

      const skillPosition = rouletteInstance
        .getCoordinateManager()
        .screenToWorld({ x: event.clientX, y: event.clientY });
      let extra: any = {};

      switch (selectedSkill) {
        case Skills.Impact:
          extra = { radius: 5 };
          break;
        case Skills.DummyMarble:
          extra = { count: 3 };
          break;
        default:
          break;
      }

      try {
        const result = await socketService.useSkill(selectedSkill, skillPosition, extra);
        if (!result.success && result.message) {
          alert(result.message);
        }
        // setSelectedSkill(Skills.None); // Reset skill after use
      } catch (error) {
        console.error('Failed to use skill:', error);
        alert('Failed to use skill.');
      }
    },
    [rouletteInstance, selectedSkill, gameState?.isRunning],
  );

  return {
    selectedSkill,
    handleSkillSelect,
    handleCanvasClick,
  };
};
