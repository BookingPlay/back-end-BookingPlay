"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseEnvs = void 0;
const environments_1 = require("./enums/exeptions/enums/environments");
class DatabaseEnvs {
}
exports.DatabaseEnvs = DatabaseEnvs;
DatabaseEnvs.environment = process.env.NODE_ENV || environments_1.Environments.DEVELOP;
DatabaseEnvs.database = {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
};
//# sourceMappingURL=databaseEnv.js.map