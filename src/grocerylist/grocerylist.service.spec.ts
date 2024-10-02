import { Test, TestingModule } from '@nestjs/testing';
import { GrocerylistService } from './grocerylist.service';

describe('GrocerylistService', () => {
  let service: GrocerylistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrocerylistService],
    }).compile();

    service = module.get<GrocerylistService>(GrocerylistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
