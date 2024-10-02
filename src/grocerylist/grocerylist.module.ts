import { Module } from '@nestjs/common';
import { GrocerylistController } from './grocerylist.controller';
import { GrocerylistService } from './grocerylist.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [GrocerylistController],
  providers: [GrocerylistService, PrismaService],
})
export class GrocerylistModule {}
