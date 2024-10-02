import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MealService } from './meal.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';

@Controller('meals')
export class MealController {
  constructor(private readonly mealService: MealService) {}

  @Get()
  async findAll() {
    return await this.mealService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.mealService.findOne(+id);
  }

  @Post()
  async create(@Body() createMealDto: CreateMealDto) {
    return await this.mealService.create(createMealDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMealDto: UpdateMealDto) {
    return await this.mealService.update(+id, updateMealDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.mealService.delete(+id);
  }
}
