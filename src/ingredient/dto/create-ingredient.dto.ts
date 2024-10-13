export class CreateIngredientDto {
  name: string;
  defaultUnit: string;
  defaultAmount: number;
  servings: { amount: number; unit: string };
  calories: number;
  carbohydrates: number;
  fat: number;
  protein: number;
  price?: number;
}
