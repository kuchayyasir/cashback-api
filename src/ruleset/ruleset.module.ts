import { Module } from '@nestjs/common';
import { RulesetService } from './ruleset.service';
import { RulesetController } from './ruleset.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ruleset } from './entities/ruleset.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ruleset])],
  controllers: [RulesetController],
  providers: [RulesetService],
})
export class RulesetModule {}
