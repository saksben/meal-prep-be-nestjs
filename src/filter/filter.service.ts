import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilterDto } from './dto/create-filter.dto';
import { UpdateFilterDto } from './dto/update-filter.dto';

@Injectable()
export class FilterService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.filter.findMany({
      include: { meals: true },
    });
  }

  async findOne(id: number) {
    const filter = await this.prisma.filter.findUnique({
      where: { id },
      include: { meals: true },
    });

    if (!filter) {
      throw new NotFoundException(`Filter with id ${id} not found.`);
    }

    return filter;
  }

  async create(createFilterDto: CreateFilterDto) {
    const { name, meals } = createFilterDto;
    return await this.prisma.filter.create({
      data: {
        name,
        meals: {
          connect: meals.map((mealId) => ({ id: mealId })),
        },
      },
    });
  }

  async update(id: number, updateFilterDto: UpdateFilterDto) {
    const { name, meals } = updateFilterDto;

    await this.findOne(id); // Ensure Filter exists first

    return await this.prisma.filter.update({
      where: { id },
      data: {
        name,
        meals: {
          set: meals.map((mealId) => ({ id: mealId })),
        },
      },
    });
  }

  async delete(id: number) {
    await this.findOne(id); // Ensure Filter exists first

    return await this.prisma.filter.delete({
      where: { id },
    });
  }
}
