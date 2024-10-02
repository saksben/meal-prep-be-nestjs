import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { MealModule } from './meal/meal.module';
import { FilterModule } from './filter/filter.module';
import { GoalModule } from './goal/goal.module';
import { MealplanModule } from './mealplan/mealplan.module';
import { GrocerylistModule } from './grocerylist/grocerylist.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, UserModule, IngredientModule, MealModule, FilterModule, GoalModule, MealplanModule, GrocerylistModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
