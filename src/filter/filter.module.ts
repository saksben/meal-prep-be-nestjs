import { Module } from '@nestjs/common';
import { FilterController } from './filter.controller';
import { FilterService } from './filter.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FilterController],
  providers: [FilterService, PrismaService],
})
export class FilterModule {}
