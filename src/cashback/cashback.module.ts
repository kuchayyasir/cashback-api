import { Module } from '@nestjs/common';
import { CashbackService } from './cashback.service';
import { CashbackController } from './cashback.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ruleset } from 'src/ruleset/entities/ruleset.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ruleset])],
  controllers: [CashbackController],
  providers: [CashbackService],
})
export class CashbackModule {}
