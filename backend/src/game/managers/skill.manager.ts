import { SkillEffect } from 'common';
import { v4 as uuidv4 } from 'uuid';
import { SkillCooldownManager } from './skill-cooldown.manager';

export class SkillManager {
  private _skillEffects: SkillEffect[] = [];
  private cooldownManager = new SkillCooldownManager();

  get skillEffects(): SkillEffect[] {
    return this._skillEffects;
  }

  get skillCooldownManager(): SkillCooldownManager {
    return this.cooldownManager;
  }

  public addSkillEffect(effectData: Omit<SkillEffect, 'id' | 'timestamp'>): void {
    const newEffect: SkillEffect = {
      ...effectData,
      id: uuidv4(),
      timestamp: Date.now(),
    } as SkillEffect;
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
