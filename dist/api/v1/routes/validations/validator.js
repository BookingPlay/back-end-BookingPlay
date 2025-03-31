"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteValidator = void 0;
const unprocessedEntityError_1 = require("../../../../config/exceptions/unprocessedEntityError");
class RouteValidator {
    static validate(schema) {
        return (req, res, next) => {
            const validateResult = {};
            if (schema.body) {
                let validatedData = schema.body.validate(req.body);
                if (!validatedData.error) {
                    req.body = Object.assign(Object.assign({}, validatedData.value), { _originalData: req.body });
                }
                validateResult.bodyError = validatedData.error;
            }
            if (schema.query) {
                validateResult.queryError = schema.query.validate(req.query).error;
            }
            if (schema.params) {
                validateResult.parameterError = schema.params.validate(req.params).error;
            }
            const valid = !validateResult.bodyError &&
                !validateResult.parameterError &&
                !validateResult.queryError;
            if (valid) {
                next();
            }
            else {
                const details = (validateResult.bodyError ? validateResult.bodyError.details : [])
                    .concat(validateResult.parameterError
                    ? validateResult.parameterError.details
                    : [])
                    .concat(validateResult.queryError ? validateResult.queryError.details : []);
                const messages = details.map((i) => i.message);
                console.warn(`Route validation error: ${messages.join("; ")}`);
                return next(new unprocessedEntityError_1.UnprocessedEntityError(messages));
            }
        };
    }
}
exports.RouteValidator = RouteValidator;
//# sourceMappingURL=validator.js.map