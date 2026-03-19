import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MealPlans } from "../../../mealPlan/infra/typeorm/MealPlans";
import { Meals } from "../../../meal/infra/typeorm/Meals";

@Entity({ name: "meal_plan_items" })
export class MealPlanItems {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "int" })
  day_of_week: number;

  @Column()
  meal_type: string;

  @ManyToOne(() => MealPlans, (mp) => mp.meal_plan_items, { onDelete: "CASCADE" })
  @JoinColumn({ name: "meal_plan_id" })
  meal_plan: MealPlans;

  @ManyToOne(() => Meals, (meal) => meal.meal_plan_items, { onDelete: "CASCADE" })
  @JoinColumn({ name: "meal_id" })
  meal: Meals;
}
