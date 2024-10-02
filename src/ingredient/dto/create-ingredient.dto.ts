export class CreateIngredientDto {
  name: string;
  unit: string;
  amount: number;
  calories: number;
  carbohydrates: number;
  fat: number;
  protein: number;
  price?: number;
}
