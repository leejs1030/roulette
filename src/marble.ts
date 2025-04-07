import { Skills } from './data/constants';
import { rad } from './utils/utils';
import options from './options';
// Removed VectorLike, Vector, IPhysics imports

// Define MarbleState interface locally matching roulette.ts
// TODO: Move to a shared types directory
interface MarbleState {
  id: number;
  x: number;
  y: number;
  angle: number;
  name?: string;
  weight?: number;
  skill?: Skills;
  isActive?: boolean;
}

export class Marble {
  type = 'marble' as const;
  name: string = '';
  size: number = 0.5;
  color: string = 'red';
  hue: number = 0;
  impact: number = 0; // Keep for visual effect? Or remove if server handles effects
  weight: number = 1;
  skill: Skills = Skills.None; // Updated by server state
  isActive: boolean = false; // Updated by server state

  // --- Local state for rendering/animation ---
  private _x: number = 0;
  private _y: number = 0;
  private _angle: number = 0;
  // private _coolTime = 0; // Cooldown visualization might be local or driven by server state
  // private _maxCoolTime = 5000; // If local, needs initialization
  // private _stuckTime = 0; // Stuck visualization might be local or driven by server state

  id: number;

  // --- Getters for position based on local state ---
  get position() {
    return { x: this._x, y: this._y, angle: this._angle };
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get angle() {
    return this._angle;
  }

  // Simplified constructor, no physics interaction
  constructor(
    id: number,
    name?: string,
    weight: number = 1,
    // Removed order, max parameters as positioning is done by server
  ) {
    this.id = id;
    this.name = name || `M${id}`;
    this.weight = weight; // Keep weight if used for rendering/UI

    // Initialize color based on ID or name hash
    // Simple hash function for demonstration
    let hash = 0;
    for (let i = 0; i < this.name.length; i++) {
        hash = this.name.charCodeAt(i) + ((hash << 5) - hash);
    }
    this.hue = hash % 360;
    this.color = `hsl(${this.hue} 100% 70%)`;

    // Initialize position to something default, server will update
    this._x = 0;
    this._y = -1000; // Start off-screen until server update
    this._angle = 0;
    this.isActive = false; // Start inactive

    // Initialize local visualization state if needed
    // this._maxCoolTime = 1000 + (1 - this.weight) * 4000;
    // this._coolTime = this._maxCoolTime * Math.random();
  }

  // Method to update marble state based on data from the server
  updateState(state: MarbleState) {
    this._x = state.x;
    this._y = state.y;
    this._angle = state.angle;
    this.isActive = state.isActive ?? this.isActive; // Update if server sends it
    this.skill = state.skill ?? this.skill; // Update if server sends it
    // Update name/weight if they can change or are sent initially
    if (state.name) this.name = state.name;
    if (state.weight) this.weight = state.weight;
  }

  // Removed local update logic (physics interaction, stuck check, skill cooldown)
  // update(deltaTime: number) { ... }

  // Rendering logic remains mostly the same, using local _x, _y, _angle
  render(
    ctx: CanvasRenderingContext2D,
    zoom: number,
    outline: boolean,
    isMinimap: boolean = false,
    skin?: CanvasImageSource,
  ) {
    ctx.save();
    if (isMinimap) {
      this._renderMinimap(ctx);
    } else {
      this._renderNormal(ctx, zoom, outline, skin);
    }
    ctx.restore();
  }

  private _renderMinimap(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    this._drawMarbleBody(ctx, true);
  }

  private _drawMarbleBody(ctx: CanvasRenderingContext2D, isMinimap: boolean) {
    ctx.beginPath();
    ctx.arc(
      this._x, // Use local state
      this._y, // Use local state
      isMinimap ? this.size : this.size / 2,
      0,
      Math.PI * 2,
    );
    ctx.fill();
  }

  private _renderNormal(
    ctx: CanvasRenderingContext2D,
    zoom: number,
    outline: boolean,
    skin?: CanvasImageSource,
  ) {
    // Use local state for rendering position
    ctx.fillStyle = `hsl(${this.hue} 100% ${70 + 25 * Math.min(1, this.impact / 500)}%`;
    // if (this._stuckTime > 0) { ... } // Removed stuck visualization for now

    ctx.shadowColor = this.color;
    ctx.shadowBlur = zoom / 2;
    if (skin) {
      const hs = this.size / 2;
      ctx.save();
      ctx.translate(this._x, this._y); // Use local state
      ctx.rotate(this._angle); // Use local state
      ctx.drawImage(skin, -hs, -hs, hs * 2, hs * 2);
      ctx.restore();
    } else {
      this._drawMarbleBody(ctx, false);
    }

    ctx.shadowColor = '';
    ctx.shadowBlur = 0;
    this._drawName(ctx, zoom);

    if (outline) {
      this._drawOutline(ctx, 2 / zoom);
    }

    // if (options.useSkills) {
    //   this._renderCooltime(ctx, zoom); // Keep or remove cooldown visualization
    // }
  }

  private _drawName(ctx: CanvasRenderingContext2D, zoom: number) {
    ctx.save();
    ctx.translate(this._x, this._y + 0.25); // Use local state
    ctx.scale(1 / zoom, 1 / zoom);
    ctx.font = `12pt sans-serif`;
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 0;
    ctx.strokeText(this.name, 0, 0);
    ctx.fillText(this.name, 0, 0);
    ctx.restore();
  }

  private _drawOutline(ctx: CanvasRenderingContext2D, lineWidth: number) {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = lineWidth;
    ctx.arc(this._x, this._y, this.size / 2, 0, Math.PI * 2); // Use local state
    ctx.stroke();
    ctx.restore();
  }

  // Removed _renderCooltime and _renderStuck for simplicity, can be added back if needed
  // private _renderCooltime(ctx: CanvasRenderingContext2D, zoom: number) { ... }
  // private _renderStuck(ctx: CanvasRenderingContext2D, zoom: number) { ... }
}
