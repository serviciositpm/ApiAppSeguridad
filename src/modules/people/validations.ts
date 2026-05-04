
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

export const ParkingQueryValidation = {
  query: Joi.object({
    divitionCode: Joi.string().required().messages({
      "any.required": "El parámetro 'divitionCode' es obligatorio",
      "string.base": "El parámetro 'divitionCode' debe ser una cadena de texto",
    }),
    centerCode: Joi.string().required().messages({
      "any.required": "El parámetro 'centerCode' es obligatorio",
      "string.base": "El parámetro 'centerCode' debe ser una cadena de texto",
    }),
  }),
};

