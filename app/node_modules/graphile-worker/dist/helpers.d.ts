import { Pool, PoolClient } from "pg";
import { Job, JobHelpers, SharedOptions, TaskSpec, WithPgClient, WorkerSharedOptions } from "./interfaces";
import { Logger } from "./logger";
export declare function makeAddJob(options: WorkerSharedOptions, withPgClient: WithPgClient): (identifier: string, payload?: unknown, spec?: TaskSpec) => Promise<Job>;
export declare function makeJobHelpers(options: SharedOptions, job: Job, { withPgClient, logger: overrideLogger, }: {
    withPgClient: WithPgClient;
    logger?: Logger;
}): JobHelpers;
export declare function makeWithPgClientFromPool(pgPool: Pool): <T>(callback: (pgClient: PoolClient) => Promise<T>) => Promise<T>;
export declare function makeWithPgClientFromClient(pgClient: PoolClient): <T>(callback: (pgClient: PoolClient) => Promise<T>) => Promise<T>;
