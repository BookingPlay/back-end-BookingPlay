"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCorsConfig = void 0;
const getCorsConfig = () => ({
    origin: "*",
    exposedHeaders: ["content-type", "content-length"],
    maxAge: 600,
    methods: ["GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS"],
    allowedHeaders: ["Accept", "Content-Type", "Authorization", "x-api-key"],
});
exports.getCorsConfig = getCorsConfig;
//# sourceMappingURL=cors.js.map