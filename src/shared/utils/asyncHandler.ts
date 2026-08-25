import { NextFunction, Request, Response } from "express";

// Envuelve handlers async para que cualquier excepción (incluyendo AppError
// lanzado desde los casos de uso) llegue al errorHandlerMiddleware central,
// en vez de repetir try/catch en cada ruta como en el proyecto original.
export const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
