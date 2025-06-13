import { SkillEffect, gamestate } from 'common';
import { v4 as uuidv4 } from 'uuid';

export class SkillManager {
  private _skillEffects: SkillEffect[] = [];

  get skillEffects(): SkillEffect[] {
    return this._skillEffects;
  }

  public addSkillEffect(effectData: Omit<gamestate.ISkillEffect, 'id' | 'timestamp'>): void {
    const newEffect: gamestate.ISkillEffect = {
      ...effectData,
      id: uuidv4(),
      timestamp: Date.now(),
    } as gamestate.ISkillEffect;
    this._skillEffects.push(newEffect);
  }

  public clearSkillEffects() {
    const effects = [...this._skillEffects];
    this._skillEffects = [];
    return effects;
  }

  public reset() {
    this._skillEffects = [];
  }
}
