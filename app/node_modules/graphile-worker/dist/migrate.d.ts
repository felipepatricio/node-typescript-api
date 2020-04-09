import { PoolClient } from "pg";
import { WorkerSharedOptions } from "./interfaces";
export declare function migrate(options: WorkerSharedOptions, client: PoolClient): Promise<void>;
