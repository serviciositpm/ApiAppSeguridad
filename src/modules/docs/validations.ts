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
export  const TideValidation = {
  query: Joi.object({
    anio: Joi.string().required().messages({
      "any.required": "El parámetro 'anio' es obligatorio",
      "number.base": "El parámetro 'anio' debe ser una número",
    }),
  }),
};