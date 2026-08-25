import { Router } from "express";
import { validate } from "express-validation";
import { PeopleController } from "../controllers/PeopleController";
import { PeopleValidation, CedrucQueryValidation, ParkingQueryValidation } from "../validators/peopleValidators";
import { authMiddleware } from "../../../infrastructure/http/middlewares/authMiddleware";
import { asyncHandler } from "../../../shared/utils/asyncHandler";

export const buildPeopleRoutes = (controller: PeopleController): Router => {
  const router = Router();

  router.post(
    "/getdatapeople",
    authMiddleware as any,
    validate(PeopleValidation, {}, {}) as any,
    asyncHandler(controller.getDataEmployees)
  );

  router.post(
    "/getdatapeoplesecurity",
    authMiddleware as any,
    asyncHandler(controller.getDataPeopleSecurity)
  );

  router.get(
    "/getdatasupplier",
    authMiddleware as any,
    validate(CedrucQueryValidation, {}, {}) as any,
    asyncHandler(controller.getDataSupplier)
  );

  router.get(
    "/getdataparking",
    authMiddleware as any,
    validate(ParkingQueryValidation, {}, {}) as any,
    asyncHandler(controller.getDataParking)
  );

  return router;
};
