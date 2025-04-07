import { MapEntityState } from './MapEntity.type';

// Represents the position and angle of a marble
export interface MarbleState {
  id: number;
  x: number;
  y: number;
  angle: number;
  // Add other relevant marble properties if needed (e.g., velocity, color)
}

// Represents the overall state of the game to be sent to clients
export interface GameState {
  marbles: MarbleState[];
  entities: MapEntityState[];
  // Add other game-wide state information if necessary
  // e.g., game phase (waiting, playing, finished), scores, timer
  gamePhase?: 'waiting' | 'playing' | 'finished';
  timer?: number;
  // ... other state properties
}

// Represents user input sent from the client to the server
export interface UserInput {
  type: 'keyPress' | 'mouseClick' | 'shake' | 'start'; // Add other input types as needed
  key?: string; // For keyPress
  marbleId?: number; // For shake
  // Add other input data properties
}
