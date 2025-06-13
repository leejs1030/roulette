import { CoordinateManager } from './utils/coordinate-manager';
import { RenderParameters } from './rouletteRenderer';
import { DefaultEntityColor, initialZoom } from './data/constants';
import { UIObject } from './UIObject';
import { Rect } from './types/rect.type';
import { gamestate } from 'common';
import { MapEntityState } from './types/gameTypes'; // Import types from gameTypes

type MarbleDto = gamestate.IMarbleDto;
type VectorLike = gamestate.Position;

export class Minimap implements UIObject {
  private ctx!: CanvasRenderingContext2D;
  private lastParams: RenderParameters | null = null;
  private coordinateManager: CoordinateManager | null = null;

  private _onViewportChangeHandler: ((pos?: VectorLike) => void) | null = null;
  private boundingBox: Rect;
  private mousePosition: { x: number; y: number } | null = null;

  constructor() {
    this.boundingBox = {
      x: 10,
      y: 10,
      w: 26 * 4,
      h: 0,
    };
  }

  getBoundingBox(): Rect | null {
    return this.boundingBox;
  }

  onViewportChange(callback: (pos?: VectorLike) => void) {
    this._onViewportChangeHandler = callback;
  }

  update(): void {
  }

  onMouseMove(e?: { x: number; y: number }) {
    if (!e) {
      this.mousePosition = null;
      if (this._onViewportChangeHandler) {
        this._onViewportChangeHandler();
      }
      return;
    }
    if (!this.lastParams) return;
    this.mousePosition = {
      x: e.x,
      y: e.y,
    };
    if (this._onViewportChangeHandler && this.coordinateManager) {
      this._onViewportChangeHandler(
        this.coordinateManager.minimapToWorld(new gamestate.Position({ x: this.mousePosition?.x || 0, y: this.mousePosition?.y || 0 }))
      );
    }
  }

  render(
    ctx: CanvasRenderingContext2D,
    params: RenderParameters,
    coordinateManager: CoordinateManager,
    _width: number,
    _height: number
  ) {
    this.coordinateManager = coordinateManager;
    if (!ctx) return;
    const { stage } = params;
    if (!stage) return;
    this.boundingBox.h = stage.goalY * 4;

    this.lastParams = params;

    this.ctx = ctx;
    ctx.save();
    ctx.fillStyle = '#333';
    ctx.translate(10, 10);
    ctx.scale(4, 4);
    ctx.fillRect(0, 0, 26, stage.goalY);

    this.ctx.lineWidth = 3 / (params.camera.zoom + initialZoom);
    this.drawEntities(params.entities);
    this.drawMarbles(params);
    this.drawViewport(params);

    ctx.restore();
    ctx.save();
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 1;
    ctx.strokeRect(
      this.boundingBox.x,
      this.boundingBox.y,
      this.boundingBox.w,
      this.boundingBox.h,
    );
    ctx.restore();
  }

  private drawViewport(params: RenderParameters) {
    this.ctx.save();
    const { camera, size } = params;
    const zoom = camera.zoom;
    const w = size.x / (zoom * initialZoom * 2);
    const h = size.y / (zoom * initialZoom * 2);
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 1 / zoom;
    this.ctx.strokeRect(camera.x - w, camera.y - h, w * 2, h * 2);
    this.ctx.restore();
  }

  private drawEntities(entities: MapEntityState[]) {
    this.ctx.save();
    entities.forEach((entity) => {
      this.ctx.save();
      let shapeType: 'box' | 'circle' | 'polyline' | undefined;
      if (entity.shape?.boxShape) {
        shapeType = 'box';
      } else if (entity.shape?.circleShape) {
        shapeType = 'circle';
      } else if (entity.shape?.polylineShape) {
        shapeType = 'polyline';
      }
      this.ctx.fillStyle = DefaultEntityColor[shapeType || 'box']; // 기본값 'box'로 설정
      this.ctx.strokeStyle = DefaultEntityColor[shapeType || 'box']; // 기본값 'box'로 설정
      this.ctx.translate(entity.x || 0, entity.y || 0);
      this.ctx.rotate(entity.angle || 0);

      this.ctx.save();
      const shape = entity.shape;
      if (shape?.boxShape) {
        const w = shape.boxShape.width || 0;
        const h = shape.boxShape.height || 0;
        this.ctx.rotate(shape.boxShape.rotation || 0);
        this.ctx.fillRect(-w / 2, -h / 2, w, h);
      } else if (shape?.circleShape) {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, shape.circleShape.radius || 0, 0, Math.PI * 2, false);
        this.ctx.stroke();
      } else if (shape?.polylineShape) {
        if (shape.polylineShape.points && shape.polylineShape.points.length > 0) {
          this.ctx.beginPath();
          this.ctx.moveTo(shape.polylineShape.points[0].x || 0, shape.polylineShape.points[0].y || 0);
          for (let i = 1; i < shape.polylineShape.points.length; i++) {
            this.ctx.lineTo(shape.polylineShape.points[i].x || 0, shape.polylineShape.points[i].y || 0);
          }
          this.ctx.stroke();
        }
      }
      this.ctx.restore();
      this.ctx.restore();
    });
    this.ctx.restore();
  }

  private drawMarbles(params: RenderParameters) {
    const { marbles } = params;
    this.ctx.save();
    marbles.forEach((marbleState: MarbleDto) => {
      this.ctx.beginPath();
      const minimapRadius = Math.max(0.5, (marbleState.radius || 0) * 0.5);
      this.ctx.arc(marbleState.x || 0, marbleState.y || 0, minimapRadius, 0, Math.PI * 2, false);
      this.ctx.fillStyle = marbleState.color || 'black';
      this.ctx.fill();
    });
    this.ctx.restore();
  }
}
