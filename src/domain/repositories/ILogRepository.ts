import { LogEntry } from "../entities/Log";

export interface ILogRepository {
  saveLog(entry: LogEntry): Promise<void>;
  getLogs(limit: number): Promise<LogEntry[]>;
}
