"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnprocessedEntityError = void 0;
const index_1 = require("./index");
class UnprocessedEntityError extends index_1.AppError {
    constructor(errors) {
        super("", 422);
        this.errors = errors || [];
    }
    getErrors() {
        return this.errors;
    }
}
exports.UnprocessedEntityError = UnprocessedEntityError;
//# sourceMappingURL=unprocessedEntityError.js.map