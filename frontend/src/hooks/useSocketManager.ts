import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import socketService from '../services/socketService';
import { getRoomDetails, getRoomGameDetails, getGameRanking } from '../services/api';
import { RoomInfo, GameInfo, RankingEntry, MapInfo } from '../types/gameTypes';
import { Roulette } from '../roulette';
import { GameStateDto, GameStatus } from 'common';

export const useSocketManager = (roomId: string | undefined, rouletteInstance: Roulette | null) => {
  const navigate = useNavigate();
  const [roomDetails, setRoomDetails] = useState<RoomInfo | null>(null);
  const [gameDetails, setGameDetails] = useState<GameInfo | null>(null);
  const [gameState, setGameState] = useState<GameStateDto | null>(null);
  const [finalRanking, setFinalRanking] = useState<RankingEntry[] | null>(null);
  const [availableMaps, setAvailableMaps] = useState<MapInfo[]>([]);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [joinError, setJoinError] = useState<string | null>(null);
  const [isManager, setIsManager] = useState(false);

  const handlePasswordJoin = useCallback(async (password: string) => {
    if (!roomId || !rouletteInstance) {
      setJoinError('Room ID or game instance is missing.');
      return;
    }
    setJoinError(null);
    const numericRoomId = parseInt(roomId, 10);
    try {
      const rankingData = await getGameRanking(numericRoomId, password);
      setFinalRanking(rankingData.rankings);
      setShowPasswordModal(false);
      socketService.saveRoomPassword(roomId, password); // 비밀번호 저장

      if (!socketService.isConnected() || socketService.getCurrentRoomId() !== roomId) {
        await socketService.connect(roomId);
      }
      if (!socketService.getJoinedStatus(roomId)) {
        const joinResponse = await socketService.joinRoom(roomId, password);
        if (!joinResponse.success) {
          alert(joinResponse.message || 'Failed to join room.');
          navigate(-1);
          return;
        }
        if (joinResponse.gameState) {
          rouletteInstance.updateStateFromServer(joinResponse.gameState);
        }
      }

      const fetchedGameDetails = await getRoomGameDetails(numericRoomId);
      setGameDetails(fetchedGameDetails);
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        setJoinError('Incorrect password.');
        socketService.removeRoomPassword(roomId); // 비밀번호 틀리면 삭제
      } else {
        console.error('Error joining room with password:', error);
        setJoinError('An error occurred while joining the room.');
      }
    }
  }, [roomId, rouletteInstance, navigate]);

  useEffect(() => {
    if (!roomId || !rouletteInstance) return;

    const numericRoomId = parseInt(roomId, 10);
    if (isNaN(numericRoomId)) {
      alert('Invalid Room ID.');
      navigate('/');
      return;
    }

    const connectAndJoin = async () => {
      try {
        const room = await getRoomDetails(numericRoomId);
        setRoomDetails(room);

        if (!socketService.isConnected() || socketService.getCurrentRoomId() !== roomId) {
          await socketService.connect(roomId);
        }

        const fetchedGameDetails = await getRoomGameDetails(numericRoomId);
        setGameDetails(fetchedGameDetails);

        if (room.isPasswordRequired) {
          if (fetchedGameDetails.status === GameStatus.FINISHED) {
            const savedPassword = socketService.loadRoomPassword(roomId);
            if (savedPassword) {
              try {
                await handlePasswordJoin(savedPassword); // 저장된 비밀번호로 자동 시도
              } catch (error) {
                // 자동 로그인 실패 시 (예: 비밀번호 변경)
                setShowPasswordModal(true);
              }
            } else {
              setShowPasswordModal(true);
            }
          } else if (!socketService.getJoinedStatus(roomId)) {
            setShowPasswordModal(true);
          }
        } else {
          if (fetchedGameDetails.status === GameStatus.FINISHED) {
            const rankingData = await getGameRanking(numericRoomId);
            setFinalRanking(rankingData.rankings);
          }
          if (!socketService.isConnected() || socketService.getCurrentRoomId() !== roomId) {
            await socketService.connect(roomId);
          }
          if (!socketService.getJoinedStatus(roomId)) {
            const joinResponse = await socketService.joinRoom(roomId);
            if (!joinResponse.success) {
              alert(joinResponse.message || 'Failed to join room.');
              navigate(-1);
              return;
            }
            if (joinResponse.gameState) {
              rouletteInstance.updateStateFromServer(joinResponse.gameState);
            }
          }
        }

      } catch (error: any) {
        alert(error.message || 'Failed to connect to the room.');
        navigate(-1);
      }
    };

    connectAndJoin();

    const unsubscribeGameState = socketService.onGameStateUpdate((newState) => {
      setGameState(newState);
      rouletteInstance.updateStateFromServer(newState);
      if (newState.skillEffects) {
        rouletteInstance.processServerSkillEffects(newState.skillEffects);
      }
      if (newState.isRunning) {
        setGameDetails((prevDetails) => {
          if (prevDetails && prevDetails.status !== GameStatus.IN_PROGRESS) {
            return { ...prevDetails, status: GameStatus.IN_PROGRESS };
          }
          return prevDetails;
        });
      }
    });

    const unsubscribeMaps = socketService.onAvailableMapsUpdate(setAvailableMaps);

    const unsubscribeGameOver = socketService.onGameOver(async () => {
      let rankingData;
      try {
        const room = await getRoomDetails(numericRoomId); // 최신 방 정보 다시 가져오기
        if (room.isPasswordRequired) {
          const savedPassword = socketService.loadRoomPassword(roomId);
          if (savedPassword) {
            rankingData = await getGameRanking(numericRoomId, savedPassword);
            setFinalRanking(rankingData.rankings);
            setShowPasswordModal(false); // 비밀번호 모달 숨기기
          } else {
            // 저장된 비밀번호가 없으면 비밀번호 모달 표시
            setShowPasswordModal(true);
            setJoinError('Password required to view ranking.');
            return; // 랭킹 표시 중단
          }
        } else {
          rankingData = await getGameRanking(numericRoomId);
          setFinalRanking(rankingData.rankings);
        }
      } catch (error: any) {
        if (error.response && error.response.status === 403) {
          setJoinError('Incorrect password for ranking.');
          socketService.removeRoomPassword(roomId); // 비밀번호 틀리면 삭제
          setShowPasswordModal(true); // 비밀번호 모달 다시 표시
        } else {
          console.error('Error fetching ranking after game over:', error);
          setJoinError('An error occurred while fetching ranking.');
          setShowPasswordModal(true); // 에러 발생 시 비밀번호 모달 표시
        }
        return; // 랭킹 표시 중단
      }

      setGameDetails((prevDetails) => {
        if (prevDetails && prevDetails.status !== GameStatus.FINISHED) {
          return { ...prevDetails, status: GameStatus.FINISHED };
        }
        return prevDetails;
      });
      rouletteInstance.stopRecording()
    });

    return () => {
      unsubscribeGameState();
      unsubscribeMaps();
      unsubscribeGameOver();
      socketService.disconnect();
    };
  }, [roomId, rouletteInstance, navigate, handlePasswordJoin]);

  return {
    roomDetails,
    gameDetails,
    gameState,
    finalRanking,
    availableMaps,
    showPasswordModal,
    setShowPasswordModal,
    joinError,
    handlePasswordJoin,
    isManager,
    setIsManager,
  };
};
