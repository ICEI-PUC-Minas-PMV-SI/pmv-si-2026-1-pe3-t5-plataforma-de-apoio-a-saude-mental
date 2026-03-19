import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { WeightHistories } from "../../../weightHistory/infra/typeorm/WeightHistories";
import { UserInventories } from "../../../userInventory/infra/typeorm/UserInventories";
import { MealPlans } from "../../../mealPlan/infra/typeorm/MealPlans";
import { ShoppingLists } from "../../../shoppingList/infra/typeorm/ShoppingLists";
import { ConsumptionLogs } from "../../../consumptionLog/infra/typeorm/ConsumptionLogs";

@Entity({ name: "users" })
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password_hash: string;

  @Column({ default: "USER" })
  role: string;

  @Column({ type: "int", nullable: true })
  age?: number;

  @Column({ type: "float", nullable: true })
  height?: number;

  @Column({ nullable: true })
  goal?: string;

  @Column({ type: "jsonb", nullable: true })
  dietary_preferences?: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => WeightHistories, (wh) => wh.user)
  weight_histories: WeightHistories[];

  @OneToMany(() => UserInventories, (ui) => ui.user)
  user_inventories: UserInventories[];

  @OneToMany(() => MealPlans, (mp) => mp.user)
  meal_plans: MealPlans[];

  @OneToMany(() => ShoppingLists, (sl) => sl.user)
  shopping_lists: ShoppingLists[];

  @OneToMany(() => ConsumptionLogs, (cl) => cl.user)
  consumption_logs: ConsumptionLogs[];
}
