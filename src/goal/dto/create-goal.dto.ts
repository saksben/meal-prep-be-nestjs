export class CreateGoalDto {
  name: string;
  calories: number;
  carbohydrates: number;
  fat: number;
  protein: number;
  price?: number;
  userId: number;
}
