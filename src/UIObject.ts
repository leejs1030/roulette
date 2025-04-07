import { RenderParameters } from './rouletteRenderer';
import { Rect } from './types/rect.type';

export interface UIObject {
  update(deltaTime: number): void;
  render(
    ctx: CanvasRenderingContext2D,
    params: RenderParameters,
    width: number,
    height: number
  ): void;
  getBoundingBox(): Rect | null;

  onWheel?(e: WheelEvent): void;
  onMouseMove?(e?: { x: number; y: number }): void;
  onMouseDown?(e: { x: number; y: number }): void;
  onMouseUp?(e: { x: number; y: number }): void;

  // Optional methods for server state updates and reset
  updateData?(gameState: any, marbles: any[]): void; // Use 'any' for simplicity in interface, implementers use specific types
  reset?(): void;
}
