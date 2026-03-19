import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Users } from "../../../user/infra/typeorm/Users";
import { Foods } from "../../../food/infra/typeorm/Foods";

@Entity({ name: "user_inventories" })
export class UserInventories {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "float" })
  quantity_available: number;

  @Column({ type: "date", nullable: true })
  expiration_date?: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Users, (user) => user.user_inventories, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: Users;

  @ManyToOne(() => Foods, (food) => food.user_inventories, { onDelete: "CASCADE" })
  @JoinColumn({ name: "food_id" })
  food: Foods;
}
