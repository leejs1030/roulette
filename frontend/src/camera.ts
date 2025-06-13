import { StageDef, gamestate } from 'common';
import { initialZoom, zoomThreshold } from './data/constants';

type VectorLike = gamestate.Position;

export class Camera {
  private _position: VectorLike = new gamestate.Position({ x: 0, y: 0 });
  private _targetPosition: VectorLike = new gamestate.Position({ x: 0, y: 0 });
  private _zoom: number = 1;
  private _targetZoom: number = 1;
  private _locked = false;
  private _shakeDuration = 0;
  private _shakeStrength = 10;
  public width: number = 0;
  public height: number = 0;

  get zoom() {
    return this._zoom;
  }
  set zoom(v: number) {
    this._targetZoom = v;
  }

  get x() {
    return this._position.x || 0;
  }
  set x(v: number) {
    this._targetPosition.x = v;
  }
  get y() {
    return this._position.y || 0;
  }
  set y(v: number) {
    this._targetPosition.y = v;
  }

  get position() {
    return this._position;
  }

  setPosition(v: VectorLike, force: boolean = false) {
    if (force) {
      return (this._position = new gamestate.Position({ x: v.x, y: v.y }));
    }
    return (this._targetPosition = new gamestate.Position({ x: v.x, y: v.y }));
  }

  lock(v: boolean) {
    this._locked = v;
  }

  update({
    marbles,
    stage,
    targetIndex,
    deltaTime,
  }: {
    marbles: gamestate.IMarbleDto[];
    stage: StageDef;
    targetIndex: number;
    deltaTime: number;
  }) {
    if (!this._locked) {
      this._calcTargetPositionAndZoom(marbles, stage, targetIndex);
    }

    if (this._shakeDuration > 0) {
      this._shakeDuration -= deltaTime;
      this._position.x = (this._position.x || 0) + (Math.random() - 0.5) * this._shakeStrength;
      this._position.y = (this._position.y || 0) + (Math.random() - 0.5) * this._shakeStrength;
    }
    this._position.x = this._interpolation(this.x, this._targetPosition.x || 0);
    this._position.y = this._interpolation(this.y, this._targetPosition.y || 0);

    this._zoom = this._interpolation(this._zoom, this._targetZoom);
  }

  private _calcTargetPositionAndZoom(marbles: gamestate.IMarbleDto[], stage: StageDef, targetIndex: number) {
    if (marbles.length > 0) {
      const targetMarble = marbles[targetIndex] ? marbles[targetIndex] : marbles[0];
      this.setPosition(new gamestate.Position({ x: targetMarble.x || 0, y: targetMarble.y || 0 }));
      const unpassedMarbles = marbles.filter((m) => (m.y || 0) < stage.zoomY);
      const numberOfUnpassedMarbles = unpassedMarbles.length;

      if (numberOfUnpassedMarbles <= 5) {
        const goalDist = Math.abs(stage.zoomY - this._position.y);
        this.zoom = Math.min(1.4, Math.max(1, (1 - goalDist / zoomThreshold) * 4));
      } else {
        this.zoom = 1;
      }
    } else {
      this.setPosition(new gamestate.Position({ x: 0, y: 0 }));
      this.zoom = 1;
    }
  }

  private _interpolation(current: number, target: number) {
    const d = target - current;
    if (Math.abs(d) < 1 / initialZoom) {
      return target;
    }

    return current + d / 10;
  }

  constructor(width: number = 0, height: number = 0) {
    this.width = width;
    this.height = height;
  }

  setSize(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  shake(duration: number) {
    this._shakeDuration = duration;
  }

  renderScene(ctx: CanvasRenderingContext2D, callback: (ctx: CanvasRenderingContext2D) => void) {
    const centerOffsetDivisor = 2;
    const zoomFactor = initialZoom * centerOffsetDivisor * this._zoom;
    const centerOffsetX = this.width / zoomFactor;
    const centerOffsetY = this.height / zoomFactor;

    ctx.save();
    ctx.translate(-this.x * this._zoom, -this.y * this._zoom);
    ctx.scale(this.zoom, this.zoom);
    ctx.translate(centerOffsetX, centerOffsetY);
    callback(ctx);
    ctx.restore();
  }

  public getWorldBounds(): { left: number; right: number; top: number; bottom: number } {
    const halfWidth = this.width / (2 * this._zoom);
    const halfHeight = this.height / (2 * this._zoom);

    return {
      left: (this._position.x || 0) - halfWidth,
      right: (this._position.x || 0) + halfWidth,
      top: (this._position.y || 0) - halfHeight,
      bottom: (this._position.y || 0) + halfHeight,
    };
  }

  public getViewportInfo() {
    return {
      position: new gamestate.Position({ x: this._position.x || 0, y: this._position.y || 0 }),
      zoom: this._zoom,
      size: { width: this.width, height: this.height },
      worldBounds: this.getWorldBounds(),
    };
  }
}
