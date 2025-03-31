"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseError = void 0;
const appError_1 = require("./appError");
class DatabaseError extends appError_1.AppError {
    constructor(message, previousError) {
        super(message, 500, previousError);
    }
}
exports.DatabaseError = DatabaseError;
//# sourceMappingURL=dataBaseError.js.map