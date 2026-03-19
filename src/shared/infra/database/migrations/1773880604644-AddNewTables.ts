import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewTables1773880604644 implements MigrationInterface {
    name = 'AddNewTables1773880604644'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "weight_histories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "weight" double precision NOT NULL, "bmi" double precision NOT NULL, "recorded_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" uuid, CONSTRAINT "PK_c5d99227866d5c0bd4cd99ec725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shopping_lists" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity_needed" double precision NOT NULL, "is_purchased" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" uuid, "food_id" uuid, CONSTRAINT "PK_9289ace7dd5e768d65290f3f9de" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "foods" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "serving_size" double precision NOT NULL, "serving_unit" character varying NOT NULL, "calories" double precision NOT NULL, "proteins" double precision NOT NULL, "carbs" double precision NOT NULL, "fats" double precision NOT NULL, CONSTRAINT "PK_0cc83421325632f61fa27a52b59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "meal_ingredients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" double precision NOT NULL, "meal_id" uuid, "food_id" uuid, CONSTRAINT "PK_d74c701d219b7fb9704f63b4f2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "consumption_logs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity_consumed" double precision, "consumed_at" TIMESTAMP NOT NULL DEFAULT now(), "meal_type" character varying NOT NULL, "user_id" uuid, "meal_id" uuid, "food_id" uuid, CONSTRAINT "PK_8360424214f68f740bffa472251" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "meals" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" text, "complexity" character varying NOT NULL DEFAULT 'MEDIUM', "preparation_time" integer NOT NULL, "total_calories" double precision NOT NULL, "total_proteins" double precision NOT NULL, "total_carbs" double precision NOT NULL, "total_fats" double precision NOT NULL, CONSTRAINT "PK_e6f830ac9b463433b58ad6f1a59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "meal_plan_items" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "day_of_week" integer NOT NULL, "meal_type" character varying NOT NULL, "meal_plan_id" uuid, "meal_id" uuid, CONSTRAINT "PK_0e5334892bf0438597bb4a8e58e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "meal_plans" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "start_date" date NOT NULL, "end_date" date NOT NULL, "user_id" uuid, CONSTRAINT "PK_6270d3206d074e2a2520f8d0a0b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password_hash" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'USER', "age" integer, "height" double precision, "goal" character varying, "dietary_preferences" jsonb, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_inventories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity_available" double precision NOT NULL, "expiration_date" date, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" uuid, "food_id" uuid, CONSTRAINT "PK_3f557ebb7bccc870fb6b201087d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "weight_histories" ADD CONSTRAINT "FK_04bc988ebfae103f1f84afe99ca" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shopping_lists" ADD CONSTRAINT "FK_1851ac0f1c24464395dbb4df7b7" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shopping_lists" ADD CONSTRAINT "FK_f09264e8585e6a05228c5e51dd1" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meal_ingredients" ADD CONSTRAINT "FK_75a8ec6f2533cdc8788a26a9508" FOREIGN KEY ("meal_id") REFERENCES "meals"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meal_ingredients" ADD CONSTRAINT "FK_a2657d8521df0d34c2f8a4be890" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "consumption_logs" ADD CONSTRAINT "FK_c0b8dea9e4a48770da55b28c6fa" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "consumption_logs" ADD CONSTRAINT "FK_126913f6a8312ced585726643ef" FOREIGN KEY ("meal_id") REFERENCES "meals"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "consumption_logs" ADD CONSTRAINT "FK_81b574537a6c11df592b90656b5" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meal_plan_items" ADD CONSTRAINT "FK_eea2b55fcd4567872f94d2ec2e7" FOREIGN KEY ("meal_plan_id") REFERENCES "meal_plans"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meal_plan_items" ADD CONSTRAINT "FK_8bd47bacc8519e7db3204f5f6a6" FOREIGN KEY ("meal_id") REFERENCES "meals"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meal_plans" ADD CONSTRAINT "FK_a94a25c51cc9b60a3c542c98986" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_inventories" ADD CONSTRAINT "FK_fd03a1bde29a78b9e5d93b71326" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_inventories" ADD CONSTRAINT "FK_675237549743467adf7681bc04f" FOREIGN KEY ("food_id") REFERENCES "foods"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_inventories" DROP CONSTRAINT "FK_675237549743467adf7681bc04f"`);
        await queryRunner.query(`ALTER TABLE "user_inventories" DROP CONSTRAINT "FK_fd03a1bde29a78b9e5d93b71326"`);
        await queryRunner.query(`ALTER TABLE "meal_plans" DROP CONSTRAINT "FK_a94a25c51cc9b60a3c542c98986"`);
        await queryRunner.query(`ALTER TABLE "meal_plan_items" DROP CONSTRAINT "FK_8bd47bacc8519e7db3204f5f6a6"`);
        await queryRunner.query(`ALTER TABLE "meal_plan_items" DROP CONSTRAINT "FK_eea2b55fcd4567872f94d2ec2e7"`);
        await queryRunner.query(`ALTER TABLE "consumption_logs" DROP CONSTRAINT "FK_81b574537a6c11df592b90656b5"`);
        await queryRunner.query(`ALTER TABLE "consumption_logs" DROP CONSTRAINT "FK_126913f6a8312ced585726643ef"`);
        await queryRunner.query(`ALTER TABLE "consumption_logs" DROP CONSTRAINT "FK_c0b8dea9e4a48770da55b28c6fa"`);
        await queryRunner.query(`ALTER TABLE "meal_ingredients" DROP CONSTRAINT "FK_a2657d8521df0d34c2f8a4be890"`);
        await queryRunner.query(`ALTER TABLE "meal_ingredients" DROP CONSTRAINT "FK_75a8ec6f2533cdc8788a26a9508"`);
        await queryRunner.query(`ALTER TABLE "shopping_lists" DROP CONSTRAINT "FK_f09264e8585e6a05228c5e51dd1"`);
        await queryRunner.query(`ALTER TABLE "shopping_lists" DROP CONSTRAINT "FK_1851ac0f1c24464395dbb4df7b7"`);
        await queryRunner.query(`ALTER TABLE "weight_histories" DROP CONSTRAINT "FK_04bc988ebfae103f1f84afe99ca"`);
        await queryRunner.query(`DROP TABLE "user_inventories"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "meal_plans"`);
        await queryRunner.query(`DROP TABLE "meal_plan_items"`);
        await queryRunner.query(`DROP TABLE "meals"`);
        await queryRunner.query(`DROP TABLE "consumption_logs"`);
        await queryRunner.query(`DROP TABLE "meal_ingredients"`);
        await queryRunner.query(`DROP TABLE "foods"`);
        await queryRunner.query(`DROP TABLE "shopping_lists"`);
        await queryRunner.query(`DROP TABLE "weight_histories"`);
    }

}
