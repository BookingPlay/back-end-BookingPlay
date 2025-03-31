import { Router, NextFunction, Request, Response, Express } from "express";
import * as swaggerUi from "swagger-ui-express";
import * as YAMLJS from "yamljs";
import { getV1Routes } from "../api/v1/routes";
import { BusinessError } from "./exceptions";
import { UnprocessedEntityError } from "./exceptions/unprocessedEntityError";
import { AppError } from "./exceptions/appError";
interface dataInterface {
  message: string;
  internalCode: number | undefined;
}
export class AppRouters {
  static load(app: Express) {
    try {
      const router = Router();

      router.use("/api", getV1Routes());

      const swaggerDocument = YAMLJS.load("./swagger.yml");

      router.use("^/$", (req, res) => {
        return res.redirect("/api-docs");
      });
      router.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocument)
      );

      app.use(router);
    } catch (error) {
      console.log(error);
    }
  }
}
