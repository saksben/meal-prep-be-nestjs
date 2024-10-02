import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGroceryListDto } from './dto/create-grocerylist.dto';
import { UpdateGroceryListDto } from './dto/update-grocerylist.dto';

@Injectable()
export class GrocerylistService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.groceryList.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.groceryList.findUnique({
      where: { id },
    });
  }

  async create(createGroceryListDto: CreateGroceryListDto) {
    const { userId, mealPlans } = createGroceryListDto;

    return await this.prisma.groceryList.create({
      data: {
        user: { connect: { id: userId } },
        mealPlans: {
          connect: mealPlans.map((mealPlanId) => ({ id: mealPlanId })),
        },
      },
    });
  }

  async update(id: number, updateGroceryListDto: UpdateGroceryListDto) {
    const { userId, mealPlans } = updateGroceryListDto;

    return await this.prisma.groceryList.update({
      where: { id },
      data: {
        user: userId ? { connect: { id: userId } } : undefined,
        mealPlans: mealPlans
          ? {
              connect: mealPlans.map((mealPlanId) => ({ id: mealPlanId })),
            }
          : undefined,
      },
    });
  }

  async delete(id: number) {
    return await this.prisma.groceryList.delete({
      where: { id },
    });
  }
}
