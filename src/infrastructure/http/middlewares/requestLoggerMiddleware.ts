import { NextFunction, Request, Response } from "express";
import { CreateLogUseCase } from "../../../application/use-cases/logs/CreateLogUseCase";

// A diferencia del index.ts original, este middleware NO guarda el header
// "authorization" ni el body crudo (podía contener contraseñas/tokens en
// texto plano dentro de MongoDB). Solo registra metadatos de la solicitud.
export const buildRequestLoggerMiddleware = (createLogUseCase: CreateLogUseCase) => {
  return async (req: Request, _res: Response, next: NextFunction) => {
    const { method, url, headers } = req;
    await createLogUseCase.execute("info", "Solicitud recibida", {
      method,
      url,
      userAgent: headers["user-agent"],
    });
    next();
  };
};
