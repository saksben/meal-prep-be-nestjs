import { Module } from '@nestjs/common';
import { IngredientController } from './ingredient.controller';
import { IngredientService } from './ingredient.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [IngredientController],
  providers: [IngredientService, PrismaService],
})
export class IngredientModule {}
