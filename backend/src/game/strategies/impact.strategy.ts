import { Injectable, Logger } from '@nestjs/common';
import { GameRoom } from '../game-room';
import { SkillStrategy } from './skill.strategy';
import { gamestate, SkillType, SkillEffect } from 'common';
import { SkillPosition } from '../types/skill.type';

const IMPACT_SKILL_RADIUS = 5;
const IMPACT_SKILL_FORCE = 10;

@Injectable()
export class ImpactSkillStrategy implements SkillStrategy<gamestate.SkillType.Impact> {
  private readonly logger = new Logger(ImpactSkillStrategy.name);

  execute(room: GameRoom, skillPosition: SkillPosition): void {
    this.logger.log(`Room ${room.id}: Impact skill used at (${skillPosition.x}, ${skillPosition.y}) with radius ${IMPACT_SKILL_RADIUS} and force ${IMPACT_SKILL_FORCE}`);
    room.game.applyImpact(skillPosition, IMPACT_SKILL_RADIUS, IMPACT_SKILL_FORCE);

    room.game.addSkillEffect({
      impactEffect: {
        base: {
          type: gamestate.SkillType.Impact,
          id: '', // id는 serializer에서 생성되므로 빈 문자열로 설정
          timestamp: Date.now(),
        },
        position: skillPosition,
        radius: IMPACT_SKILL_RADIUS,
      },
    } as SkillEffect);
  }
}
