import { Marble } from '../marble';
import { IPhysics } from '../IPhysics';
import { MarbleFactory } from '../utils/marble-factory';
import { marbleRadius } from 'common';

export class MarbleManager {
  private _marbles: Marble[] = [];
  private _dummyMarbles: Marble[] = [];
  private _winners: Marble[] = [];
  private _totalMarbleCount = 0;

  constructor(private physics: IPhysics) {}

  get marbles(): Marble[] {
    return this._marbles;
  }

  get dummyMarbles(): Marble[] {
    return this._dummyMarbles;
  }

  get winners(): Marble[] {
    return this._winners;
  }

  get allMarbles(): Marble[] {
    return [...this._marbles, ...this._dummyMarbles];
  }

  get totalMarbleCount(): number {
    return this._totalMarbleCount;
  }

  public setMarbles(names: string[]) {
    this.clearAllMarbles();
    const { marbles, totalMarbleCount } = MarbleFactory.createMarbles(this.physics, names);
    this._marbles = marbles;
    this._totalMarbleCount = totalMarbleCount;
  }

  public createDummyMarbles(position: { x: number; y: number }, count: number, userNickname: string): void {
    const currentMaxId = this.allMarbles.reduce((maxId, marble) => Math.max(maxId, marble.id), -1);

    for (let i = 0; i < count; i++) {
      const newId = currentMaxId + 1 + i;
      const dummyName = `${userNickname}-${i + 1}`;
      const offsetX = (Math.random() - 0.5) * 1;
      const offsetY = (Math.random() - 0.5) * 1;
      const dummyPosition = { x: position.x + offsetX, y: position.y + offsetY };
      const initialVelocity = { x: 0, y: 10 };

      const dummyMarble = new Marble({
        physics: this.physics,
        id: newId,
        name: dummyName,
        weight: 1,
        isDummy: true,
        position: dummyPosition,
        initialVelocity: initialVelocity,
        maxForHue: 0, // maxForHue is not relevant for dummy marbles
      });
      this._dummyMarbles.push(dummyMarble);
    }
  }

  public clearAllMarbles() {
    this.physics.clearMarbles();
    this._marbles = [];
    this._dummyMarbles = [];
    this._winners = [];
    this._totalMarbleCount = 0;
  }

  public addWinner(marble: Marble) {
    if (!marble.isDummy && !this._winners.find((w) => w.id === marble.id)) {
      this._winners.push(marble);
    }
  }

  public removeMarbleFromPhysics(marbleId: number) {
    this.physics.removeMarble(marbleId);
  }

  public removeDummyMarble(marbleId: number) {
    this._dummyMarbles = this._dummyMarbles.filter((dm) => dm.id !== marbleId);
  }

  public updateMarblesForNewFrame() {
    this._marbles = this._marbles.filter((m) => !this._winners.find((w) => w.id === m.id));
    if (this._marbles.length > 1) {
      this._marbles.sort((a, b) => b.y - a.y);
    }
  }

  public getFinalRanking(): Array<{
    id: number;
    name: string;
    finalRank: number | string;
    yPos: number;
    isWinnerGoal: boolean;
  }> {
    const rankedMarbles: Array<{
      id: number;
      name: string;
      finalRank: number | string;
      yPos: number;
      isWinnerGoal: boolean;
    }> = [];

    this._winners.forEach((marble, index) => {
      rankedMarbles.push({
        id: marble.id,
        name: marble.name,
        finalRank: index + 1,
        yPos: marble.y,
        isWinnerGoal: false, // Will be determined by GameStateManager
      });
    });

    const goalCount = this._winners.length;
    this._marbles
      .slice()
      .sort((a, b) => b.y - a.y)
      .forEach((marble, index) => {
        rankedMarbles.push({
          id: marble.id,
          name: marble.name,
          finalRank: goalCount + index + 1,
          yPos: marble.y,
          isWinnerGoal: false, // Will be determined by GameStateManager
        });
      });

    return rankedMarbles;
  }
}
