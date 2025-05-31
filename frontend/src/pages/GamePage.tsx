import React, { useRef, useState, useEffect, FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles.css';
import { useAuth } from '../contexts/AuthContext';
import RankingDisplay from '../components/RankingDisplay';
import PasswordModal from '../components/PasswordModal';
import GameBar from '../components/GameBar';
import SettingsPanel from '../components/SettingsPanel';
import { useGameLogic } from '../hooks/useGameLogic';
import { usePasswordModal } from '../hooks/usePasswordModal';
import { useLocalization } from '../hooks/useLocalization';
import { useGameData } from '../hooks/useGameData';
import { useRouletteInitialization } from '../hooks/useRouletteInitialization';

// GamePage에 필요한 window 속성들을 전역 Window 인터페이스에 선택적으로 추가
declare global {
  interface Window {
    roullete?: any;
    options?: any;
    dataLayer?: any[];
    translateElement?: (element: HTMLElement) => void;
  }
}

const GamePage: FC = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();

  // Refs for DOM elements
  const inNamesRef = useRef<HTMLTextAreaElement>(null);
  const inWinningRankRef = useRef<HTMLInputElement>(null);
  const chkSkillRef = useRef<HTMLInputElement>(null);
  const sltMapRef = useRef<HTMLSelectElement>(null);
  const chkAutoRecordingRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const btnShuffleRef = useRef<HTMLButtonElement>(null);
  const btnStartRef = useRef<HTMLButtonElement>(null);
  const btnLastWinnerRef = useRef<HTMLButtonElement>(null);
  const btnFirstWinnerRef = useRef<HTMLButtonElement>(null);

  // Local state
  const [winnerSelectionType, setWinnerSelectionType] = useState<'first' | 'last' | 'custom'>('first');
  const [isManager, setIsManager] = useState(false);
  const [roomName, setRoomName] = useState<string | null>(null);

  // Custom hooks
  const { currentLocale } = useLocalization();
  const {
    roomDetails,
    gameDetails,
    finalRanking,
    showRankingModal,
    setShowRankingModal,
    fetchGameDetailsAndInitializeUI,
    loadRoomDetails,
    handleGameEnd,
    setGameDetails,
  } = useGameData(inNamesRef, inWinningRankRef, sltMapRef, setWinnerSelectionType);

  const {
    showPasswordModal,
    setShowPasswordModal,
    passwordInput,
    setPasswordInput,
    joinError,
    setJoinError,
    handlePasswordJoin,
  } = usePasswordModal();

  const {
    gameDetailsRef,
    handleInNamesInput,
    handleInNamesBlur,
    handleBtnShuffleClick,
    handleBtnStartClick,
    handleChkSkillChange,
    handleInWinningRankChange,
    handleBtnLastWinnerClick,
    handleBtnFirstWinnerClick,
    handleMapChange,
    handleAutoRecordingChange,
  } = useGameLogic();

  const { rouletteCanvasContainerRef } = useRouletteInitialization({
    roomId,
    fetchGameDetailsAndInitializeUI,
    handleGameEnd,
    setGameDetails,
    setShowPasswordModal,
    loadRoomDetails,
    gameDetailsRef,
    sltMapRef,
    chkAutoRecordingRef,
    inNamesRef,
  });

  // Update gameDetailsRef when gameDetails changes
  useEffect(() => {
    gameDetailsRef.current = gameDetails;
  }, [gameDetails, gameDetailsRef]);

  // Update manager status when user or room details change
  useEffect(() => {
    setIsManager(!!(user && roomDetails && roomDetails.managerId === user.id));
  }, [user, roomDetails]);

  // Update room name when room details change
  useEffect(() => {
    if (roomDetails) {
      setRoomName(roomDetails.name);
    }
  }, [roomDetails]);

  // Handle password join with proper dependencies
  const handlePasswordJoinWrapper = () => {
    handlePasswordJoin(roomId, navigate, fetchGameDetailsAndInitializeUI);
  };

  // Wrapper functions for game logic handlers
  const handleInNamesInputWrapper = () => {
    handleInNamesInput(inNamesRef, gameDetails);
  };

  const handleInNamesBlurWrapper = () => {
    handleInNamesBlur(inNamesRef, gameDetails);
  };

  const handleBtnShuffleClickWrapper = () => {
    handleBtnShuffleClick(inNamesRef, gameDetails);
  };

  const handleBtnStartClickWrapper = () => {
    handleBtnStartClick(gameDetails);
  };

  const handleInWinningRankChangeWrapper = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInWinningRankChange(e, inWinningRankRef, setWinnerSelectionType);
  };

  const handleBtnLastWinnerClickWrapper = () => {
    handleBtnLastWinnerClick(inWinningRankRef, setWinnerSelectionType);
  };

  const handleBtnFirstWinnerClickWrapper = () => {
    handleBtnFirstWinnerClick(inWinningRankRef, setWinnerSelectionType);
  };

  return (
    <>
      <GameBar roomName={roomName} isManager={isManager} />
      <SettingsPanel
        isManager={isManager}
        gameDetails={gameDetails}
        winnerSelectionType={winnerSelectionType}
        sltMapRef={sltMapRef}
        chkAutoRecordingRef={chkAutoRecordingRef}
        inWinningRankRef={inWinningRankRef}
        chkSkillRef={chkSkillRef}
        inNamesRef={inNamesRef}
        btnShuffleRef={btnShuffleRef}
        btnStartRef={btnStartRef}
        btnFirstWinnerRef={btnFirstWinnerRef}
        btnLastWinnerRef={btnLastWinnerRef}
        onMapChange={handleMapChange}
        onAutoRecordingChange={handleAutoRecordingChange}
        onFirstWinnerClick={handleBtnFirstWinnerClickWrapper}
        onLastWinnerClick={handleBtnLastWinnerClickWrapper}
        onWinningRankChange={handleInWinningRankChangeWrapper}
        onSkillChange={handleChkSkillChange}
        onNamesInput={handleInNamesInputWrapper}
        onNamesBlur={handleInNamesBlurWrapper}
        onShuffleClick={handleBtnShuffleClickWrapper}
        onStartClick={handleBtnStartClickWrapper}
      />
      <div className="copyright">
        &copy; 2025.{' '}
        <a href="https://lazygyu.net" target="_blank" rel="noopener noreferrer">
          lazygyu
        </a>
        <span data-trans>
          This program is freeware and may be used freely anywhere, including in broadcasts and videos.
        </span>
      </div>
      <div
        id="roulette-canvas-container"
        ref={rouletteCanvasContainerRef}
        style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0 }}
      />
      {showRankingModal && finalRanking && (
        <RankingDisplay ranking={finalRanking} roomName={roomName} onClose={() => setShowRankingModal(false)} />
      )}
      <PasswordModal
        show={showPasswordModal}
        passwordInput={passwordInput}
        onPasswordInputChange={setPasswordInput}
        onJoin={handlePasswordJoinWrapper}
        joinError={joinError}
        passwordInputRef={passwordInputRef}
      />
    </>
  );
};

export default GamePage;
