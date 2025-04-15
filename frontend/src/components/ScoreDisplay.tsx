import React from 'react';
import styled from 'styled-components';
import { useGameStore } from '../store/gameStore';

const ScoreContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 16px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
`;

const ScoreText = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const HighScoreText = styled.div`
  font-size: 16px;
  opacity: 0.8;
`;

const ScoreDisplay: React.FC = () => {
  const { score, highScore } = useGameStore();

  return (
    <ScoreContainer>
      <ScoreText>점수: {score}</ScoreText>
      <HighScoreText>최고 점수: {highScore}</HighScoreText>
    </ScoreContainer>
  );
};

export default ScoreDisplay; 