import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTransactionDto } from 'src/transaction/dto/create-transaction.dto';
import { CashbackService } from './cashback.service';
import { CreateCashbackDto } from './dto/create-cashback.dto';
import { UpdateCashbackDto } from './dto/update-cashback.dto';
@ApiTags('Cashback')
@Controller('cashback')
export class CashbackController {
  constructor(private readonly cashbackService: CashbackService) {}

  // @Post()
  // create(@Body() createCashbackDto: CreateCashbackDto) {
  //   return this.cashbackService.create(createCashbackDto);
  // }
  @ApiTags('Get Cashback')
  @ApiOperation({ summary: 'Get Cashback' })
  @ApiResponse({
    status: 200,
    description: '',
    type: () => CreateCashbackDto,
    isArray: true,
  })
  @Get()
  findAll() {
    return this.cashbackService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.cashbackService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateCashbackDto: UpdateCashbackDto,
  // ) {
  //   return this.cashbackService.update(+id, updateCashbackDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.cashbackService.remove(+id);
  // }
}
