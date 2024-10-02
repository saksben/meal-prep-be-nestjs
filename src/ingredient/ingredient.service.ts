import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';

@Injectable()
export class IngredientService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.ingredient.findMany();
  }

  async findOne(id: number) {
    const ingredient = await this.prisma.ingredient.findUnique({
      where: { id },
    });
    if (!ingredient) {
      throw new NotFoundException(`Ingredient with id ${id} not found.`);
    }
    return ingredient;
  }

  async create(createIngredientDto: CreateIngredientDto) {
    return await this.prisma.ingredient.create({
      data: createIngredientDto,
    });
  }

  async update(id: number, updateIngredientDto: UpdateIngredientDto) {
    const ingredient = await this.prisma.ingredient.update({
      where: { id },
      data: updateIngredientDto,
    });
    if (!ingredient) {
      throw new NotFoundException(`Ingredient with id ${id} not found`);
    }
    return ingredient;
  }

  async delete(id: number) {
    const ingredient = await this.prisma.ingredient.delete({ where: { id } });
    if (!ingredient)
      throw new NotFoundException(`Ingredient with id ${id} not found.`);
    return ingredient;
  }
}
