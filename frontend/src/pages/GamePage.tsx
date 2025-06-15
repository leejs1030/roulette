import React, { FC } from 'react';
import '../styles.css';
import RankingDisplay from '../components/RankingDisplay';
import PasswordModal from '../components/PasswordModal';
import GameBar from '../components/GameBar';
import SettingsPanel from '../components/SettingsPanel';
import { GameProvider } from '../contexts/GameContext';
import { useGamePageLogic } from '../hooks/useGamePageLogic';
import RouletteCanvas from '../components/game/RouletteCanvas';
import GameFooter from '../components/game/GameFooter';
import { Skills, skillsToSkillType } from '../types/gameTypes';
import { SkillButton } from '../components/SkillCooldownIndicator';
import { SkillType } from 'common';
import { ToastContainer } from '../components/ToastNotification';
import { useGame } from '../contexts/GameContext';

const GamePageContent: FC = () => {
  const {
    roomName,
    isManager,
    finalRanking,
    showRankingModal,
    setShowRankingModal,
    showPasswordModal,
    passwordInput,
    setPasswordInput,
    joinError,
    initializeGame,
    handlePasswordJoin,
    selectedSkill,
    handleSkillSelect,
    handleCanvasClick,
    gameState,
    useSkills,
    passwordInputRef,
  } = useGamePageLogic();

  const { toastMethods } = useGame();

  return (
    <>
      <GameBar roomName={roomName || ''} isManager={isManager} />
      {!gameState?.isRunning && <SettingsPanel />}
      <GameFooter />
      {gameState?.isRunning && (
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 1000,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '15px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            minWidth: '200px',
          }}
        >
          <div style={{ marginBottom: '5px', fontSize: '14px', fontWeight: 'bold' }}>
            스킬 선택:
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button
              className={`skill-button ${selectedSkill === Skills.None ? 'selected' : ''}`}
              onClick={() => handleSkillSelect(Skills.None)}
              style={{
                padding: '8px 16px',
                border: selectedSkill === Skills.None ? '2px solid #28a745' : '2px solid #6c757d',
                background: selectedSkill === Skills.None ? '#28a745' : '#6c757d',
                color: 'white',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '12px',
              }}
            >
              없음
            </button>
            <SkillButton
              skillType={SkillType.Impact}
              selected={selectedSkill === Skills.Impact}
              onClick={() => handleSkillSelect(Skills.Impact)}
              className="game-skill-button"
            >
              충격파 (3초)
            </SkillButton>
            <SkillButton
              skillType={SkillType.DummyMarble}
              selected={selectedSkill === Skills.DummyMarble}
              onClick={() => handleSkillSelect(Skills.DummyMarble)}
              className="game-skill-button"
            >
              더미 구슬 (5초)
            </SkillButton>
          </div>
        </div>
      )}
      <div onClick={handleCanvasClick} style={{ cursor: selectedSkill !== Skills.None ? 'crosshair' : 'default' }}>
        <RouletteCanvas initializeGame={initializeGame} />
      </div>
      {showRankingModal && finalRanking && (
        <RankingDisplay ranking={finalRanking} roomName={roomName || ''} onClose={() => setShowRankingModal(false)} />
      )}
      <PasswordModal
        show={showPasswordModal}
        passwordInput={passwordInput}
        onPasswordInputChange={setPasswordInput}
        onJoin={handlePasswordJoin}
        joinError={joinError}
        passwordInputRef={passwordInputRef}
      />
      <div className={gameState?.isRunning ? 'game-running' : ''}>
        <ToastContainer 
          messages={toastMethods.messages} 
          onClose={toastMethods.removeToast} 
        />
      </div>
    </>
  );
};

const GamePage: FC = () => {
  return (
    <GameProvider>
      <GamePageContent />
    </GameProvider>
  );
};

export default GamePage;
