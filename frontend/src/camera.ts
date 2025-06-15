import { MarbleDto, StageDef } from 'common';
import { initialZoom, zoomThreshold } from './data/constants';
import { VectorLike } from 'common';

export class Camera {
  private _position: VectorLike = { x: 0, y: 0 };
  private _targetPosition: VectorLike = { x: 0, y: 0 };
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
    return this._position.x;
  }
  set x(v: number) {
    this._targetPosition.x = v;
  }
  get y() {
    return this._position.y;
  }
  set y(v: number) {
    this._targetPosition.y = v;
  }

  get position() {
    return this._position;
  }

  setPosition(v: VectorLike, force: boolean = false) {
    if (force) {
      return (this._position = { x: v.x, y: v.y });
    }
    return (this._targetPosition = { x: v.x, y: v.y });
  }

  lock(v: boolean) {
    this._locked = v;
  }

  update({
    marbles,
    stage,
    winningRank,
    deltaTime,
  }: {
    marbles: MarbleDto[];
    stage: StageDef;
    winningRank: number;
    deltaTime: number;
  }) {
    if (!this._locked) {
      this._calcTargetPositionAndZoom(marbles, stage, winningRank);
    }

    if (this._shakeDuration > 0) {
      this._shakeDuration -= deltaTime;
      this._position.x += (Math.random() - 0.5) * this._shakeStrength;
      this._position.y += (Math.random() - 0.5) * this._shakeStrength;
    }
    this._position.x = this._interpolation(this.x, this._targetPosition.x);
    this._position.y = this._interpolation(this.y, this._targetPosition.y);

    this._zoom = this._interpolation(this._zoom, this._targetZoom);
  }

  private _calcTargetPositionAndZoom(marbles: MarbleDto[], stage: StageDef, winningRank: number) {
    if (marbles.length > 0) {
      // 승리 조건에 따라 구슬을 정렬합니다.
      const sortedMarbles = [...marbles].sort((a, b) => {
        // winningRank가 1이면 y값이 큰 순서 (선두)
        // winningRank가 꼴찌면 y값이 작은 순서 (꼴찌)
        if (winningRank === 1) {
          return b.y - a.y;
        } else {
          return a.y - b.y;
        }
      });

      const weights = [0.6, 0.3, 0.1];
      const topMarbles = sortedMarbles.slice(0, 3);
      let totalWeight = 0;
      const targetPosition = topMarbles.reduce(
        (acc, marble, index) => {
          const weight = weights[index] || 0;
          totalWeight += weight;
          acc.x += marble.x * weight;
          acc.y += marble.y * weight;
          return acc;
        },
        { x: 0, y: 0 }
      );

      if (totalWeight > 0) {
        targetPosition.x /= totalWeight;
        targetPosition.y /= totalWeight;

        // 1차 목표 위치에서 가장 가까운 구슬을 찾습니다.
        let closestMarble = marbles[0];
        let minDistance = Infinity;

        for (const marble of marbles) {
          const distance = Math.sqrt(Math.pow(targetPosition.x - marble.x, 2) + Math.pow(targetPosition.y - marble.y, 2));
          if (distance < minDistance) {
            minDistance = distance;
            closestMarble = marble;
          }
        }
        this.setPosition(closestMarble);
      } else if (marbles.length > 0) {
        // topMarbles가 비어있지만, 전체 구슬은 있는 경우, 첫 번째 구슬을 타겟으로 설정
        this.setPosition(marbles[0]);
      } else {
        // 구슬이 아예 없는 경우, (0, 0)을 타겟으로 설정
        this.setPosition({ x: 0, y: 0 });
      }

      const unpassedMarbles = marbles.filter((m) => m.y < stage.zoomY);
      const numberOfUnpassedMarbles = unpassedMarbles.length;

      if (numberOfUnpassedMarbles <= 5) {
        const goalDist = Math.abs(stage.zoomY - this._position.y);
        this.zoom = Math.min(1.4, Math.max(1, (1 - goalDist / zoomThreshold) * 4));
      } else {
        this.zoom = 1;
      }
    } else {
      this.setPosition({ x: 0, y: 0 });
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
      left: this._position.x - halfWidth,
      right: this._position.x + halfWidth,
      top: this._position.y - halfHeight,
      bottom: this._position.y + halfHeight,
    };
  }

  public getViewportInfo() {
    return {
      position: { ...this._position },
      zoom: this._zoom,
      size: { width: this.width, height: this.height },
      worldBounds: this.getWorldBounds(),
    };
  }
}
