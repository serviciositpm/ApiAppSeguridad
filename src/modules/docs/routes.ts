import { Request, Response, Router } from "express";
import { validatioToken } from "../../middlewares/validationMiddleware";
import { getContainerController, getDataDocsController, getDocsController, getTideController } from "./controller";
import { HttpResponse } from "../../utils/httpResponse";
import { CodesHttpEnum } from "../../enums/codesHttpsEnums";
import { DoscValidation, TideValidation } from "./validations";
import { validate } from "express-validation";


const routes = Router();

routes.post(
    "/geturldocs", 
    validatioToken as any,
    validate(DoscValidation,{},{}) as any ,
    async (req: Request, res: Response) => {
        try {
          const response = await getDocsController(req);
          res.status(response.code).json(response);
        } catch (error) {
          HttpResponse.fail(
            res,
            CodesHttpEnum.internalServerError,
            null,
            (error as any).toString()
        );
        }
      }
);
routes.get(
  "/gettide",
  validatioToken as any,
  validate(TideValidation, {}, {}) as any,
  async (req: Request, res: Response) => {
    try {
      const response = await getTideController(req);
      res.status(response.code).json(response);
    } catch (error) {
      HttpResponse.fail(
        res,
        CodesHttpEnum.internalServerError,
        null,
        (error as any).toString()
      );
    }
  }
);
routes.get(
  "/getcontainer",
  validatioToken as any,
  async (req: Request, res: Response) => {
    try {
      const response = await getContainerController(req);
      res.status(response.code).json(response);
    } catch (error) {
      HttpResponse.fail(
        res,
        CodesHttpEnum.internalServerError,
        null,
        (error as any).toString()
      );
    }
  }
);
routes.post(
  "/getdatadocs",
  validatioToken as any,
  validate(DoscValidation, {}, {}) as any,
  async (req: Request, res: Response) => {
    try {
      const response = await getDataDocsController(req);
      res.status(response.code).json(response);
    } catch (error) {
      HttpResponse.fail(
        res,
        CodesHttpEnum.internalServerError,
        null,
        (error as any).toString()
      );
    }
  }
);

export default routes;
