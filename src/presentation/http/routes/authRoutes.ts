import { Router } from "express";
import { validate } from "express-validation";
import { AuthController } from "../controllers/AuthController";
import { LoginValidation } from "../validators/authValidators";
import { asyncHandler } from "../../../shared/utils/asyncHandler";

export const buildAuthRoutes = (controller: AuthController): Router => {
  const router = Router();
  router.post(
    "/validateuser",
    validate(LoginValidation, {}, {}) as any,
    asyncHandler(controller.validateUser)
  );
  return router;
};
