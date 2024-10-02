import { Test, TestingModule } from '@nestjs/testing';
import { GrocerylistController } from './grocerylist.controller';

describe('GrocerylistController', () => {
  let controller: GrocerylistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrocerylistController],
    }).compile();

    controller = module.get<GrocerylistController>(GrocerylistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
