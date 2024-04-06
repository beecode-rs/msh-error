"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringUtil = void 0;
var _httpResponseCode = require("../http-response-code");
var stringUtil = exports.stringUtil = {
  codeNameFromEnum: function codeNameFromEnum(codeEnum) {
    var nameWithUnderscore = _httpResponseCode.HttpResponseCodeMapper[codeEnum];
    if (!nameWithUnderscore) {
      return 'Unknown error code name';
    }
    return nameWithUnderscore.split('__').join('-').split('_').join(' ');
  }
};