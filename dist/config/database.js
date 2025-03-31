"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeORMConnection = void 0;
const path = __importStar(require("path"));
const typeorm_1 = require("typeorm");
const typedi_1 = require("typedi");
const envs_1 = require("./envs");
let TypeORMConnection = class TypeORMConnection {
    constructor() {
        this._instance = [];
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const entitiesDir = path.join("dist", "api", "database", "entities", "*.js");
            const migrationsDir = path.join("dist", "api", "database", "migrations", "*.js");
            this._instance = yield (0, typeorm_1.createConnections)([
                {
                    type: "postgres",
                    host: envs_1.DatabaseEnvs.database.host,
                    port: parseInt(envs_1.DatabaseEnvs.database.port),
                    username: envs_1.DatabaseEnvs.database.username,
                    password: envs_1.DatabaseEnvs.database.password,
                    database: envs_1.DatabaseEnvs.database.name,
                    logging: false,
                    entities: [entitiesDir],
                    migrations: [migrationsDir],
                },
            ]);
            yield this.runMigrations();
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(this.instance.map((instance) => instance.close()));
        });
    }
    get instance() {
        return this._instance;
    }
    runMigrations() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                for (const connection of this._instance) {
                    yield connection.runMigrations();
                    console.log("Migrations executed successfully for connection:", connection.name);
                }
            }
            catch (error) {
                console.error("Error executing migrations:", error);
            }
        });
    }
};
exports.TypeORMConnection = TypeORMConnection;
exports.TypeORMConnection = TypeORMConnection = __decorate([
    (0, typedi_1.Service)()
], TypeORMConnection);
//# sourceMappingURL=database.js.map