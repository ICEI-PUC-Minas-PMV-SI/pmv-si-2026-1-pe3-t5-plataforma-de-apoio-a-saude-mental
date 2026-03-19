import { DataSource } from "typeorm";

const isProd = process.env.NODE_ENV === "prod";

export const postgresDataSource = new DataSource({
  type: "postgres",
  synchronize: false,
  logging: false,
  migrationsTableName: "migrations",
  entities: isProd
    ? ["dist/modules/**/infra/typeorm/*.js"]
    : ["src/modules/**/infra/typeorm/*.ts"],
  migrations: isProd
    ? ["dist/shared/infra/database/migrations/*.js"]
    : ["src/shared/infra/database/migrations/*.ts"],
  replication: {
    master: {
      host: process.env.POSTGRES_MASTER_HOST,
      port: Number(process.env.POSTGRES_MASTER_PORT ?? 5432),
      username: process.env.POSTGRES_DATABASE_USER,
      password: process.env.POSTGRES_DATABASE_PASSWORD,
      database: process.env.POSTGRES_DATABASE_NAME,
    },
    slaves: [
      {
        host: process.env.POSTGRES_SLAVE_HOST,
        port: Number(process.env.POSTGRES_SLAVE_PORT ?? 5432),
        username: process.env.POSTGRES_DATABASE_USER,
        password: process.env.POSTGRES_DATABASE_PASSWORD,
        database: process.env.POSTGRES_DATABASE_NAME,
      },
    ],
  },
});
