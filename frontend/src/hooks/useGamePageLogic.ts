import { useState, useEffect, useRef } from 'react';
import { useGame } from '../contexts/GameContext';
import { useParticipantManager } from './useParticipantManager';
import { useGameSettings } from './useGameSettings';
import { useSkillHandler } from './useSkillHandler';
import { SkillType } from 'common';

export const useGamePageLogic = () => {
  const {
    roomDetails,
    gameDetails,
    gameState,
    isManager,
    finalRanking,
    showPasswordModal,
    setShowPasswordModal,
    joinError,
    rouletteInstance,
    availableMaps,
    handlePasswordJoin,
    initializeGame,
    toastMethods,
  } = useGame();

  const [showRankingModal, setShowRankingModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const { namesInput, handleNamesChange, shuffleNames } = useParticipantManager(gameDetails?.marbles?.join(',') || '');

  const marbleCount = gameState?.totalMarbleCount || 0;
  const {
    mapIndex,
    useSkills,
    autoRecording,
    winnerSelectionType,
    winningRank,
    handleMapChange,
    handleSkillChange,
    handleAutoRecordingChange,
    handleWinningRankChange,
    selectFirstWinner,
    selectLastWinner,
    startGame,
  } = useGameSettings(gameDetails, rouletteInstance, marbleCount);

  const { selectedSkill, handleSkillSelect, handleCanvasClick } = useSkillHandler(rouletteInstance, gameState, {
    showCooldownWarning: toastMethods.showCooldownWarning,
    showError: toastMethods.showError,
  });

  useEffect(() => {
    if (finalRanking && finalRanking.length > 0) {
      setShowRankingModal(true);
    }
  }, [finalRanking]);

  const onPasswordJoin = () => {
    handlePasswordJoin(passwordInput);
  };

  return {
    roomName: roomDetails?.name || null,
    gameDetails,
    isManager,
    finalRanking,
    showRankingModal,
    setShowRankingModal,
    showPasswordModal,
    passwordInput,
    setPasswordInput,
    joinError,
    winnerSelectionType,
    winningRankDisplay: winningRank,
    availableMaps,
    initializeGame,
    handlePasswordJoin: onPasswordJoin,
    namesInput,
    autoRecording,
    useSkills,
    mapIndex,
    onNamesInput: (e: React.FormEvent<HTMLTextAreaElement>) => handleNamesChange(e.currentTarget.value),
    onShuffleClick: shuffleNames,
    onStartClick: startGame,
    onSkillChange: (e: React.ChangeEvent<HTMLInputElement>) => handleSkillChange(e.target.checked),
    onWinningRankChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      handleWinningRankChange(parseInt(e.target.value, 10)),
    onFirstWinnerClick: selectFirstWinner,
    onLastWinnerClick: selectLastWinner,
    onMapChange: (e: React.ChangeEvent<HTMLSelectElement>) => handleMapChange(parseInt(e.target.value, 10)),
    onAutoRecordingChange: (e: React.ChangeEvent<HTMLInputElement>) => handleAutoRecordingChange(e.target.checked),
    passwordInputRef,
    selectedSkill,
    handleSkillSelect: (skill: SkillType) => handleSkillSelect(skill),
    handleCanvasClick,
    gameState,
  };
};
