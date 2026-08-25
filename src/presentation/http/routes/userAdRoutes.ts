import { Router } from "express";
import { UserADController } from "../controllers/UserADController";
import { asyncHandler } from "../../../shared/utils/asyncHandler";

export const buildUserAdRoutes = (controller: UserADController): Router => {
  const router = Router();
  router.post("/user", asyncHandler(controller.getUser));
  return router;
};
