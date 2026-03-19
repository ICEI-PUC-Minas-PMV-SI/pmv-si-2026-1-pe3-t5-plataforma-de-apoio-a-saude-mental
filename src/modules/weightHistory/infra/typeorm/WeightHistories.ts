import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "../../../user/infra/typeorm/Users";

@Entity({ name: "weight_histories" })
export class WeightHistories {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "float" })
  weight: number;

  @Column({ type: "float" })
  bmi: number;

  @CreateDateColumn()
  recorded_at: Date;

  @ManyToOne(() => Users, (user) => user.weight_histories, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: Users;
}
