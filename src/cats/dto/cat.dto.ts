import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cat.schema';

export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  // PickType 특정 값만 가져오기
  @ApiProperty({
    example: '31234219',
    description: 'id',
  })
  id: string;
}
