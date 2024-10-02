import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MealplanService } from './mealplan.service';
import { CreateMealPlanDto } from './dto/create-mealplan.dto';
import { UpdateMealPlanDto } from './dto/update-mealplan.dto';

@Controller('mealplans')
export class MealplanController {
  constructor(private readonly mealPlanService: MealplanService) {}

  @Get()
  async findAll() {
    return await this.mealPlanService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.mealPlanService.findOne(+id);
  }

  @Post()
  async create(@Body() createMealPlanDto: CreateMealPlanDto) {
    return await this.mealPlanService.create(createMealPlanDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateMealPlanDto: UpdateMealPlanDto,
  ) {
    return await this.mealPlanService.update(+id, updateMealPlanDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.mealPlanService.delete(+id);
  }
}
