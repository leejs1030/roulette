import { SkillType, SkillEffect, gamestate } from 'common';
import { IsNumber } from 'class-validator';

// class-validator 데코레이터가 필요한 DTO용 클래스
export class SkillPosition extends gamestate.Position {}

// common에서 타입들을 re-export
export { SkillType, SkillEffect };
