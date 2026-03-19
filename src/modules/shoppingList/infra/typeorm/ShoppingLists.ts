import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "../../../user/infra/typeorm/Users";
import { Foods } from "../../../food/infra/typeorm/Foods";

@Entity({ name: "shopping_lists" })
export class ShoppingLists {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "float" })
  quantity_needed: number;

  @Column({ default: false })
  is_purchased: boolean;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Users, (user) => user.shopping_lists, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: Users;

  @ManyToOne(() => Foods, (food) => food.shopping_lists, { onDelete: "CASCADE" })
  @JoinColumn({ name: "food_id" })
  food: Foods;
}
