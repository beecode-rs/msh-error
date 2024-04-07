"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorFactory = void 0;
var _hof = require("../error/hof.js");
var _httpResponseCode = require("../http-response-code.js");
/* eslint-disable sort-keys-fix/sort-keys-fix */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
var errorFactory = exports.errorFactory = function errorFactory() {
  return {
    client: {
      badRequest: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.BAD_REQUEST),
      unauthorized: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.UNAUTHORIZED),
      paymentRequired: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.PAYMENT_REQUIRED),
      forbidden: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.FORBIDDEN),
      notFound: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.NOT_FOUND),
      methodNotAllowed: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.METHOD_NOT_ALLOWED),
      notAcceptable: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.NOT_ACCEPTABLE),
      proxyAuthenticationRequired: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.PROXY_AUTHENTICATION_REQUIRED),
      requestTimeout: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.REQUEST_TIMEOUT),
      conflict: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.CONFLICT),
      gone: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.GONE),
      lengthRequired: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.LENGTH_REQUIRED),
      preconditionFailed: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.PRECONDITION_FAILED),
      payloadTooLarge: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.PAYLOAD_TOO_LARGE),
      requestUriTooLong: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.REQUEST__URI_TOO_LONG),
      unsupportedMediaType: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.UNSUPPORTED_MEDIA_TYPE),
      requestedRangeNotSatisfiable: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.REQUESTED_RANGE_NOT_SATISFIABLE),
      expectationFailed: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.EXPECTATION_FAILED),
      misdirectedRequest: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.MISDIRECTED_REQUEST),
      unprocessableEntity: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.UNPROCESSABLE_ENTITY),
      locked: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.LOCKED),
      failedDependency: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.FAILED_DEPENDENCY),
      upgradeRequired: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.UPGRADE_REQUIRED),
      preconditionRequired: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.PRECONDITION_REQUIRED),
      tooManyRequests: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.TOO_MANY_REQUESTS),
      requestHeaderFieldsTooLarge: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.REQUEST_HEADER_FIELDS_TOO_LARGE),
      connectionClosedWithoutResponse: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.CONNECTION_CLOSED_WITHOUT_RESPONSE),
      unavailableForLegalReasons: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.UNAVAILABLE_FOR_LEGAL_REASONS),
      clientClosedRequest: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.CLIENT_CLOSED_REQUEST)
    },
    server: {
      internalServerError: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.INTERNAL_SERVER_ERROR),
      notImplemented: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.NOT_IMPLEMENTED),
      badGateway: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.BAD_GATEWAY),
      serviceUnavailable: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.SERVICE_UNAVAILABLE),
      gatewayTimeout: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.GATEWAY_TIMEOUT),
      httpVersionNotSupported: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.HTTP_VERSION_NOT_SUPPORTED),
      variantAlsoNegotiates: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.VARIANT_ALSO_NEGOTIATES),
      insufficientStorage: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.INSUFFICIENT_STORAGE),
      loopDetected: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.LOOP_DETECTED),
      notExtended: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.NOT_EXTENDED),
      networkAuthenticationRequired: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.NETWORK_AUTHENTICATION_REQUIRED),
      networkConnectTimeoutError: (0, _hof.errorHOF)(_httpResponseCode.HttpResponseCodeMapper.NETWORK_CONNECT_TIMEOUT_ERROR)
    }
  };
};
/* eslint-enable sort-keys-fix/sort-keys-fix */