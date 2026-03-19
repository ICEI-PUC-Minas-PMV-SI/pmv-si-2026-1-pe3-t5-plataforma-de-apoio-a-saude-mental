import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "../../../user/infra/typeorm/Users";
import { MealPlanItems } from "../../../mealPlanItem/infra/typeorm/MealPlanItems";

@Entity({ name: "meal_plans" })
export class MealPlans {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  start_date: Date;

  @Column({ type: "date" })
  end_date: Date;

  @ManyToOne(() => Users, (user) => user.meal_plans, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: Users;

  @OneToMany(() => MealPlanItems, (mpi) => mpi.meal_plan)
  meal_plan_items: MealPlanItems[];
}
