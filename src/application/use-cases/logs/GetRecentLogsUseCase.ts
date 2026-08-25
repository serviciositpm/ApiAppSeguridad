import { ILogRepository } from "../../../domain/repositories/ILogRepository";

export class GetRecentLogsUseCase {
  constructor(private readonly logRepository: ILogRepository) {}

  execute(limit: number = 100) {
    return this.logRepository.getLogs(limit);
  }
}
