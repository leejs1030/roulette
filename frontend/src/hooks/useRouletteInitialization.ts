import { useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Roulette } from '../roulette';
import { GameStatus, GameInfo } from '../types/gameTypes';
import socketService from '../services/socketService';

interface UseRouletteInitializationOptions {
  roomId: string | undefined;
  fetchGameDetailsAndInitializeUI: (numericRoomId: number) => Promise<void>;
  handleGameEnd: (numericRoomId: number) => Promise<void>;
  setGameDetails: React.Dispatch<React.SetStateAction<GameInfo | null>>;
  setShowPasswordModal: (show: boolean) => void;
  loadRoomDetails: (numericRoomId: number) => Promise<any>;
  gameDetailsRef: React.MutableRefObject<GameInfo | null>;
  sltMapRef: React.RefObject<HTMLSelectElement | null>;
  chkAutoRecordingRef: React.RefObject<HTMLInputElement | null>;
  inNamesRef: React.RefObject<HTMLTextAreaElement | null>;
}

export const useRouletteInitialization = ({
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
}: UseRouletteInitializationOptions) => {
  const navigate = useNavigate();
  const rouletteCanvasContainerRef = useRef<HTMLDivElement>(null);

  const setupSocketSubscriptions = useCallback((numericRoomId: number) => {
    let unsubscribeMaps: (() => void) | undefined;
    let unsubscribeGameState: (() => void) | undefined;

    if (sltMapRef.current) {
      sltMapRef.current.innerHTML = '<option value="">Loading maps...</option>';
      sltMapRef.current.disabled = true;
      unsubscribeMaps = socketService.onAvailableMapsUpdate((maps) => {
        if (!sltMapRef.current) return;
        sltMapRef.current.innerHTML = '';
        maps.forEach((map) => {
          const option = document.createElement('option');
          option.value = map.index.toString();
          option.innerHTML = map.title;
          sltMapRef.current!.append(option);
        });
        sltMapRef.current!.disabled = false;
        const currentMapIdx = gameDetailsRef.current?.mapIndex;
        if (currentMapIdx !== null && typeof currentMapIdx !== 'undefined') {
          sltMapRef.current.value = currentMapIdx.toString();
        }
      });
    }

    unsubscribeGameState = socketService.onGameStateUpdate(async (gameState) => {
      console.log('gameState:', JSON.stringify(gameState, null, 2));
      if (!gameState || !window.roullete) return;
      
      window.roullete.updateStateFromServer(gameState);
      
      setGameDetails((prev) => {
        const newStatus =
          !gameState.isRunning && gameState.winner
            ? GameStatus.FINISHED
            : gameState.isRunning
              ? GameStatus.IN_PROGRESS
              : GameStatus.WAITING;
        const marbles = gameState.marbles ? gameState.marbles.map((m) => m.name) : prev?.marbles || [];
        return {
          id: prev?.id || 0,
          status: newStatus,
          mapIndex: prev?.mapIndex ?? null,
          marbles,
          winningRank: gameState.winnerRank ?? prev?.winningRank ?? null,
          speed: prev?.speed ?? null,
          createdAt: prev?.createdAt || new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
      });

      const gameEndedBySocket =
        !gameState.isRunning &&
        gameState.winners &&
        gameState.winners.length > 0 &&
        gameState.winners.length >= gameState.winnerRank;
      
      if (gameEndedBySocket && gameDetailsRef.current?.status !== GameStatus.FINISHED) {
        await handleGameEnd(numericRoomId);
      }
    });

    return () => {
      if (unsubscribeMaps) unsubscribeMaps();
      if (unsubscribeGameState) unsubscribeGameState();
    };
  }, [gameDetailsRef, sltMapRef, setGameDetails, handleGameEnd]);

  const setupGame = useCallback(async (rouletteInstance: Roulette) => {
    if (!roomId) {
      alert('잘못된 접근입니다. 방 ID가 없습니다.');
      navigate('/');
      return null;
    }
    
    const numericRoomId = parseInt(roomId, 10);
    if (isNaN(numericRoomId)) {
      alert('잘못된 방 ID입니다.');
      navigate('/');
      return null;
    }

    try {
      const room = await loadRoomDetails(numericRoomId);

      if (!socketService.isConnected() || socketService.getCurrentRoomId() !== roomId) {
        await socketService.connect(roomId);
      }

      if (room.isPasswordRequired && !socketService.getJoinedStatus(roomId)) {
        setShowPasswordModal(true);
        return setupSocketSubscriptions(numericRoomId);
      } else if (!socketService.getJoinedStatus(roomId)) {
        const joinResponse = await socketService.joinRoom(roomId, undefined);
        if (joinResponse.success) {
          if (joinResponse.gameState && rouletteInstance) {
            rouletteInstance.updateStateFromServer(joinResponse.gameState);
          }
          await fetchGameDetailsAndInitializeUI(numericRoomId);
        } else {
          alert(joinResponse.message || '방 입장에 실패했습니다. 이전 페이지로 돌아갑니다.');
          navigate(-1);
          return null;
        }
      } else {
        await fetchGameDetailsAndInitializeUI(numericRoomId);
      }

      const savedNames = localStorage.getItem('mbr_names');
      if (savedNames && inNamesRef.current) {
        inNamesRef.current.value = savedNames;
      }

      const cleanup = setupSocketSubscriptions(numericRoomId);

      if (chkAutoRecordingRef.current && window.options && rouletteInstance) {
        chkAutoRecordingRef.current.checked = window.options.autoRecording;
        rouletteInstance.setAutoRecording(window.options.autoRecording);
      }

      return cleanup;
    } catch (error: any) {
      alert(error.message || '방 정보를 가져오거나 연결에 실패했습니다. 이전 페이지로 돌아갑니다.');
      navigate(-1);
      return null;
    }
  }, [
    roomId,
    navigate,
    loadRoomDetails,
    setShowPasswordModal,
    fetchGameDetailsAndInitializeUI,
    setupSocketSubscriptions,
    inNamesRef,
    chkAutoRecordingRef,
  ]);

  const initializeRoulette = useCallback(async (): Promise<(() => void) | null> => {
    if (!rouletteCanvasContainerRef.current) {
      return new Promise((resolve) => {
        setTimeout(async () => {
          const cleanup = await initializeRoulette();
          resolve(cleanup);
        }, 100);
      });
    }

    const rouletteInstance = new Roulette();
    window.roullete = rouletteInstance;
    
    try {
      await rouletteInstance.initialize(rouletteCanvasContainerRef.current);
      const cleanup = await setupGame(rouletteInstance);
      return cleanup;
    } catch (error) {
      console.error('[GamePage] 룰렛 초기화 실패:', error);
      alert('게임 엔진 초기화에 실패했습니다. 페이지를 새로고침 해주세요.');
      return null;
    }
  }, [setupGame]);

  useEffect(() => {
    let cleanup: (() => void) | null = null;

    const initialize = async () => {
      cleanup = await initializeRoulette();
    };

    initialize();

    return () => {
      if (cleanup) cleanup();
      socketService.disconnect();
      delete window.roullete;
    };
  }, [initializeRoulette]);

  return { rouletteCanvasContainerRef };
};
