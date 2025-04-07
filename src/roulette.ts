import { Marble } from './marble';
import { initialZoom, Skills, zoomThreshold } from './data/constants'; // Re-added zoomThreshold
import { ParticleManager } from './particleManager';
import { StageDef, stages } from './data/maps';
// import { parseName } from './utils/utils'; // Name parsing might happen on server or be simplified
import { Camera } from './camera';
import { RouletteRenderer } from './rouletteRenderer';
import { SkillEffect } from './skillEffect';
import { GameObject } from './gameObject';
import options from './options'; // Keep options if needed for rendering/UI
import { bound } from './utils/bound.decorator';
import { UIObject } from './UIObject';
import { RankRenderer } from './rankRenderer';
import { Minimap } from './minimap';
import { VideoRecorder } from './utils/videoRecorder';
// Removed IPhysics and Box2dPhysics imports

// Define GameState interfaces locally matching index.ts (or import from shared location later)
interface MarbleState {
  id: number;
  x: number;
  y: number;
  angle: number;
  // Add other properties sent by server if needed (e.g., name, color, skill state)
  name?: string;
  weight?: number;
  skill?: Skills;
  isActive?: boolean; // To know if the marble is visually active
}
interface MapEntityState {
  x: number;
  y: number;
  angle: number;
  shape: any; // Keep shape for rendering
  life: number;
  // Add other properties sent by server if needed
}
interface GameState {
  marbles: MarbleState[];
  entities: MapEntityState[];
  gamePhase?: 'waiting' | 'playing' | 'finished';
  timer?: number;
  // Potentially add winner info directly from server state
  winnerId?: number;
}


export class Roulette extends EventTarget {
  // --- State primarily driven by server ---
  private _marbles: Map<number, Marble> = new Map(); // Use Map for easier lookup by ID
  private _entities: MapEntityState[] = [];
  private _gamePhase: 'waiting' | 'playing' | 'finished' = 'waiting';
  private _winner: Marble | null = null; // Determined by server state
  private _winners: Marble[] = []; // List of winners if server sends ordered list or needed for UI

  // --- Rendering and UI ---
  private _particleManager = new ParticleManager();
  private _stage: StageDef | null = null; // Current map definition
  private _camera: Camera = new Camera();
  private _renderer: RouletteRenderer = new RouletteRenderer();
  private _effects: GameObject[] = []; // Local visual effects
  private _uiObjects: UIObject[] = [];
  private _recorder!: VideoRecorder; // Keep recorder if needed

  // --- Other local state ---
  private _winnerRank = 0; // Still needed for RankRenderer? Or get from server? Assume needed for now.
  private _totalMarbleCount = 0; // Might get from server state
  private _isReady: boolean = false; // Indicates if renderer is ready

  get isReady() {
    return this._isReady;
  }

  constructor() {
    super();
    this._renderer.init().then(() => {
      this._initLocalComponents(); // Initialize components not dependent on physics/server loop
      this._isReady = true;
      // No automatic update loop start
      this._render(); // Initial render
    });
  }

  // Initialize components that don't rely on the old game loop or physics
  private _initLocalComponents() {
    this._recorder = new VideoRecorder(this._renderer.canvas);

    // Initialize UI Objects
    this.addUiObject(new RankRenderer());
    const minimap = new Minimap();
    minimap.onViewportChange((pos) => {
      if (pos) {
        this._camera.setPosition(pos, false);
        this._camera.lock(true);
      } else {
        this._camera.lock(false);
      }
    });
    this.addUiObject(minimap);

    // Load default map locally for rendering background etc.
    this._stage = stages[0];
    // No physics stage creation here

    this.attachEvent(); // Attach UI events

    // Start a simple rendering loop
    this._animationFrameLoop();
  }

  // Main method to update state based on server data
  public updateFromServer(gameState: GameState) {
    if (!this._isReady || !this._stage) return;

    this._gamePhase = gameState.gamePhase || 'waiting';
    this._entities = gameState.entities; // Update entities directly

    // --- Update Marbles ---
    const receivedMarbleIds = new Set(gameState.marbles.map(m => m.id));
    // Remove marbles that are no longer in the server state
    for (const id of this._marbles.keys()) {
        if (!receivedMarbleIds.has(id)) {
            this._marbles.delete(id);
        }
    }
    // Add/Update marbles based on server state
    gameState.marbles.forEach(marbleState => {
        let marble = this._marbles.get(marbleState.id);
        if (!marble) {
            // Create a new Marble instance - Marble class needs simplification
            // It should not interact with physics anymore
            // Pass necessary info like name, weight if available in marbleState
            marble = new Marble(marbleState.id, marbleState.name || `Marble ${marbleState.id}`, marbleState.weight || 1);
            this._marbles.set(marbleState.id, marble);
        }
        // Update marble properties based on server state
        marble.updateState(marbleState); // Marble class needs this method
    });

    // --- Update Winners ---
    // This logic depends on how the server sends winner info.
    // Option 1: Server sends winnerId
    this._winner = gameState.winnerId !== undefined ? this._marbles.get(gameState.winnerId) ?? null : null;
    // Option 2: Server sends ordered list of winners (less likely with physics removal)
    // Option 3: Determine winners locally based on Y position (less reliable without physics)
    // Let's stick with Option 1 for now, assuming server sends winnerId when game is finished.
    // We might need a separate 'winners' array in GameState if multiple winners are ranked.
    // For now, just handle the main winner.
    this._winners = this._winner ? [this._winner] : []; // Simplified winner handling

    // --- Update Camera ---
    // Sort marbles by y-coordinate to find the leader
    const sortedMarbles = Array.from(this._marbles.values()).sort((a, b) => a.y - b.y); // Sort ascending by y
    const leader = sortedMarbles[0]; // The marble with the smallest y is the leader
    const goalDist = this._winner ? 0 : (this._stage && leader ? Math.abs(this._stage.zoomY - leader.y) : Infinity);

    this._camera.update({
      marbles: sortedMarbles, // Pass sorted marbles
      stage: this._stage,
      needToZoom: goalDist < zoomThreshold, // Keep zoom logic
      targetIndex: 0, // Always target the leader (index 0 after sorting)
    });

    // --- Update UI Objects ---
    // UI Objects might need data from the new state
    // Use optional chaining for updateData
    this._uiObjects.forEach(obj => obj.updateData?.(gameState, Array.from(this._marbles.values())));

    // --- Handle Game Phase Changes ---
    // Removed hasActiveParticles check, shoot particles immediately on finish if not already shot
    if (this._gamePhase === 'finished' /* && !alreadyShotParticles */) {
        this._particleManager.shot(this._renderer.width, this._renderer.height);
        // Add a flag or check particle count if needed to prevent multiple shots
        // Handle recording stop if needed
        // if (this._autoRecording) setTimeout(() => this._recorder.stop(), 1000);
    }

    // No physics step, no local marble update logic needed here

    // Rendering is handled by the _animationFrameLoop
  }

  // Simple loop for rendering and local animations (like effects)
  @bound
  private _animationFrameLoop() {
      this._updateLocalEffects(16); // Approximate delta time
      this._render();
      window.requestAnimationFrame(this._animationFrameLoop);
  }

  private _updateLocalEffects(deltaTime: number) {
    this._effects.forEach((effect) => effect.update(deltaTime));
    this._effects = this._effects.filter((effect) => !effect.isDestroy);
    this._particleManager.update(deltaTime); // Update particles locally
  }

  private _render() {
    if (!this._stage || !this._isReady) return;

    const renderParams = {
      camera: this._camera,
      stage: this._stage,
      entities: this._entities, // Use server-provided entities
      marbles: Array.from(this._marbles.values()), // Pass array of marbles
      winners: this._winners,
      particleManager: this._particleManager,
      effects: this._effects,
      winnerRank: this._winnerRank, // Still needed?
      winner: this._winner,
      size: { x: this._renderer.width, y: this._renderer.height },
    };
    this._renderer.render(renderParams, this._uiObjects);
  }

  private addUiObject(obj: UIObject) {
    this._uiObjects.push(obj);
    if (obj.onWheel) {
      this._renderer.canvas.addEventListener('wheel', obj.onWheel);
    }
  }

  private attachEvent() {
    this._renderer.canvas.addEventListener('mousemove', (e) => {
      const sizeFactor = this._renderer.sizeFactor;
      const pos = { x: e.offsetX * sizeFactor, y: e.offsetY * sizeFactor };
      this._uiObjects.forEach((obj) => {
        if (!obj.onMouseMove) return;
        const bounds = obj.getBoundingBox();
        if (!bounds) {
          obj.onMouseMove({ ...pos });
        } else if (
          bounds &&
          pos.x >= bounds.x &&
          pos.y >= bounds.y &&
          pos.x <= bounds.x + bounds.w &&
          pos.y <= bounds.y + bounds.h
        ) {
          obj.onMouseMove({ x: pos.x - bounds.x, y: pos.y - bounds.y });
        } else {
          obj.onMouseMove(undefined);
        }
      });
    });
  }

  // --- Methods potentially called by UI or index.ts ---

  // Method for index.ts to get a marble ID for 'shake' input
  public getFirstMarbleId(): number | undefined {
      return this._marbles.keys().next().value;
  }

  // Set marbles might just initialize names/count locally, server confirms actual state
  public setMarbles(names: string[]) {
    this.resetLocalState(); // Clear local state before setting new names
    this._totalMarbleCount = names.length; // Basic count, server state is source of truth
    // Optionally create placeholder marbles here, but updateFromServer will overwrite
    console.log("Marble names received, waiting for server state:", names);
    // Maybe trigger a 'ready' event or signal server?
  }

  // Resets local state, doesn't interact with physics/server directly
  public resetLocalState() {
    this._marbles.clear();
    this._entities = [];
    this._winner = null;
    this._winners = [];
    this._gamePhase = 'waiting';
    this._effects = [];
    this._particleManager.clear?.(); // Use optional chaining for clear
    // Reset camera?
    // this._camera.reset();
    // Reset UI Objects?
    this._uiObjects.forEach(obj => obj.reset?.()); // Optional chaining already used
  }

  public getZoom() {
    return initialZoom * this._camera.zoom;
  }

  public getCount() {
    return this._marbles.size;
  }

  public getMaps() {
    return stages.map((stage, index) => {
      return {
        index,
        title: stage.title,
      };
    });
  }

  // Setting map might involve telling the server or just updating local stage for rendering
  public setMap(index: number) {
    if (index < 0 || index > stages.length - 1) {
      throw new Error('Incorrect map number');
    }
    this._stage = stages[index];
    this.resetLocalState(); // Reset local state when map changes
    // TODO: Potentially notify the server about the map change if needed
    console.log(`Map set to: ${this._stage.title}. Waiting for server state.`);
    // Re-render with new map background?
    this._render();
  }

  // Removed methods: start, shake, setSpeed, getSpeed, setWinningRank, setAutoRecording, _clearMap, clearMarbles (use resetLocalState)
  // Removed properties: _lastTime, _elapsed, _noMoveDuration, _shakeAvailable, _updateInterval, _timeScale, _speed, _goalDist
}
