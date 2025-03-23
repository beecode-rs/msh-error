"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expressMiddleware = void 0;
var _baseModel = require("../error/base-model.js");
var expressMiddleware = exports.expressMiddleware = function expressMiddleware(err, _req, res, _next) {
  if (err instanceof _baseModel.ErrorBaseModel) {
    return res.status(err.httpCode).json({
      code: err.httpCode,
      message: err.message,
      status: 'error'
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      code: 500,
      message: err.message,
      status: 'error'
    });
  }
  return res.status(500).json({
    code: 500,
    message: 'Unknown error',
    status: 'error'
  });
};