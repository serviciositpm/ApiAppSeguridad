import { ILogRepository } from "../../../domain/repositories/ILogRepository";
import { LogEntry, LogLevel } from "../../../domain/entities/Log";

export class CreateLogUseCase {
  constructor(private readonly logRepository: ILogRepository) {}

  execute(level: LogLevel, message: string, meta?: Record<string, unknown>) {
    const entry: LogEntry = { level, message, meta };
    return this.logRepository.saveLog(entry);
  }
}
