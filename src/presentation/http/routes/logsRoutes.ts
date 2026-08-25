import { Router } from "express";
import { LogController } from "../controllers/LogController";
import { asyncHandler } from "../../../shared/utils/asyncHandler";

export const buildLogsRoutes = (controller: LogController): Router => {
  const router = Router();
  router.get("/logs", asyncHandler(controller.fetchLogs));
  router.post("/logs", asyncHandler(controller.createLog));
  return router;
};
