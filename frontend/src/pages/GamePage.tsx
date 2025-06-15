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
          <div style={{ marginBottom: '5px', fontSize: '14px', fontWeight: 'bold' }}>스킬 선택:</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <SkillButton
              skillType={SkillType.None}
              selected={selectedSkill === SkillType.None}
              onClick={() => handleSkillSelect(SkillType.None)}
              className="game-skill-button"
            >
              없음
            </SkillButton>
            <SkillButton
              skillType={SkillType.Impact}
              selected={selectedSkill === SkillType.Impact}
              onClick={() => handleSkillSelect(SkillType.Impact)}
              className="game-skill-button"
            >
              충격파 (3초)
            </SkillButton>
            <SkillButton
              skillType={SkillType.DummyMarble}
              selected={selectedSkill === SkillType.DummyMarble}
              onClick={() => handleSkillSelect(SkillType.DummyMarble)}
              className="game-skill-button"
            >
              더미 구슬 (5초)
            </SkillButton>
          </div>
        </div>
      )}
      <div onClick={handleCanvasClick} style={{ cursor: selectedSkill !== SkillType.None ? 'crosshair' : 'default' }}>
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
        <ToastContainer messages={toastMethods.messages} onClose={toastMethods.removeToast} />
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
