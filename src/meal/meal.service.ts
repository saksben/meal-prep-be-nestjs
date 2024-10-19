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
        ingredients: {
          include: {
            ingredient: true,
          },
        },
        // filters: true,
      },
    });
  }

  async findOne(id: number) {
    const meal = await this.prisma.meal.findUnique({
      where: { id },
      include: {
        ingredients: {
          include: {
            ingredient: true,
          },
        },
        // filters: true,
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
      recipe,
      servings,
      recipeLink,
      ingredients,
      // filters,
    } = createMealDto;

    return await this.prisma.meal.create({
      data: {
        name,
        description,
        recipe,
        servings,
        recipeLink,
        ingredients: {
          create: ingredients.map((ingredient) => ({
            ingredientId: ingredient.ingredientId,
          })),
        },
        // filters: {
        //   connect: filters.map((filterId) => ({ id: filterId })),
        // },
      },
      include: {
        ingredients: {
          include: {
            ingredient: true,
          },
        },
      },
    });
  }

  async update(id: number, updateMealDto: UpdateMealDto) {
    const { ingredients, ...mealData } = updateMealDto;

    // if (updateMealDto.ingredients) {
    //   updateMealDto.ingredients.forEach((ingredient) => {
    //     if (ingredient.id) {
    //       mealData.ingredients.push({
    //         mealId: id,
    //         ingredientId: ingredient.id,
    //       });
    //     }
    //   });
    // }
    return await this.prisma.meal.update({
      where: { id },
      data: {
        // name,
        // description,
        // recipe,
        // servings,
        // recipeLink,
        // Update Ingredients (reset the current set and add new ones)
        // ingredients: {
        //   set: [], // Remove all existing Ingredients
        //   create: ingredients.map((ingredientId) => ({
        //     ingredient: { connect: { id: ingredientId } }, // Add new Ingredient connections
        //   })),
        // },
        // ingredients: {
        //   deleteMany: {},
        //   create: updateMealDto.ingredients.map((ingredient) => ({
        //     ingredientId: ingredient.id,
        //     mealId: id,
        //   })),
        // },

        // Update Filters (reset the current set and add new ones

        ...mealData,
        ingredients: {
          deleteMany: {}, // Clear existing ingredients
          // create: mealData.ingredients,
          create: ingredients?.map((ingredient) => ({
            ingredientId: ingredient.ingredientId,
          })),
        },
        // filters: {
        //   set: [], // Remove all existing Filters
        //   connect: updateMealDto.filters.map((filterId) => ({ id: filterId })), // Add new Filter connections
        // },
      },
      include: {
        ingredients: {
          include: {
            ingredient: true,
          },
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
