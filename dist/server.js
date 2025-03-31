"use strict";
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
exports.Server = void 0;
const config_1 = require("./config");
class Server {
    static init(app) {
        return __awaiter(this, void 0, void 0, function* () {
            app.listen(config_1.AppEnvs.server.port, () => {
                console.info(`server started on port ${config_1.AppEnvs.server.port} Enviroment:${config_1.AppEnvs.environment}`);
            });
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map