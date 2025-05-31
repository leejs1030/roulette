import { useState, useEffect, useCallback } from 'react';
import { GameStatus, RoomInfo, RankingEntry, GameInfo } from '../types/gameTypes';
import { getRoomDetails, getRoomGameDetails, getGameRanking } from '../services/api';
import socketService from '../services/socketService';

export const useGameData = (
  inNamesRef?: React.RefObject<HTMLTextAreaElement | null>,
  inWinningRankRef?: React.RefObject<HTMLInputElement | null>,
  sltMapRef?: React.RefObject<HTMLSelectElement | null>,
  setWinnerSelectionType?: (type: 'first' | 'last' | 'custom') => void
) => {
  const [roomDetails, setRoomDetails] = useState<RoomInfo | null>(null);
  const [gameDetails, setGameDetails] = useState<GameInfo | null>(null);
  const [finalRanking, setFinalRanking] = useState<RankingEntry[] | null>(null);
  const [showRankingModal, setShowRankingModal] = useState(false);

  const fetchGameDetailsAndInitializeUI = useCallback(async (numericRoomId: number) => {
    try {
      const fetchedGameDetails = await getRoomGameDetails(numericRoomId);
      setGameDetails(fetchedGameDetails);

      if (fetchedGameDetails) {
        if (fetchedGameDetails.status === GameStatus.FINISHED) {
          try {
            const rankingData = await getGameRanking(numericRoomId);
            setFinalRanking(rankingData.rankings);
            if (rankingData.rankings && rankingData.rankings.length > 0) setShowRankingModal(true);
          } catch (rankingError) {
            console.error('GamePage: Failed to fetch game ranking:', rankingError);
          }
        } else if (
          fetchedGameDetails.status === GameStatus.WAITING ||
          fetchedGameDetails.status === GameStatus.IN_PROGRESS
        ) {
          // Initialize UI elements with fetched data
          if (inNamesRef?.current && fetchedGameDetails.marbles && fetchedGameDetails.marbles.length > 0) {
            inNamesRef.current.value = fetchedGameDetails.marbles.join(',');
          }
          if (inWinningRankRef?.current && fetchedGameDetails.winningRank !== null) {
            inWinningRankRef.current.value = fetchedGameDetails.winningRank.toString();
            if (setWinnerSelectionType) {
              setWinnerSelectionType(fetchedGameDetails.winningRank === 1 ? 'first' : 'custom');
            }
          }
          if (sltMapRef?.current && fetchedGameDetails.mapIndex !== null) {
            sltMapRef.current.value = fetchedGameDetails.mapIndex.toString();
          }
          if (window.options && fetchedGameDetails.speed !== null) {
            window.options.speed = fetchedGameDetails.speed;
          }
        }
      }
    } catch (apiError) {
      console.error('GamePage: Failed to fetch game details after joining:', apiError);
    }
  }, []);

  const loadRoomDetails = useCallback(async (numericRoomId: number) => {
    const room = await getRoomDetails(numericRoomId);
    setRoomDetails(room);
    return room;
  }, []);

  const handleGameEnd = useCallback(async (numericRoomId: number) => {
    try {
      const authGameDetails = await getRoomGameDetails(numericRoomId);
      setGameDetails(authGameDetails);
      if (authGameDetails.status === GameStatus.FINISHED) {
        const ranking = await getGameRanking(numericRoomId);
        setFinalRanking(ranking.rankings);
        if (ranking.rankings?.length > 0) setShowRankingModal(true);
      }
    } catch (err) {
      console.error('Error fetching game details/ranking on game end:', err);
    }
  }, []);

  return {
    roomDetails,
    setRoomDetails,
    gameDetails,
    setGameDetails,
    finalRanking,
    setFinalRanking,
    showRankingModal,
    setShowRankingModal,
    fetchGameDetailsAndInitializeUI,
    loadRoomDetails,
    handleGameEnd,
  };
};
