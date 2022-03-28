import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { RulesetService } from './ruleset.service';
import { CreateRulesetDto } from './dto/create-ruleset.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
@ApiTags('Ruleset')
@Controller('ruleset')
export class RulesetController {
  constructor(private readonly rulesetService: RulesetService) {}
  @ApiTags('create rulesets')
  @ApiOperation({ summary: 'Create Ruleset' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: () => CreateRulesetDto,
  })
  @Post()
  create(@Body() createRulesetDto: CreateRulesetDto) {
    return this.rulesetService.create(createRulesetDto);
  }

  // @Get()
  // findAll() {
  //   return this.rulesetService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.rulesetService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRulesetDto: UpdateRulesetDto) {
  //   return this.rulesetService.update(+id, updateRulesetDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.rulesetService.remove(+id);
  // }
}
