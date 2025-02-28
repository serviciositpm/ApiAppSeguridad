import { Request, Response, Router } from "express";
import { getDataEmployeesController, getDataPeopleControllerSecurity } from "./controller";
import { validate } from "express-validation";
import { validatioToken } from "../../middlewares/validationMiddleware";
import { CodesHttpEnum } from "../../enums/codesHttpsEnums";
import { HttpResponse } from "../../utils/httpResponse";
import { PeopleValidation } from "./validations";

const routes = Router();

routes.get(
    "/getdatapeople", 
    validatioToken as any,
    validate(PeopleValidation,{},{}) as any ,
    async (req: Request, res: Response) => {
        try {
          const response = await getDataEmployeesController(req);
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
  "/getdatapeoplesecurity", 
  validatioToken as any,
  async (req: Request, res: Response) => {
      try {
        const response = await getDataPeopleControllerSecurity(req);
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




/* 
const routes = Router();    
routes.get('/list', validatioToken as any, async (req : Request, res:Response,nxt:NextFunction)=> {
	res.sendStatus(CodesHttpEnum.ok).json();
}) */