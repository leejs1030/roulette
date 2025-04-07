import './localization';
import { Roulette } from './roulette';
import options from './options';
import { io, Socket } from 'socket.io-client';

// Define UserInput interface locally for now
// TODO: Move to a shared types directory
interface UserInput {
  type: 'keyPress' | 'mouseClick' | 'shake' | 'start';
  key?: string;
  marbleId?: number;
}

// Define GameState interface locally for now (or relevant parts)
// TODO: Move to a shared types directory
interface MarbleState {
  id: number;
  x: number;
  y: number;
  angle: number;
}
interface MapEntityState { // Assuming this structure based on physics code
    body?: any; // We don't need the body on the frontend
    x: number;
    y: number;
    angle: number;
    shape: any; // Simplified shape info if needed for rendering
    life: number;
}
interface GameState {
  marbles: MarbleState[];
  entities: MapEntityState[];
  gamePhase?: 'waiting' | 'playing' | 'finished';
  timer?: number;
}


const roulette = new Roulette(); // Keep instance for rendering

// eslint-disable-next-line
(window as any).roullete = roulette;
// eslint-disable-next-line
(window as any).options = options;

// --- Socket.IO Connection ---
const socket: Socket = io('http://localhost:3000'); // Adjust URL if needed

socket.on('connect', () => {
  console.log('Connected to server:', socket.id);
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

// Listen for game state updates from the server
socket.on('gameState', (gameState: GameState) => {
  // TODO: Implement roulette.updateFromServer(gameState) in Roulette class
  // This method will update the rendering based on the received state
  // console.log('Received game state:', gameState);
  roulette.updateFromServer(gameState); // Placeholder for now
});

// Function to send user input to the server
function sendInput(input: UserInput) {
  socket.emit('userInput', input);
}

// Example: Add a button or event listener to send 'start' input
// This should eventually replace the existing start mechanism in Roulette
const startButton = document.getElementById('startButton'); // Assuming a button with id="startButton" exists
if (startButton) {
    startButton.onclick = () => {
        console.log('Sending start input...');
        sendInput({ type: 'start' });
    };
} else {
    // Fallback or alternative way to trigger start if button doesn't exist
    console.warn('Start button not found. Add a button with id="startButton" or trigger sendInput({ type: \'start\' }) manually.');
    // For testing, let's add a key listener
    window.addEventListener('keydown', (e) => {
        if (e.key === 's' || e.key === 'S') { // Press 'S' to start
             console.log('Sending start input via keypress...');
             sendInput({ type: 'start' });
        }
        // Example: Send shake input (e.g., press 'h')
        if (e.key === 'h' || e.key === 'H') {
            // Need a way to determine which marble to shake, e.g., the first one
            // This logic might belong inside the Roulette class interaction later
            const firstMarbleId = roulette.getFirstMarbleId(); // Need to implement this in Roulette
            if (firstMarbleId !== undefined) {
                console.log(`Sending shake input for marble ${firstMarbleId}...`);
                sendInput({ type: 'shake', marbleId: firstMarbleId });
            }
        }
    });
}

// Expose sendInput globally for debugging or manual triggering if needed
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).sendInput = sendInput;
