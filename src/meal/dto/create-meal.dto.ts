export class CreateMealDto {
  name: string;
  description: string;
  recipe: string;
  servings: number;
  recipeLink?: string;
  ingredients: CreateMealIngredientDto[];
  // filters?: number[];
}

export class CreateMealIngredientDto {
  ingredientId: number;
}
