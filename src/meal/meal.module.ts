import { Module } from '@nestjs/common';
import { MealService } from './meal.service';
import { MealController } from './meal.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [MealService, PrismaService],
  controllers: [MealController],
})
export class MealModule {}
