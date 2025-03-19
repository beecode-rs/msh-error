"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expressMiddleware = void 0;
var expressMiddleware = exports.expressMiddleware = function expressMiddleware(err, _req, res, _next) {
  var _httpCode;
  var code = (_httpCode = err.httpCode) !== null && _httpCode !== void 0 ? _httpCode : 500;
  return res.status(code).json({
    code: code,
    message: err.message,
    status: 'error'
  });
};