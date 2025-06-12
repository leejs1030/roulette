import {
  EntityShapeTypes,
  EntityShapeBase,
  EntityBoxShape,
  EntityCircleShape,
  EntityPolylineShape,
  EntityShape,
  MapEntityState,
  GameStatus,
  UserPublicInfo,
  MarbleDto,
  GameStateDto,
} from 'common';
import { ServerSkillEffect } from './skillTypes';

export enum Skills {
  None = 'None',
  Impact = 'Impact',
  DummyMarble = 'DummyMarble',
}

export {
  EntityShapeTypes,
  EntityShapeBase,
  EntityBoxShape,
  EntityCircleShape,
  EntityPolylineShape,
  EntityShape,
  MapEntityState,
  GameStatus,
  UserPublicInfo,
};

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
