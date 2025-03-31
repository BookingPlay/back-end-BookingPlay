"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessError = void 0;
const index_1 = require("./index");
class BusinessError extends index_1.AppError {
    constructor(message, appInternalCode) {
        super(message, 400);
        this.appInternalCode = appInternalCode;
    }
    getAppInternalCode() {
        return this.appInternalCode;
    }
}
exports.BusinessError = BusinessError;
//# sourceMappingURL=bussinessError.js.map