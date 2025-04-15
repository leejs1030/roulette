import React from 'react';
import styled from 'styled-components';
import { useGameStore } from '../store/gameStore';

const ControlsContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
  z-index: 1000;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${({ theme, variant }) =>
    variant === 'secondary' ? theme.colors.secondary : theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

interface GameControlsProps {
  onStart: () => void;
  onReset: () => void;
}

const GameControls: React.FC<GameControlsProps> = ({ onStart, onReset }) => {
  const { isPlaying } = useGameStore();

  return (
    <ControlsContainer>
      {!isPlaying ? (
        <Button onClick={onStart}>시작</Button>
      ) : (
        <Button variant="secondary" onClick={onReset}>
          리셋
        </Button>
      )}
    </ControlsContainer>
  );
};

export default GameControls; 