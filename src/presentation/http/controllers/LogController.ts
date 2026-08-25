import { Request, Response } from "express";
import { CreateLogUseCase } from "../../../application/use-cases/logs/CreateLogUseCase";
import { GetRecentLogsUseCase } from "../../../application/use-cases/logs/GetRecentLogsUseCase";
import { CodesHttpEnum } from "../../../shared/enums/codesHttpsEnums";

export class LogController {
  constructor(
    private readonly createLogUseCase: CreateLogUseCase,
    private readonly getRecentLogsUseCase: GetRecentLogsUseCase
  ) {}

  fetchLogs = async (req: Request, res: Response) => {
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 100;
    const logs = await this.getRecentLogsUseCase.execute(limit);
    res.status(CodesHttpEnum.ok).json(logs);
  };

  createLog = async (req: Request, res: Response) => {
    const { level, message, meta } = req.body;
    if (!level || !message) {
      return res.status(CodesHttpEnum.badRequest).json({ message: "Faltan datos requeridos: level y message" });
    }
    await this.createLogUseCase.execute(level, message, meta);
    res.status(CodesHttpEnum.created).json({ message: "Log registrado correctamente" });
  };
}
