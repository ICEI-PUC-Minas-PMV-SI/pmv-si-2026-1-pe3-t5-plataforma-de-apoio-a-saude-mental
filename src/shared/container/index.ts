import { createContainer } from "awilix";
import { registerDataSources } from "./registerDataSource";

const container = createContainer({ injectionMode: "CLASSIC" });
registerDataSources(container);

export { container };
