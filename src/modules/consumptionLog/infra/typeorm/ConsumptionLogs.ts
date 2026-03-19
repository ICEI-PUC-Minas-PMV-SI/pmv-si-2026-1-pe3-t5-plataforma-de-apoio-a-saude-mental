import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "../../../user/infra/typeorm/Users";
import { Meals } from "../../../meal/infra/typeorm/Meals";
import { Foods } from "../../../food/infra/typeorm/Foods";

@Entity({ name: "consumption_logs" })
export class ConsumptionLogs {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "float", nullable: true })
  quantity_consumed?: number;

  @CreateDateColumn()
  consumed_at: Date;

  @Column()
  meal_type: string;

  @ManyToOne(() => Users, (user) => user.consumption_logs, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: Users;

  @ManyToOne(() => Meals, (meal) => meal.consumption_logs, { onDelete: "SET NULL", nullable: true })
  @JoinColumn({ name: "meal_id" })
  meal?: Meals;

  @ManyToOne(() => Foods, { onDelete: "SET NULL", nullable: true })
  @JoinColumn({ name: "food_id" })
  food?: Foods;
}
