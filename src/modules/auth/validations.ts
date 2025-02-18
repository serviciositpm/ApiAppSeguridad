import { ILogin } from "../../interfaces/Auth.interface";
import { Joi } from "express-validation";

export const LoginValidation = {
  body: Joi.object<ILogin>({
    username: Joi.string().required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
  }),
};
