import { IsEnum, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { SkillEffect, gamestate } from 'common';

export class UseSkillDto<T extends gamestate.SkillType = gamestate.SkillType> {
  @IsNumber()
  @Type(() => Number)
  roomId!: number;

  @IsEnum(gamestate.SkillType)
  skillType!: gamestate.SkillType;

  @ValidateNested()
  @Type(() => gamestate.Position)
  skillPosition!: gamestate.IPosition;

  // extra 필드는 제네릭 타입 T를 따릅니다.
  // 각 스킬 타입에 맞는 DTO를 상속받아 사용할 때 @Type과 @ValidateNested를 적용합니다.
  declare extra: SkillEffect;
}
