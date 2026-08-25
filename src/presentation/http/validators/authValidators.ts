import { Joi } from "express-validation";

export const LoginValidation = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
  }),
};
