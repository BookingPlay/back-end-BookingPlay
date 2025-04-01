import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { getV1Routes } from "./api/v1/routes/index";

const app = express();

app.use(express.json());

app.use("/api/v1", getV1Routes());

app.listen(3333, () => {
    console.log("Aplicacao rodando em http://localhost:3333");
});
