"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBaseModel = void 0;
const string_util_1 = require("../util/string-util");
class ErrorBaseModel extends Error {
    constructor(params) {
        const { httpCode, name = string_util_1.stringUtil.codeNameFromEnum(httpCode), message = `${httpCode} - ${name}`, payload } = params;
        super(message);
        this.httpCode = httpCode;
        this.name = name;
        this.payload = payload;
    }
}
exports.ErrorBaseModel = ErrorBaseModel;
//# sourceMappingURL=base-model.js.map