import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GrocerylistService } from './grocerylist.service';
import { CreateGroceryListDto } from './dto/create-grocerylist.dto';
import { UpdateGroceryListDto } from './dto/update-grocerylist.dto';

@Controller('grocerylists')
export class GrocerylistController {
  constructor(private readonly groceryListService: GrocerylistService) {}

  @Get()
  async findAll() {
    return await this.groceryListService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.groceryListService.findOne(+id);
  }

  @Post()
  async create(@Body() createGroceryListDto: CreateGroceryListDto) {
    return await this.groceryListService.create(createGroceryListDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    updateGroceryListDto: UpdateGroceryListDto,
  ) {
    return await this.groceryListService.update(+id, updateGroceryListDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.groceryListService.delete(+id);
  }
}
