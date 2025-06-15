import { initialZoom } from './data/constants';
import { ParticleManager } from './particleManager';
import { GameStateDto, MarbleDto, StageDef, stages } from 'common';
import { Camera } from './camera';
import { RouletteRenderer } from './rouletteRenderer';
import { UIObject } from './UIObject';
import { RankRenderer } from './rankRenderer';
import { Minimap } from './minimap';
import { VideoRecorder } from './utils/videoRecorder';
import { ServerSkillEffect, FrontendSkillEffectWrapper } from './types/skillTypes'; // 스킬 이펙트 관련 타입 임포트
import { CoordinateManager } from './utils/coordinate-manager';
import { MapEntityState, SkillType } from 'common';

export class Roulette extends EventTarget {
  private _marbles: MarbleDto[] = [];
  private _winners: MarbleDto[] = [];
  private _winner: MarbleDto | null = null;
  private _mapEntitiesState: MapEntityState[] = [];
  private _isRunning: boolean = false;
  private _winnerRank = 0;
  private _totalMarbleCount = 0;
  private _shakeAvailable: boolean = false;

  private _lastTime: number = 0;
  private _elapsed: number = 0;

  private _stateBuffer: { timestamp: number; gameState: GameStateDto }[] = [];
  private readonly _interpolationDelay = 100; // ms

  private _particleManager = new ParticleManager();
  private _stage: StageDef | null = null;

  private _camera: Camera;
  private _renderer: RouletteRenderer = new RouletteRenderer();
  private _coordinateManager: CoordinateManager;

  private _activeSkillEffects: FrontendSkillEffectWrapper[] = [];

  private _goalDist: number = Infinity;

  private _uiObjects: UIObject[] = [];

  private _autoRecording: boolean = false;
  private _recorder!: VideoRecorder;

  private _isReady: boolean = false;
  get isReady() {
    return this._isReady;
  }

  public updateStateFromServer(gameState: GameStateDto): void {
    const now = Date.now();
    this._stateBuffer.push({ timestamp: now, gameState });
  }

  private _interpolateState(fromState: GameStateDto, toState: GameStateDto, alpha: number): void {
    const toMarbles = toState.marbles ?? [];
    const fromMarbles = fromState.marbles ?? [];

    const interpolatedMarbles = toMarbles.map((toMarble) => {
      const fromMarble = fromMarbles.find((m) => m.id === toMarble.id);
      if (fromMarble && fromMarble.x != null && fromMarble.y != null && toMarble.x != null && toMarble.y != null) {
        const interpolatedX = fromMarble.x + (toMarble.x - fromMarble.x) * alpha;
        const interpolatedY = fromMarble.y + (toMarble.y - fromMarble.y) * alpha;
        return { ...toMarble, x: interpolatedX, y: interpolatedY };
      }
      return toMarble;
    });

    this._marbles = interpolatedMarbles;
    this._winners = toState.winners ?? [];
    this._winner = toState.winner ?? null;
    this._mapEntitiesState = toState.entities ?? [];
    this._isRunning = toState.isRunning ?? false;
    this._winnerRank = toState.winnerRank ?? 0;
    this._totalMarbleCount = toState.totalMarbleCount ?? 0;
    this._shakeAvailable = toState.shakeAvailable ?? false;
  }

  public processServerSkillEffects(serverEffects: ServerSkillEffect[]): void {
    if (!Array.isArray(serverEffects) || serverEffects.length === 0) {
      return;
    }
    const now = Date.now();
    serverEffects.forEach((serverEffect) => {
      if (!this._activeSkillEffects.some((e) => e.id === serverEffect.id)) {
        let duration = 0;
        switch (serverEffect.type) {
          case SkillType.Impact:
            duration = 500;
            break;
          case SkillType.DummyMarble:
            duration = 1000;
            break;
          default:
            duration = 500;
        }

        this._activeSkillEffects.push({
          id: serverEffect.id,
          type: serverEffect.type,
          serverEffectData: serverEffect,
          startTime: now,
          duration: duration,
        });
      }
    });
  }

  constructor(coordinateManager: CoordinateManager) {
    super();
    this._camera = new Camera();
    this._coordinateManager = coordinateManager;
  }

  public async initialize(container: HTMLElement): Promise<void> {
    if (!container) {
      console.error('Roulette initialize: container is null or undefined.');
      throw new Error('Container element is required for Roulette initialization.');
    }
    await this._renderer.init(container);
    this._renderer.onResize = (width, height) => {
      this._camera.setSize(width, height);
    };
    this._camera.setSize(this._renderer.width, this._renderer.height);
    await this._init();
    this._isReady = true;
    this._update();
  }

  public getZoom() {
    return initialZoom * this._camera.zoom;
  }

  private addUiObject(obj: UIObject) {
    this._uiObjects.push(obj);
    if (obj.onWheel) {
      this._renderer.canvas.addEventListener('wheel', (e) => obj.onWheel?.(e));
    }
  }

  private _update() {
    if (!this._lastTime) this._lastTime = Date.now();
    const currentTime = Date.now();

    this._elapsed += currentTime - this._lastTime;
    if (this._elapsed > 100) {
      this._elapsed %= 100;
    }
    this._lastTime = currentTime;

    const renderTime = currentTime - this._interpolationDelay;

    // 버퍼에서 오래된 상태 제거
    while (this._stateBuffer.length >= 2 && this._stateBuffer[1].timestamp <= renderTime) {
      this._stateBuffer.shift();
    }

    if (this._stateBuffer.length >= 2) {
      const from = this._stateBuffer[0];
      const to = this._stateBuffer[1];
      const alpha = (renderTime - from.timestamp) / (to.timestamp - from.timestamp);
      this._interpolateState(from.gameState, to.gameState, alpha);
    } else if (this._stateBuffer.length === 1) {
      const latestState = this._stateBuffer[0].gameState;
      this._marbles = latestState.marbles || [];
      this._winners = latestState.winners || [];
      this._winner = latestState.winner || null;
      this._mapEntitiesState = latestState.entities || [];
      this._isRunning = latestState.isRunning || false;
      this._winnerRank = latestState.winnerRank || 0;
      this._totalMarbleCount = latestState.totalMarbleCount || 0;
      this._shakeAvailable = latestState.shakeAvailable || false;
    }

    this._particleManager.update(currentTime - this._lastTime);
    this._updateEffects(currentTime - this._lastTime);
    this._uiObjects.forEach((obj) => obj.update(currentTime - this._lastTime));

    if (this._marbles.length > 1) {
      this._marbles.sort((a, b) => b.y - a.y);
    }

    if (this._stage) {
      this._camera.update({
        marbles: this._marbles,
        stage: this._stage,
        winningRank: this._winnerRank,
        deltaTime: currentTime - this._lastTime,
      });
    }

    const minimap = this._uiObjects.find((obj) => obj instanceof Minimap) as Minimap;
    this._coordinateManager.update(this._camera, this._renderer.canvas, minimap);

    this._render();
    window.requestAnimationFrame(() => this._update());
  }

  private _updateEffects(deltaTime: number) {
    const now = Date.now();
    this._activeSkillEffects = this._activeSkillEffects.filter((effect) => {
      return now - effect.startTime < effect.duration;
    });
  }

  private _render() {
    if (!this._stage) return;

    const renderParams = {
      camera: this._camera,
      stage: this._stage,
      entities: this._mapEntitiesState,
      marbles: this._marbles,
      winners: this._winners,
      particleManager: this._particleManager,
      skillEffects: this._activeSkillEffects,
      winnerRank: this._winnerRank,
      winner: this._winner,
      size: { x: this._renderer.width, y: this._renderer.height },
    };
    if (this._marbles.length > 0 || this._mapEntitiesState.length > 0 || this._activeSkillEffects.length > 0) {
    }

    this._renderer.render(renderParams, this._uiObjects, this._coordinateManager);
  }

  private async _init() {
    this._recorder = new VideoRecorder(this._renderer.canvas);

    this.addUiObject(new RankRenderer());
    this.attachEvent();
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
    this._stage = stages[0];
    this._loadMap();
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

  private _loadMap() {
    if (!this._stage) {
      throw new Error('No map has been selected');
    }
  }

  public startRecording() {
    console.log('Start requested (handled by socketService)');
    if (this._autoRecording) {
      this._recorder.start();
    }
  }

  public stopRecording() {
    console.log('Stop requested (handled by socketService)');
    if (this._autoRecording) {
      this._recorder.stop();
    }
  }

  public setWinningRank(rank: number) {
    console.log(`Set winning rank requested: ${rank} (handled by socketService)`);
  }

  public setAutoRecording(value: boolean) {
    this._autoRecording = value;
  }

  public setMarbles(names: string[]) {
    console.log('Local setMarbles called, but state is managed by server.');
  }

  public reset() {
    console.log('Reset requested (handled by socketService)');
    this._goalDist = Infinity;
    this._stage = stages[0];
    this._loadMap();
  }

  public getCount() {
    return this._totalMarbleCount;
  }

  public shake() {
    this._camera.shake(500);
  }

  public getMaps() {
    return stages.map((stage, index) => {
      return {
        index,
        title: stage.title,
      };
    });
  }

  public setMap(index: number) {
    console.log(`Set map requested: ${index} (handled by socketService)`);
    if (index >= 0 && index < stages.length) {
      this._stage = stages[index];
      this._loadMap();
      this._marbles = [];
      this._winners = [];
      this._winner = null;
      this._mapEntitiesState = [];
    } else {
      console.error('Invalid map index for local stage update:', index);
    }
  }

  public getCoordinateManager(): CoordinateManager {
    return this._coordinateManager;
  }
}
