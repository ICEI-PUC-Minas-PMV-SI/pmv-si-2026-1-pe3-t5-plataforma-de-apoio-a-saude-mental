import { DataSource } from "typeorm";
import { container } from "../container";

export async function startEnvironment(): Promise<void> {
    const postgresDataSource =
        container.resolve<DataSource>("postgresDataSource");

    await postgresDataSource.initialize();
}
