export class CreateMealDto {
  name: string;
  description: string;
  ingredients: number[];
  recipe: string;
  servings: number;
  recipeLink?: string;
  filters: number[];
}
