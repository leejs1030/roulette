import { STUCK_DELAY } from './data/constants';
import { Vector } from './utils/Vector';
import { IPhysics } from './IPhysics';
import { MarbleDto, VectorLike, marbleRadius } from 'common';

interface MarbleConstructorParams {
  physics: IPhysics;
  id: number;
  name?: string;
  weight?: number;
  isDummy?: boolean;
  position?: { x: number; y: number };
  initialVelocity?: { x: number; y: number };
  order?: number; // Used for default position calculation if 'position' is not provided
  maxForHue?: number; // Used for hue calculation if 'isDummy' is false
}

export class Marble {
  type = 'marble' as const;
  name: string = '';
  size: number = 0.5;
  color: string = 'red';
  hue: number = 0;
  weight: number = 1;
  isActive: boolean = false;
  isDummy: boolean = false;
  radius: number = marbleRadius;

  private _skillRate = 0.0005;
  private _coolTime = 5000;
  private _maxCoolTime = 5000;
  private _stuckTime = 0;
  private lastPosition: VectorLike = { x: 0, y: 0 };

  private physics: IPhysics;

  id: number;

  get position() {
    return this.physics.getMarblePosition(this.id) || { x: 0, y: 0, angle: 0 };
  }

  get x() {
    return this.position.x;
  }

  set x(v: number) {
    this.position.x = v;
  }

  get y() {
    return this.position.y;
  }

  set y(v: number) {
    this.position.y = v;
  }

  get angle() {
    return this.position.angle;
  }

  constructor({
    physics,
    id,
    name,
    weight = 1,
    isDummy = false,
    position,
    initialVelocity,
    order,
    maxForHue,
  }: MarbleConstructorParams) {
    this.name = name || `M${id}`;
    this.weight = weight;
    this.physics = physics;
    this.isDummy = isDummy;
    this.radius = marbleRadius;
    this.id = id;

    this._maxCoolTime = 1000 + (1 - this.weight) * 4000;
    this._coolTime = this._maxCoolTime * Math.random();
    this._skillRate = 0.2 * this.weight;

    let finalPosition = position;
    if (!finalPosition && order !== undefined && maxForHue !== undefined) {
      const maxLine = Math.ceil(maxForHue / 10);
      const line = Math.floor(order / 10);
      const lineDelta = -Math.max(0, Math.ceil(maxLine - 5));
      finalPosition = {
        x: 10.25 + (order % 10) * 0.6,
        y: maxLine - line + lineDelta,
      };
    } else if (!finalPosition) {
      // Fallback if no position and no order/maxForHue for default calculation
      finalPosition = { x: 0, y: 0 };
    }

    if (this.isDummy) {
      this.hue = Math.random() * 360;
    } else if (maxForHue !== undefined) {
      this.hue = (360 / maxForHue) * id;
    } else {
      this.hue = 0; // Default hue if maxForHue is not provided
    }
    this.color = `hsl(${this.hue} 100% 70%)`;

    physics.createMarble({
      id: this.id,
      x: finalPosition.x,
      y: finalPosition.y,
      radius: marbleRadius,
      isDummy: this.isDummy,
      initialVelocity: initialVelocity,
    });
  }

  update(deltaTime: number) {
    this._updateStuckState(deltaTime);
    this.lastPosition = { x: this.position.x, y: this.position.y };

    if (!this.isActive) return;
  }

  private _updateStuckState(deltaTime: number) {
    if (this.isActive && Vector.lenSq(Vector.sub(this.lastPosition, this.position)) < 0.00001) {
      this._stuckTime += deltaTime;

      if (this._stuckTime > STUCK_DELAY) {
        this.physics.shakeMarble(this.id);
        this._stuckTime = 0;
      }
    } else {
      this._stuckTime = 0;
    }
  }

  toJSON(): MarbleDto {
    return {
      id: this.id,
      name: this.name,
      x: this.x,
      y: this.y,
      angle: this.angle,
      color: this.color,
      hue: this.hue,
      isActive: this.isActive,
      isDummy: this.isDummy,
      radius: this.radius,
    };
  }
}
