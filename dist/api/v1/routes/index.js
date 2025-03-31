"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getV1Routes = void 0;
const express_1 = require("express");
const user_1 = require("./user");
const getV1Routes = () => {
    const router = (0, express_1.Router)();
    const routers = [user_1.UserRouter];
    routers.forEach((routerClass) => {
        router.use(routerClass.getRouter());
    });
    return router;
};
exports.getV1Routes = getV1Routes;
//# sourceMappingURL=index.js.map