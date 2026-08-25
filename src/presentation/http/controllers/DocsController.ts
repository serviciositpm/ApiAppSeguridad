import { Request, Response } from "express";
import { GetUrlDocsUseCase } from "../../../application/use-cases/docs/GetUrlDocsUseCase";
import { GetTideUseCase } from "../../../application/use-cases/docs/GetTideUseCase";
import { GetContainerUseCase } from "../../../application/use-cases/docs/GetContainerUseCase";
import { GetDataDocsUseCase } from "../../../application/use-cases/docs/GetDataDocsUseCase";
import { HttpResponse } from "../../../shared/utils/httpResponse";
import { CodesHttpEnum } from "../../../shared/enums/codesHttpsEnums";

export class DocsController {
  constructor(
    private readonly getUrlDocsUseCase: GetUrlDocsUseCase,
    private readonly getTideUseCase: GetTideUseCase,
    private readonly getContainerUseCase: GetContainerUseCase,
    private readonly getDataDocsUseCase: GetDataDocsUseCase
  ) {}

  getUrlDocs = async (req: Request, res: Response) => {
    const { opcion, nrodoc } = req.body;
    const data = await this.getUrlDocsUseCase.execute(opcion, nrodoc);
    res.status(CodesHttpEnum.ok).json(HttpResponse.response(CodesHttpEnum.ok, data, "Data Docs"));
  };

  getTide = async (req: Request, res: Response) => {
    const anio = parseInt(req.query.anio as string, 10);
    const data = await this.getTideUseCase.execute(anio);
    res.status(CodesHttpEnum.ok).json(HttpResponse.response(CodesHttpEnum.ok, data, "Data Tide (Aguaje)"));
  };

  getContainer = async (_req: Request, res: Response) => {
    const data = await this.getContainerUseCase.execute();
    res.status(CodesHttpEnum.ok).json(HttpResponse.response(CodesHttpEnum.ok, data, "Data Container"));
  };

  getDataDocs = async (req: Request, res: Response) => {
    const { opcion, nrodoc } = req.body;
    const data = await this.getDataDocsUseCase.execute(opcion, nrodoc);
    res.status(CodesHttpEnum.ok).json(HttpResponse.response(CodesHttpEnum.ok, data, "Data Docs"));
  };
}
