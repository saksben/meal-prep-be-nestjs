import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FilterService } from './filter.service';
import { CreateFilterDto } from './dto/create-filter.dto';
import { UpdateFilterDto } from './dto/update-filter.dto';

@Controller('filters')
export class FilterController {
  constructor(private readonly filterService: FilterService) {}

  @Get()
  async findAll() {
    return await this.filterService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.filterService.findOne(+id);
  }

  @Post()
  async create(@Body() createFilterDto: CreateFilterDto) {
    return await this.filterService.create(createFilterDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateFilterDto: UpdateFilterDto,
  ) {
    return await this.filterService.update(+id, updateFilterDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.filterService.delete(+id);
  }
}
