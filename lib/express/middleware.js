"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressMiddleware = void 0;
const expressMiddleware = (err, _req, res, _next) => {
    var _a;
    const code = (_a = err.httpCode) !== null && _a !== void 0 ? _a : 500;
    return res.status(code).json({
        code,
        message: err.message,
        status: 'error',
    });
};
exports.expressMiddleware = expressMiddleware;
//# sourceMappingURL=middleware.js.map