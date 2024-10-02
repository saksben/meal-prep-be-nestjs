import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';

@Injectable()
export class MealService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.meal.findMany({
      include: {
        ingredients: true,
        filters: true,
      },
    });
  }

  async findOne(id: number) {
    const meal = await this.prisma.meal.findUnique({
      where: { id },
      include: {
        ingredients: true,
        filters: true,
      },
    });
    if (!meal) {
      throw new NotFoundException(`Meal with id ${id} not found.`);
    }
    return meal;
  }

  async create(createMealDto: CreateMealDto) {
    const {
      name,
      description,
      ingredients,
      recipe,
      servings,
      recipeLink,
      filters,
    } = createMealDto;

    return await this.prisma.meal.create({
      data: {
        name,
        description,
        recipe,
        servings,
        recipeLink,
        ingredients: {
          create: ingredients.map((ingredientId) => ({
            ingredient: { connect: { id: ingredientId } },
          })),
        },
        filters: {
          connect: filters.map((filterId) => ({ id: filterId })),
        },
      },
    });
  }

  async update(id: number, updateMealDto: UpdateMealDto) {
    const {
      name,
      description,
      ingredients,
      recipe,
      servings,
      recipeLink,
      filters,
    } = updateMealDto;

    return await this.prisma.meal.update({
      where: { id },
      data: {
        name,
        description,
        recipe,
        servings,
        recipeLink,
        // Update Ingredients (reset the current set and add new ones)
        ingredients: {
          set: [], // Remove all existing Ingredients
          create: ingredients.map((ingredientId) => ({
            ingredient: { connect: { id: ingredientId } }, // Add new Ingredient connections
          })),
        },
        // Update Filters (reset the current set and add new ones
        filters: {
          set: [], // Remove all existing Filters
          connect: filters.map((filterId) => ({ id: filterId })), // Add new Filter connections
        },
      },
    });
  }

  async delete(id: number) {
    return await this.prisma.meal.delete({
      where: { id },
    });
  }
}
