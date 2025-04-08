
import { Joi } from "express-validation";
import { IPeople } from "../../interfaces/People.interface";

export const PeopleValidation = {
  body: Joi.object<IPeople>({
    options: Joi.string().required(),
    identification: Joi.string().required(),
  }),
};

export const CedrucQueryValidation = {
  query: Joi.object({
    cedruc: Joi.string().required().messages({
      "any.required": "El parámetro 'cedruc' es obligatorio",
      "string.base": "El parámetro 'cedruc' debe ser una cadena de texto",
    }),
  }),
};
