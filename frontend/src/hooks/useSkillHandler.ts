import { useState, useCallback } from 'react';
import socketService from '../services/socketService';
import { Skills } from '../types/gameTypes';
import { Roulette } from '../roulette';
import { gamestate } from 'common';

type GameStateDto = gamestate.IGameStateDto;

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

      const canvas = event.currentTarget.querySelector('canvas');
      if (!canvas) {
        console.error('Canvas element not found.');
        return;
      }

      const skillPosition = rouletteInstance
        .getCoordinateManager()
        .screenToWorld(new gamestate.Position({ x: event.clientX, y: event.clientY }));
      let extra: any = {};
      let skillTypeToSend: gamestate.SkillType;

      switch (selectedSkill) {
        case Skills.Impact:
          skillTypeToSend = gamestate.SkillType.Impact;
          extra = { impactEffect: { base: { type: gamestate.SkillType.Impact }, position: skillPosition, radius: 5 } };
          break;
        case Skills.DummyMarble:
          skillTypeToSend = gamestate.SkillType.DummyMarble;
          extra = { dummyMarbleEffect: { base: { type: gamestate.SkillType.DummyMarble } } };
          break;
        default:
          return; // No skill selected
      }

      try {
        await socketService.useSkill(skillTypeToSend, skillPosition, extra);
        setSelectedSkill(Skills.None); // Reset skill after use
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
