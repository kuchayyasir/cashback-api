import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateRulesetDto {
  @ApiProperty({ type: 'string', format: 'date' })
  @IsNotEmpty()
  @IsDateString()
  startDate: string;
  @ApiProperty({ type: 'string', format: 'date' })
  @IsNotEmpty()
  @IsDateString()
  endDate: string;
  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: 'number' })
  cashback: Number;
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: 'number' })
  redemptionLimit: Number;
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ type: 'number', required: false })
  minTransactions: Number;
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ type: 'number', required: false })
  budget: Number;
}
