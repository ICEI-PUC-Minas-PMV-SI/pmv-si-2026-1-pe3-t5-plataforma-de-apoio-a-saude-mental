import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MealIngredients } from "../../../mealIngredient/infra/typeorm/MealIngredients";
import { UserInventories } from "../../../userInventory/infra/typeorm/UserInventories";
import { ShoppingLists } from "../../../shoppingList/infra/typeorm/ShoppingLists";

@Entity({ name: "foods" })
export class Foods {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ type: "float" })
  serving_size: number;

  @Column()
  serving_unit: string;

  @Column({ type: "float" })
  calories: number;

  @Column({ type: "float" })
  proteins: number;

  @Column({ type: "float" })
  carbs: number;

  @Column({ type: "float" })
  fats: number;

  @OneToMany(() => MealIngredients, (mi) => mi.food)
  meal_ingredients: MealIngredients[];

  @OneToMany(() => UserInventories, (ui) => ui.food)
  user_inventories: UserInventories[];

  @OneToMany(() => ShoppingLists, (sl) => sl.food)
  shopping_lists: ShoppingLists[];
}
