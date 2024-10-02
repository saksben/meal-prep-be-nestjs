import { Module } from '@nestjs/common';
import { MealplanService } from './mealplan.service';
import { MealplanController } from './mealplan.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [MealplanService, PrismaService],
  controllers: [MealplanController],
})
export class MealplanModule {}
