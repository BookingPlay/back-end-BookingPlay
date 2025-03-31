"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "postgres.railway.internal",
    port: 5432,
    username: "postgres",
    password: "RFDTkNrYEzVJabJQkYPLIydeYKneixhI",
    database: "railway",
    entities: ["src/api/v1/entities/*.ts"],
    synchronize: true,
});
//# sourceMappingURL=data-source.js.map