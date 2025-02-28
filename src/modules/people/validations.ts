
import { Joi } from "express-validation";
import { IPeople } from "../../interfaces/People.interface";

export const PeopleValidation = {
  body: Joi.object<IPeople>({
    options: Joi.string().required(),
    identification: Joi.string().required(),
  }),
};
