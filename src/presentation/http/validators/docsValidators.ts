import { Joi } from "express-validation";

export const DocsValidation = {
  body: Joi.object({
    opcion: Joi.string().required(),
    nrodoc: Joi.string()
      .regex(/^(?:[A-Za-z]\d+|\d{3,30})$/)
      .required()
      .messages({
        "string.pattern.base":
          "El documento debe comenzar con una letra seguida de números o ser solo números (mínimo 3 dígitos)",
      }),
  }),
};

export const TideValidation = {
  query: Joi.object({
    anio: Joi.string().required().messages({
      "any.required": "El parámetro 'anio' es obligatorio",
      "number.base": "El parámetro 'anio' debe ser un número",
    }),
  }),
};
