import express from "express";

import {
  authController,
  peopleController,
  docsController,
  logController,
  userADController,
  createLogUseCase,
} from "../../container";

import { buildAuthRoutes } from "../../presentation/http/routes/authRoutes";
import { buildPeopleRoutes } from "../../presentation/http/routes/peopleRoutes";
import { buildDocsRoutes } from "../../presentation/http/routes/docsRoutes";
import { buildLogsRoutes } from "../../presentation/http/routes/logsRoutes";
import { buildUserAdRoutes } from "../../presentation/http/routes/userAdRoutes";
import { healthRoutes } from "../../presentation/http/routes/healthRoutes";

import { buildRequestLoggerMiddleware } from "./middlewares/requestLoggerMiddleware";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware";

const PREFIX = "/api-securityapp-v1";

export function createServer() {
  const app = express();

  app.use(express.json());
  app.use(healthRoutes);
  app.use(buildRequestLoggerMiddleware(createLogUseCase));

  app.use(`${PREFIX}/auth`, buildAuthRoutes(authController));
  app.use(`${PREFIX}/people`, buildPeopleRoutes(peopleController));
  app.use(`${PREFIX}/docs`, buildDocsRoutes(docsController));
  app.use(`${PREFIX}/logs`, buildLogsRoutes(logController));
  app.use(`${PREFIX}/advalidation`, buildUserAdRoutes(userADController));

  // Debe registrarse al final: es el manejador de errores centralizado.
  app.use(errorHandlerMiddleware as any);

  return app;
}
