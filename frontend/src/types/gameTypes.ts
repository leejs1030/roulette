import {
  EntityShape,
  MapEntityState,
  GameStatus,
  UserPublicInfo,
  gamestate,
} from 'common';
import { ServerSkillEffect } from './skillTypes';

export enum Skills {
  None = 'None',
  Impact = 'Impact',
  DummyMarble = 'DummyMarble',
}

export {
  EntityShape,
  MapEntityState,
  GameStatus,
  UserPublicInfo,
};

type MarbleDto = gamestate.IMarbleDto;
type GameStateDto = gamestate.IGameStateDto;

export interface GameInfo {
  id: number;
  status: GameStatus;
  mapIndex: number | null;
  marbles: string[];
  winningRank: number | null;
  speed: number | null;
  useSkills: boolean;
  autoRecording: boolean;
  isRunning: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface RankingEntry {
  marbleName: string;
  rank: number;
  isWinner: boolean;
}

export interface RoomInfo {
  id: number;
  name: string;
  isPasswordRequired: boolean;
  managerId: number;
  manager: UserPublicInfo;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
  game: GameInfo | null;
}

export interface MapInfo {
  index: number;
  title: string;
}
