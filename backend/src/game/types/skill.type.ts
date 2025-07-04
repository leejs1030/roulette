import { IsNumber } from 'class-validator';

// class-validator 데코레이터가 필요한 DTO용 클래스
export class SkillPosition {
  @IsNumber()
  x!: number;

  @IsNumber()
  y!: number;
}
