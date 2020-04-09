import { SharedOptions, WatchedTaskList } from "./interfaces";
export default function getTasks(options: SharedOptions, taskPath: string, watch?: boolean): Promise<WatchedTaskList>;
