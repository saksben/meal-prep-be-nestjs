import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMealPlanDto } from './dto/create-mealplan.dto';
import { UpdateMealPlanDto } from './dto/update-mealplan.dto';

@Injectable()
export class MealplanService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.mealPlan.findMany({
      include: { user: true, goal: true, meals: true },
    });
  }

  async findOne(id: number) {
    const mealPlan = await this.prisma.mealPlan.findUnique({
      where: { id },
      include: { user: true, goal: true, meals: true },
    });

    if (!mealPlan) {
      throw new NotFoundException(`MealPlan with id ${id} not found.`);
    }

    return mealPlan;
  }

  async create(createMealPlanDto: CreateMealPlanDto) {
    const { name, userId, frequency, goalId, meals } = createMealPlanDto;

    return await this.prisma.mealPlan.create({
      data: {
        name,
        frequency,
        user: {
          connect: { id: userId },
        },
        goal: goalId ? { connect: { id: goalId } } : undefined,
        meals: {
          connect: meals.map((mealId) => ({ id: mealId })),
        },
      },
    });
  }

  async update(id: number, updateMealPlanDto: UpdateMealPlanDto) {
    const { name, userId, frequency, goalId, meals } = updateMealPlanDto;

    await this.findOne(id); // Ensure MealPlan exists first

    return await this.prisma.mealPlan.update({
      where: { id },
      data: {
        name,
        frequency,
        user: {
          connect: { id: userId },
        },
        goal: goalId ? { connect: { id: goalId } } : undefined,
        meals: {
          connect: meals.map((mealId) => ({ id: mealId })),
        },
      },
    });
  }

  async delete(id: number) {
    await this.findOne(id); // Ensure MealPlan exists first

    return await this.prisma.mealPlan.delete({
      where: { id },
    });
  }
}
