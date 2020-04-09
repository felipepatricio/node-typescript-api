import { Pool, PoolClient } from "pg";
import { TaskList, WorkerOptions, WorkerPool, WorkerPoolOptions } from "./interfaces";
declare const allWorkerPools: Array<WorkerPool>;
export { allWorkerPools as _allWorkerPools };
export declare function runTaskList(options: WorkerPoolOptions, tasks: TaskList, pgPool: Pool): WorkerPool;
export declare const runTaskListOnce: (options: WorkerOptions, tasks: TaskList, client: PoolClient) => Promise<void>;
