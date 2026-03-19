import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Meals } from "../../../meal/infra/typeorm/Meals";
import { Foods } from "../../../food/infra/typeorm/Foods";

@Entity({ name: "meal_ingredients" })
export class MealIngredients {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "float" })
  quantity: number;

  @ManyToOne(() => Meals, (meal) => meal.meal_ingredients, { onDelete: "CASCADE" })
  @JoinColumn({ name: "meal_id" })
  meal: Meals;

  @ManyToOne(() => Foods, (food) => food.meal_ingredients, { onDelete: "CASCADE" })
  @JoinColumn({ name: "food_id" })
  food: Foods;
}
