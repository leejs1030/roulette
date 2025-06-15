import { GameStatus, UserPublicInfo, SkillType } from 'common';

export enum Skills {
  None = 'None',
  Impact = 'Impact',
  DummyMarble = 'DummyMarble',
}

// Skills enum을 SkillType으로 매핑하는 유틸리티
export const skillsToSkillType = (skill: Skills): SkillType | null => {
  switch (skill) {
    case Skills.Impact:
      return SkillType.Impact;
    case Skills.DummyMarble:
      return SkillType.DummyMarble;
    case Skills.None:
    default:
      return null;
  }
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
