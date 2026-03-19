import { asValue, AwilixContainer } from "awilix";
import { postgresDataSource } from "../infra/database/postgresDataSource";

export function registerDataSources(container: AwilixContainer): void {
  container.register("postgresDataSource", asValue(postgresDataSource));
}
