import { PartialType } from '@nestjs/mapped-types';
import { CreateCashbackDto } from './create-cashback.dto';

export class UpdateCashbackDto extends PartialType(CreateCashbackDto) {}
