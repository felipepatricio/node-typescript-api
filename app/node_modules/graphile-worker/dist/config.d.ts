/**
 * Defaults to use for various options throughout the codebase, sourced from
 * environmental variables, cosmiconfig, and finally sensible defaults.
 */
interface WorkerDefaults {
    /**
     * How long to wait between polling for jobs.
     *
     * Note: this does NOT need to be short, because we use LISTEN/NOTIFY to be
     * notified when new jobs are added - this is just used for jobs scheduled in
     * the future, retried jobs, and in the case where LISTEN/NOTIFY fails for
     * whatever reason.
     */
    pollInterval: number;
    /**
     * Which PostgreSQL schema should Graphile Worker use? Defaults to 'graphile_worker'.
     */
    schema: string;
    /**
     * How many errors in a row can we get fetching a job before we raise a higher
     * exception?
     */
    maxContiguousErrors: number;
    /**
     * Number of jobs to run concurrently
     */
    concurrentJobs: number;
    /**
     * The maximum size of the PostgreSQL pool. Defaults to the node-postgres
     * default (10). Only useful when `connectionString` is given.
     */
    maxPoolSize: number;
}
export declare const defaults: WorkerDefaults;
export {};
