import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MealIngredients } from "../../../mealIngredient/infra/typeorm/MealIngredients";
import { MealPlanItems } from "../../../mealPlanItem/infra/typeorm/MealPlanItems";
import { ConsumptionLogs } from "../../../consumptionLog/infra/typeorm/ConsumptionLogs";

@Entity({ name: "meals" })
export class Meals {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column({ default: "MEDIUM" })
  complexity: string;

  @Column({ type: "int" })
  preparation_time: number;

  @Column({ type: "float" })
  total_calories: number;

  @Column({ type: "float" })
  total_proteins: number;

  @Column({ type: "float" })
  total_carbs: number;

  @Column({ type: "float" })
  total_fats: number;

  @OneToMany(() => MealIngredients, (mi) => mi.meal)
  meal_ingredients: MealIngredients[];

  @OneToMany(() => MealPlanItems, (mpi) => mpi.meal)
  meal_plan_items: MealPlanItems[];

  @OneToMany(() => ConsumptionLogs, (cl) => cl.meal)
  consumption_logs: ConsumptionLogs[];
}
