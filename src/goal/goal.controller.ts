import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GoalService } from './goal.service';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';

@Controller('goals')
export class GoalController {
  constructor(private readonly goalService: GoalService) {}

  @Get()
  async findAll() {
    return await this.goalService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.goalService.findOne(+id);
  }

  @Post()
  async create(@Body() createGoalDto: CreateGoalDto) {
    return await this.goalService.create(createGoalDto);
  }

  @Patch(':id')
  async update(@Param('id') id: number, updateGoalDto: UpdateGoalDto) {
    return await this.goalService.update(+id, updateGoalDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.goalService.delete(+id);
  }
}
