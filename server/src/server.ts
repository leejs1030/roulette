import express from 'express'; // esModuleInterop allows this default import
import * as http from 'http'; // Import http as a namespace
import { Server as SocketIOServer, Socket } from 'socket.io';
import { Box2dPhysics } from './physics-box2d'; // Assuming physics logic is here
import { GameState, UserInput } from './types/GameState.type';
import { stages as maps } from './data/maps'; // Import 'stages' and alias as 'maps'

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: "*", // Allow all origins for development, restrict in production
    methods: ["GET", "POST"]
  }
});

const physics = new Box2dPhysics();
// No need to call physics.init() as it's handled in the constructor

let currentGameState: GameState = {
  marbles: [],
  entities: [],
  gamePhase: 'waiting',
};

const PORT = process.env.PORT || 3000;

// --- Game Logic Integration ---
function startGame() {
  console.log('Starting game...');
  physics.clear(); // Clear previous state
  physics.clearMarbles();

  // Load a default map (e.g., the first map)
  const defaultMap = maps[0];
  if (defaultMap) {
    physics.createStage(defaultMap);
    currentGameState.entities = physics.getEntities(); // Update entities state
  } else {
    console.error("No default map found!");
  }

  // TODO: Get actual marble names/count from client input or configuration
  // For now, using placeholder names/count for initial position calculation
  const placeholderNames = ['Marble 1', 'Marble 2', 'Marble 3', 'Marble 4', 'Marble 5']; // Example
  const totalMarbles = placeholderNames.length; // Use actual count when available

  // Calculate initial marble positions based on original logic
  const initialMarblesData: { id: number; x: number; y: number; name: string }[] = [];
  const maxLine = Math.ceil(totalMarbles / 10);
  const lineDelta = -Math.max(0, Math.ceil(maxLine - 5));

  for (let i = 0; i < totalMarbles; i++) {
      const order = i; // Use index as order/id
      const line = Math.floor(order / 10);
      const x = 10.25 + (order % 10) * 0.6;
      const y = maxLine - line + lineDelta;
      initialMarblesData.push({ id: order, x, y, name: placeholderNames[i] || `Marble ${order}` });
  }


  // Create marbles in physics engine using calculated positions
  initialMarblesData.forEach(m => physics.createMarble(m.id, m.x, m.y));
  physics.start(); // Activate marbles in physics engine

  // Set initial game state with calculated positions
  currentGameState.marbles = initialMarblesData.map(m => ({
    id: m.id,
    x: m.x, // Use calculated x
    y: m.y, // Use calculated y
    angle: 0, // Initial angle
  }));
  currentGameState.gamePhase = 'playing';
  broadcastGameState(); // Send initial state
  // Start the game loop
  setInterval(gameLoop, 1000 / 60); // 60 FPS
}

function gameLoop() {
  if (currentGameState.gamePhase !== 'playing') return;

  const deltaSeconds = 1 / 60;
  physics.step(deltaSeconds);

  // Update game state based on physics simulation
  currentGameState.marbles = physics.getMarbleIds().map(id => { // Use getMarbleIds()
    const pos = physics.getMarblePosition(id);
    return { id, ...pos };
  });
  currentGameState.entities = physics.getEntities(); // Update entity states if they change

  // Add game ending condition check if needed
  // if (gameShouldEnd) {
  //   currentGameState.gamePhase = 'finished';
  // }

  broadcastGameState();
}

function broadcastGameState() {
  io.emit('gameState', currentGameState);
}

// --- Socket.IO Connection Handling ---
io.on('connection', (socket: Socket) => {
  console.log('a user connected:', socket.id);

  // Send the current game state to the newly connected client
  socket.emit('gameState', currentGameState);

  // Handle user input from clients
  socket.on('userInput', (input: UserInput) => {
    console.log('Received input:', input);
    // Process input based on type
    switch (input.type) {
      case 'start':
        if (currentGameState.gamePhase !== 'playing') {
          startGame();
        }
        break;
      case 'shake':
        if (input.marbleId !== undefined && currentGameState.gamePhase === 'playing') {
          physics.shakeMarble(input.marbleId);
          // Optionally, immediately reflect shake in state for responsiveness?
          // Or wait for gameLoop to update positions.
        }
        break;
      // Add cases for other input types like keyPress, mouseClick
    }
  });

  socket.on('disconnect', () => {
    console.log('user disconnected:', socket.id);
    // Handle disconnection if needed (e.g., remove player marble)
  });
});

// --- Server Start ---
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Graceful shutdown (optional but recommended)
process.on('SIGINT', () => {
  console.log('Shutting down server...');
  io.close(() => {
    console.log('Socket.IO closed.');
    server.close(() => {
      console.log('Server closed.');
      process.exit(0);
    });
  });
});
