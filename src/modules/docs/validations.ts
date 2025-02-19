import { Joi } from "express-validation";
import { IDocs } from "../../interfaces/Docs.interface";



export const DoscValidation = {
  body: Joi.object<IDocs>({
    opcion: Joi.string().required(),
    nrodoc: Joi.string()
      .regex(/^\d{3,30}$/)
      .required(),
  }),
};
