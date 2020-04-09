import { TaskList, WithPgClient, Worker, WorkerOptions } from "./interfaces";
export declare function makeNewWorker(options: WorkerOptions, tasks: TaskList, withPgClient: WithPgClient, continuous?: boolean): Worker;
