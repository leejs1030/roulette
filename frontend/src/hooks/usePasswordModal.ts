import { useState, useCallback } from 'react';
import { NavigateFunction } from 'react-router-dom';
import socketService from '../services/socketService';

export const usePasswordModal = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [joinError, setJoinError] = useState<string | null>(null);

  const handlePasswordJoin = useCallback(async (
    roomId: string | undefined,
    navigate: NavigateFunction,
    fetchGameDetailsAndInitializeUI: (numericRoomId: number) => Promise<void>
  ) => {
    if (!roomId) {
      setJoinError('Room ID is missing.');
      return;
    }
    if (!passwordInput) {
      setJoinError('Password is required.');
      return;
    }
    setJoinError(null);

    const numericRoomId = parseInt(roomId, 10);
    if (isNaN(numericRoomId)) {
      setJoinError('Invalid Room ID format.');
      return;
    }

    try {
      const response = await socketService.joinRoom(roomId, passwordInput);
      if (response.success) {
        setShowPasswordModal(false);
        setPasswordInput('');
        if (response.gameState && window.roullete) {
          window.roullete.updateStateFromServer(response.gameState);
        }
        await fetchGameDetailsAndInitializeUI(numericRoomId);
      } else {
        setJoinError(response.message || 'Failed to join room. Incorrect password?');
        if (!response.requiresPassword) {
          alert(response.message || '방 입장에 실패했습니다. 이전 페이지로 돌아갑니다.');
          navigate(-1);
        }
      }
    } catch (error) {
      console.error('Error joining room with password:', error);
      setJoinError('방 참여 중 오류가 발생했습니다.');
    }
  }, [passwordInput]);

  return {
    showPasswordModal,
    setShowPasswordModal,
    passwordInput,
    setPasswordInput,
    joinError,
    setJoinError,
    handlePasswordJoin,
  };
};
