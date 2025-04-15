import React, { useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { initPhysics } from '../physics-box2d';
import { Roulette } from '../roulette';
import { RouletteRenderer } from '../rouletteRenderer';
import { useGameStore } from '../store/gameStore';
import GameControls from './GameControls';
import ScoreDisplay from './ScoreDisplay';

const GameContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  display: block;
`;

const RouletteGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<{
    roulette: Roulette;
    renderer: RouletteRenderer;
  } | null>(null);
  const { setPlaying, updateScore, resetGame } = useGameStore();

  const handleStart = useCallback(() => {
    if (gameRef.current) {
      gameRef.current.roulette.start();
      setPlaying(true);
    }
  }, [setPlaying]);

  const handleReset = useCallback(() => {
    if (gameRef.current) {
      gameRef.current.roulette.reset();
      resetGame();
    }
  }, [resetGame]);

  useEffect(() => {
    const initGame = async () => {
      if (!canvasRef.current) return;

      const physics = await initPhysics();
      const roulette = new Roulette(physics);
      const renderer = new RouletteRenderer(canvasRef.current, roulette);

      gameRef.current = { roulette, renderer };

      const animate = () => {
        if (!gameRef.current) return;
        
        const { roulette, renderer } = gameRef.current;
        roulette.update();
        renderer.render();

        // 점수 업데이트
        const currentScore = roulette.getScore();
        updateScore(currentScore);

        requestAnimationFrame(animate);
      };

      animate();
    };

    initGame();

    return () => {
      if (gameRef.current) {
        gameRef.current.roulette.cleanup();
      }
    };
  }, [updateScore]);

  return (
    <GameContainer>
      <Canvas ref={canvasRef} />
      <ScoreDisplay />
      <GameControls onStart={handleStart} onReset={handleReset} />
    </GameContainer>
  );
};

export default RouletteGame; 