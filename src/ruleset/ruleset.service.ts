import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { MongoRepository } from 'typeorm';
import { CreateRulesetDto } from './dto/create-ruleset.dto';
import { UpdateRulesetDto } from './dto/update-ruleset.dto';
import { Ruleset } from './entities/ruleset.entity';

@Injectable()
export class RulesetService {
  constructor(
    @InjectRepository(Ruleset)
    private readonly ruleSetRepository: MongoRepository<Ruleset>,
  ) {}
  async create(createRulesetDto: CreateRulesetDto) {
    return await this.ruleSetRepository.save(createRulesetDto);
  }

  async findAll() {
    return await this.ruleSetRepository.find();
  }

  async findOne(id: any) {
    const ruleSet =
      ObjectID.isValid(id) && (await this.ruleSetRepository.findOne(id));
    if (!ruleSet) {
      // Entity not found
      throw new NotFoundException();
    }
    return ruleSet;
    //return `This action returns a #${id} ruleset`;
  }

  update(id: number, updateRulesetDto: UpdateRulesetDto) {
    return `This action updates a #${id} ruleset`;
  }

  remove(id: number) {
    return `This action removes a #${id} ruleset`;
  }
}
