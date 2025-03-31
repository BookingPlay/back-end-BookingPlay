"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Carrega as variáveis do .env
const express_1 = __importDefault(require("express"));
const index_1 = require("./api/v1/routes/index");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1", (0, index_1.getV1Routes)());
app.listen(3333, () => {
    console.log("Aplicacao rodando em http://localhost:3333");
});
//# sourceMappingURL=index.js.map