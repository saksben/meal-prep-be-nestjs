import { PartialType } from '@nestjs/mapped-types';
import { CreateGroceryListDto } from './create-grocerylist.dto';

export class UpdateGroceryListDto extends PartialType(CreateGroceryListDto) {}
