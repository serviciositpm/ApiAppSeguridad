import { ILogRepository } from "../../domain/repositories/ILogRepository";
import { LogEntry } from "../../domain/entities/Log";
import LogModel from "../database/mongo/LogModel";

export class MongoLogRepository implements ILogRepository {
  async saveLog(entry: LogEntry): Promise<void> {
    const log = new LogModel(entry);
    await log.save();
  }

  async getLogs(limit: number = 100): Promise<LogEntry[]> {
    return LogModel.find().sort({ timestamp: -1 }).limit(limit);
  }
}
