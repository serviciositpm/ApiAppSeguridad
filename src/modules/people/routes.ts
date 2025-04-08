import { Request, Response, Router } from "express";
import { getDataEmployeesController, getDataPeopleControllerSecurity, getDataSupplierController } from "./controller";
import { validate } from "express-validation";
import { validatioToken } from "../../middlewares/validationMiddleware";
import { CodesHttpEnum } from "../../enums/codesHttpsEnums";
import { HttpResponse } from "../../utils/httpResponse";
import { PeopleValidation ,CedrucQueryValidation} from "./validations";

const routes = Router();

routes.post(
    "/getdatapeople", 
    validatioToken as any,
    validate(PeopleValidation,{},{}) as any ,
    async (req: Request, res: Response) => {
        try {
          const response = await getDataEmployeesController(req);
          res.status(CodesHttpEnum.ok).json(response);
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
  "/getdatapeoplesecurity", 
  validatioToken as any,
  async (req: Request, res: Response) => {
      try {
        const response = await getDataPeopleControllerSecurity(req);
        res.status(CodesHttpEnum.ok).json(response);
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
  "/getdatasupplier",
  validatioToken as any,
  validate(CedrucQueryValidation, {}, {}) as any,
  async (req: Request, res: Response) => {
    try {
      const response = await getDataSupplierController(req);
      // Simula una respuesta
      res.status(CodesHttpEnum.ok).json(response);
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