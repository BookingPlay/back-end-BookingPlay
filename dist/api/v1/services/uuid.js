"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uuid = void 0;
const uuid_1 = require("uuid");
class Uuid {
    static uuidv4() {
        return (0, uuid_1.v4)();
    }
}
exports.Uuid = Uuid;
//# sourceMappingURL=uuid.js.map