import { useState, useCallback } from 'react';
import socketService from '../services/socketService';
import { Roulette } from '../roulette';
import { GameStateDto, SkillType } from 'common';
import { skillCooldownManager } from '../utils/skillCooldownManager';
import { useToast } from './useToast';

interface ToastMethods {
  showCooldownWarning: (skillName: string, remainingSeconds: number) => void;
  showError: (message: string) => void;
}

export const useSkillHandler = (
  rouletteInstance: Roulette | null,
  gameState: GameStateDto | null,
  toastMethods?: ToastMethods,
) => {
  const [selectedSkill, setSelectedSkill] = useState<SkillType>(SkillType.None);
  const fallbackToast = useToast();

  // toastMethods가 제공되지 않으면 fallback 사용
  const toast = toastMethods || {
    showCooldownWarning: fallbackToast.showCooldownWarning,
    showError: fallbackToast.showError,
  };

  const handleSkillSelect = useCallback((skill: SkillType) => {
    setSelectedSkill(skill);
  }, []);

  const handleCanvasClick = useCallback(
    async (event: React.MouseEvent<HTMLDivElement>) => {
      if (!rouletteInstance || selectedSkill === SkillType.None || !gameState?.isRunning) {
        return;
      }

      // Skills를 SkillType으로 매핑

      // 클라이언트 측 쿨타임 체크
      if (!skillCooldownManager.canUseSkill(selectedSkill)) {
        const remainingTime = skillCooldownManager.getRemainingCooldown(selectedSkill);
        const remainingSeconds = Math.ceil(remainingTime / 1000);

        // 스킬 이름을 한국어로 변환
        const skillNameMap = {
          [SkillType.Impact]: '충격파',
          [SkillType.DummyMarble]: '더미 구슬',
        };
        const skillName = skillNameMap[selectedSkill] || selectedSkill;
        toast.showCooldownWarning(skillName, remainingSeconds);
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
        case SkillType.Impact:
          extra = { radius: 5 };
          break;
        case SkillType.DummyMarble:
          extra = { count: 3 };
          break;
        default:
          break;
      }

      try {
        const result = await socketService.useSkill(selectedSkill, skillPosition, extra);
        if (!result.success && result.message) {
          toast.showError(result.message);
        }
        // setSelectedSkill(SkillType.None); // Reset skill after use
      } catch (error) {
        console.error('Failed to use skill:', error);
        toast.showError('스킬 사용 중 오류가 발생했습니다.');
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
