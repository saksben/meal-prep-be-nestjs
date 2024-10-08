import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';

@Injectable()
export class GoalService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.goal.findMany({
      // include: { mealPlans: true, user: true },
      include: { mealPlans: true },
    });
  }

  async findOne(id: number) {
    const goal = await this.prisma.goal.findUnique({
      where: { id },
      // include: { mealPlans: true, user: true },
      include: { mealPlans: true },
    });

    if (!goal) {
      throw new NotFoundException(`Goal with id ${id} not found.`);
    }

    return goal;
  }

  async create(createGoalDto: CreateGoalDto) {
    const { name, calories, carbohydrates, fat, protein, price, userId } =
      createGoalDto;

    return await this.prisma.goal.create({
      data: {
        name,
        calories,
        carbohydrates,
        fat,
        protein,
        price,
        user: {
          connect: { id: userId },
        },
      },
    });
  }

  async update(id: number, updateGoalDto: UpdateGoalDto) {
    const { name, calories, carbohydrates, fat, protein, price, userId } =
      updateGoalDto;

    await this.findOne(id); // Ensure goal exists first

    return await this.prisma.goal.update({
      where: { id },
      data: {
        name,
        calories,
        carbohydrates,
        fat,
        protein,
        price,
        // user: {
        //   connect: { id: userId },
        // },
      },
    });
  }

  async delete(id: number) {
    await this.findOne(id);

    return await this.prisma.goal.delete({
      where: { id },
    });
  }
}
