import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsDateString,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateTransactionDto {
  @ApiProperty({ type: 'string', format: 'date' })
  @IsNotEmpty()
  @IsDateString()
  date: string;
  @ApiProperty({ type: 'number', format: 'decimal' })
  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  customerId: number;
  @ApiProperty({ type: 'number', format: 'decimal' })
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
