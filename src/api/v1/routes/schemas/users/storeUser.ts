import * as Joi from "joi";
import { SchemaValidator } from "../../validations";

export class storeUserValidator {
  static rules(): SchemaValidator {
    return {
      body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string().min(10).max(11),
        password: Joi.string().required(),
      }),
    };
  }
}
