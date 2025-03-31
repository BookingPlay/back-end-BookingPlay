"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    constructor(message, statusCode, previousError) {
        super(message);
        this.statusCode = statusCode;
        this.previousError = previousError;
    }
    getStatusCode() {
        return this.statusCode;
    }
    getPrevious() {
        return this.previousError;
    }
}
exports.AppError = AppError;
//# sourceMappingURL=appError.js.map