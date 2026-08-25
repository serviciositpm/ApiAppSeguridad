import { Router } from "express";
import { validate } from "express-validation";
import { DocsController } from "../controllers/DocsController";
import { DocsValidation, TideValidation } from "../validators/docsValidators";
import { authMiddleware } from "../../../infrastructure/http/middlewares/authMiddleware";
import { asyncHandler } from "../../../shared/utils/asyncHandler";

export const buildDocsRoutes = (controller: DocsController): Router => {
  const router = Router();

  router.post(
    "/geturldocs",
    authMiddleware as any,
    validate(DocsValidation, {}, {}) as any,
    asyncHandler(controller.getUrlDocs)
  );

  router.get(
    "/gettide",
    authMiddleware as any,
    validate(TideValidation, {}, {}) as any,
    asyncHandler(controller.getTide)
  );

  router.get("/getcontainer", authMiddleware as any, asyncHandler(controller.getContainer));

  router.post(
    "/getdatadocs",
    authMiddleware as any,
    validate(DocsValidation, {}, {}) as any,
    asyncHandler(controller.getDataDocs)
  );

  return router;
};
