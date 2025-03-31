"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthenticatedError = void 0;
const index_1 = require("./index");
class UnauthenticatedError extends index_1.AppError {
    constructor(message = "Unauthorized.") {
        super(message, 401);
    }
}
exports.UnauthenticatedError = UnauthenticatedError;
//# sourceMappingURL=unauthenticatedError.js.map