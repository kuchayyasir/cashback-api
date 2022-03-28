import { ApiProperty } from '@nestjs/swagger';

export class CreateCashbackDto {
  @ApiProperty({ type: 'number' })
  transactionId: Number;
  @ApiProperty({ type: 'number' })
  amount: Number;
}
