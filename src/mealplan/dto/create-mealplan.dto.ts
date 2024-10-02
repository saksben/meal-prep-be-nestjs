export class CreateMealPlanDto {
  name: string;
  userId: number;
  frequency: string;
  goalId?: number;
  meals: number[];
}
