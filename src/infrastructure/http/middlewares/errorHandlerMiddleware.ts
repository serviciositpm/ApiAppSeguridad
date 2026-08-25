import { NextFunction, Request, Response } from "express";
import { ValidationError } from "express-validation";
import { AppError } from "../../../domain/errors/AppError";
import { CodesHttpEnum } from "../../../shared/enums/codesHttpsEnums";

// Manejador de errores centralizado: traduce errores de dominio (AppError)
// y de validación (Joi/express-validation) a respuestas HTTP consistentes.
export const errorHandlerMiddleware = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ code: err.statusCode, message: err.message });
  }
  console.error("Error no controlado:", err);
  return res.status(CodesHttpEnum.internalServerError).json({
    code: CodesHttpEnum.internalServerError,
    message: "Ocurrió un error inesperado",
  });
};
