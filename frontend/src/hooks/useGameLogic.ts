import { useCallback, useRef } from 'react';
import { GameStatus, GameInfo } from '../types/gameTypes';
import socketService from '../services/socketService';
import options from '../options';

export const useGameLogic = () => {
  const gameDetailsRef = useRef<GameInfo | null>(null);

  const getNames = useCallback((inNamesRef: React.RefObject<HTMLTextAreaElement | null>): string[] => {
    if (!inNamesRef.current) return [];
    const value = inNamesRef.current.value.trim();
    return value
      .split(/[,\r\n]/g)
      .map((v) => v.trim())
      .filter((v) => !!v);
  }, []);

  const parseName = useCallback((nameStr: string) => {
    const weightRegex = /(\/\d+)/;
    const countRegex = /(\*\d+)/;
    const nameMatch = /^\s*([^\/*]+)?/.exec(nameStr);
    const name = nameMatch ? nameMatch[1] : '';
    const weight = weightRegex.test(nameStr) ? parseInt(weightRegex.exec(nameStr)![1].replace('/', '')) : 1;
    const count = countRegex.test(nameStr) ? parseInt(countRegex.exec(nameStr)![1].replace('*', '')) : 1;
    return { name, weight, count };
  }, []);

  const setWinnerRank = useCallback((
    rank: number, 
    type: 'first' | 'last' | 'custom',
    inWinningRankRef: React.RefObject<HTMLInputElement | null>,
    setWinnerSelectionType: (type: 'first' | 'last' | 'custom') => void
  ) => {
    if (inWinningRankRef.current) inWinningRankRef.current.value = rank.toString();
    if (window.options) window.options.winningRank = rank;
    socketService.setWinningRank(rank - 1);
    setWinnerSelectionType(type);
  }, []);

  const submitParticipantNamesToBackend = useCallback((
    inNamesRef: React.RefObject<HTMLTextAreaElement | null>,
    gameDetails: GameInfo | null
  ) => {
    if (gameDetails?.status === GameStatus.FINISHED) return;
    const names = getNames(inNamesRef);
    console.log('names:', JSON.stringify(names));
    socketService.setMarbles(names);
    localStorage.setItem('mbr_names', names.join(','));
  }, [getNames]);

  const handleInNamesInput = useCallback((
    inNamesRef: React.RefObject<HTMLTextAreaElement | null>,
    gameDetails: GameInfo | null
  ) => {
    submitParticipantNamesToBackend(inNamesRef, gameDetails);
  }, [submitParticipantNamesToBackend]);

  const handleInNamesBlur = useCallback((
    inNamesRef: React.RefObject<HTMLTextAreaElement | null>,
    gameDetails: GameInfo | null
  ) => {
    if (!inNamesRef.current) return;
    const nameSource = getNames(inNamesRef);
    const nameSet = new Set<string>();
    const nameCounts: { [key: string]: number } = {};
    nameSource.forEach((nameSrc) => {
      const item = parseName(nameSrc);
      const key = item.weight > 1 ? `${item.name}/${item.weight}` : item.name || '';
      if (!nameSet.has(key)) nameSet.add(key);
      nameCounts[key] = (nameCounts[key] || 0) + item.count;
    });
    const result = Object.keys(nameCounts).map((key) => (nameCounts[key] > 1 ? `${key}*${nameCounts[key]}` : key));
    const newValue = result.join(',');
    if (inNamesRef.current.value !== newValue) {
      inNamesRef.current.value = newValue;
      submitParticipantNamesToBackend(inNamesRef, gameDetails);
    }
  }, [getNames, parseName, submitParticipantNamesToBackend]);

  const handleBtnShuffleClick = useCallback((
    inNamesRef: React.RefObject<HTMLTextAreaElement | null>,
    gameDetails: GameInfo | null
  ) => {
    submitParticipantNamesToBackend(inNamesRef, gameDetails);
  }, [submitParticipantNamesToBackend]);

  const handleBtnStartClick = useCallback((gameDetails: GameInfo | null) => {
    if (gameDetails?.status === GameStatus.FINISHED) {
      alert('이미 종료된 게임입니다. 다시 시작할 수 없습니다.');
      return;
    }
    if ((window.roullete?.getCount() ?? 0) === 0) {
      alert('참여자가 없습니다. 참여자를 추가해주세요.');
      return;
    }
    socketService.startGame();
  }, []);

  const handleChkSkillChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (window.options) window.options.useSkills = e.target.checked;
  }, []);

  const handleInWinningRankChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement>,
    inWinningRankRef: React.RefObject<HTMLInputElement | null>,
    setWinnerSelectionType: (type: 'first' | 'last' | 'custom') => void
  ) => {
    const v = parseInt(e.target.value, 10);
    setWinnerRank(isNaN(v) || v < 1 ? 1 : v, 'custom', inWinningRankRef, setWinnerSelectionType);
  }, [setWinnerRank]);

  const handleBtnLastWinnerClick = useCallback((
    inWinningRankRef: React.RefObject<HTMLInputElement | null>,
    setWinnerSelectionType: (type: 'first' | 'last' | 'custom') => void
  ) => {
    const total = window.roullete?.getCount() ?? 1;
    setWinnerRank(total > 0 ? total : 1, 'last', inWinningRankRef, setWinnerSelectionType);
  }, [setWinnerRank]);

  const handleBtnFirstWinnerClick = useCallback((
    inWinningRankRef: React.RefObject<HTMLInputElement | null>,
    setWinnerSelectionType: (type: 'first' | 'last' | 'custom') => void
  ) => {
    setWinnerRank(1, 'first', inWinningRankRef, setWinnerSelectionType);
  }, [setWinnerRank]);

  const handleMapChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(e.target.value, 10);
    if (!isNaN(index)) socketService.setMap(index);
  }, []);

  const handleAutoRecordingChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (window.roullete) window.roullete.setAutoRecording(e.target.checked);
  }, []);

  return {
    gameDetailsRef,
    getNames,
    parseName,
    setWinnerRank,
    submitParticipantNamesToBackend,
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
  };
};
