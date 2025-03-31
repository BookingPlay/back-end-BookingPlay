"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const typedi_1 = __importDefault(require("typedi"));
const controllers_1 = require("../controllers");
const validations_1 = require("./validations");
const storeUser_1 = require("./schemas/users/storeUser");
class UserRouter {
    static getRouter() {
        const controller = typedi_1.default.get(controllers_1.UserController);
        const router = (0, express_1.Router)();
        router.post("/users", validations_1.RouteValidator.validate(storeUser_1.storeUserValidator.rules()), controller.store);
        return router;
    }
}
exports.UserRouter = UserRouter;
//# sourceMappingURL=user.js.map