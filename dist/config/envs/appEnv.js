"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppEnvs = void 0;
const environments_1 = require("./enums/exeptions/enums/environments");
class AppEnvs {
}
exports.AppEnvs = AppEnvs;
AppEnvs.environment = process.env.NODE_ENV || environments_1.Environments.DEVELOP;
AppEnvs.server = {
    port: Number(process.env.PORT || "3333"),
};
AppEnvs.services = {
    clientSecret: process.env.CLIENT_SECRET || "",
};
//# sourceMappingURL=appEnv.js.map