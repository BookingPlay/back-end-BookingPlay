import express, { Express, json } from "express";
import "express-async-errors";
import cors from "cors";
import Container from "typedi";
import { TypeORMConnection } from "./config/database";
import { AppRouters } from "./config/routers";

export default class App {
  static async build() {
    const app: Express = express();

    const database = Container.get(TypeORMConnection);

    await database.connect();

    app.use(json());

    console.info("Loading cors");
    app.use(cors());

    AppRouters.load(app);

    return app;
  }
}
