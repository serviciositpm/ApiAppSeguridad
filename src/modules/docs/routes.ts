import { Request, Response, Router } from "express";
import { validatioToken } from "../../middlewares/validationMiddleware";
import { getDocsController } from "./controller";
import { HttpResponse } from "../../utils/httpResponse";
import { CodesHttpEnum } from "../../enums/codesHttpsEnums";



const routes = Router();

routes.post(
    "/geturldocs", 
    validatioToken as any,
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

export default routes;
