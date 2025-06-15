import { IsEnum, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { SkillPosition } from '../types/skill.type';
import { SkillExtra, SkillType } from 'common';

export class UseSkillDto<T extends SkillType = SkillType> {
  @IsNumber()
  @Type(() => Number)
  roomId!: number;

  @IsEnum(SkillType)
  skillType!: SkillType;

  @ValidateNested()
  @Type(() => SkillPosition)
  skillPosition!: SkillPosition;

  // extra 필드는 제네릭 타입 T를 따릅니다.
  // 각 스킬 타입에 맞는 DTO를 상속받아 사용할 때 @Type과 @ValidateNested를 적용합니다.
  declare extra: SkillExtra<T>;
}
