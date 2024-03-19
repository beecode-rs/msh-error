import { errorHOF } from '#src/error/hof'
import { HttpResponseCodeMapper } from '#src/http-response-code'

/* eslint-disable sort-keys-fix/sort-keys-fix */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const errorFactory = () => ({
	client: {
		badRequest: errorHOF(HttpResponseCodeMapper.BAD_REQUEST),
		unauthorized: errorHOF(HttpResponseCodeMapper.UNAUTHORIZED),
		paymentRequired: errorHOF(HttpResponseCodeMapper.PAYMENT_REQUIRED),
		forbidden: errorHOF(HttpResponseCodeMapper.FORBIDDEN),
		notFound: errorHOF(HttpResponseCodeMapper.NOT_FOUND),
		methodNotAllowed: errorHOF(HttpResponseCodeMapper.METHOD_NOT_ALLOWED),
		notAcceptable: errorHOF(HttpResponseCodeMapper.NOT_ACCEPTABLE),
		proxyAuthenticationRequired: errorHOF(HttpResponseCodeMapper.PROXY_AUTHENTICATION_REQUIRED),
		requestTimeout: errorHOF(HttpResponseCodeMapper.REQUEST_TIMEOUT),
		conflict: errorHOF(HttpResponseCodeMapper.CONFLICT),
		gone: errorHOF(HttpResponseCodeMapper.GONE),
		lengthRequired: errorHOF(HttpResponseCodeMapper.LENGTH_REQUIRED),
		preconditionFailed: errorHOF(HttpResponseCodeMapper.PRECONDITION_FAILED),
		payloadTooLarge: errorHOF(HttpResponseCodeMapper.PAYLOAD_TOO_LARGE),
		requestUriTooLong: errorHOF(HttpResponseCodeMapper.REQUEST__URI_TOO_LONG),
		unsupportedMediaType: errorHOF(HttpResponseCodeMapper.UNSUPPORTED_MEDIA_TYPE),
		requestedRangeNotSatisfiable: errorHOF(HttpResponseCodeMapper.REQUESTED_RANGE_NOT_SATISFIABLE),
		expectationFailed: errorHOF(HttpResponseCodeMapper.EXPECTATION_FAILED),
		misdirectedRequest: errorHOF(HttpResponseCodeMapper.MISDIRECTED_REQUEST),
		unprocessableEntity: errorHOF(HttpResponseCodeMapper.UNPROCESSABLE_ENTITY),
		locked: errorHOF(HttpResponseCodeMapper.LOCKED),
		failedDependency: errorHOF(HttpResponseCodeMapper.FAILED_DEPENDENCY),
		upgradeRequired: errorHOF(HttpResponseCodeMapper.UPGRADE_REQUIRED),
		preconditionRequired: errorHOF(HttpResponseCodeMapper.PRECONDITION_REQUIRED),
		tooManyRequests: errorHOF(HttpResponseCodeMapper.TOO_MANY_REQUESTS),
		requestHeaderFieldsTooLarge: errorHOF(HttpResponseCodeMapper.REQUEST_HEADER_FIELDS_TOO_LARGE),
		connectionClosedWithoutResponse: errorHOF(HttpResponseCodeMapper.CONNECTION_CLOSED_WITHOUT_RESPONSE),
		unavailableForLegalReasons: errorHOF(HttpResponseCodeMapper.UNAVAILABLE_FOR_LEGAL_REASONS),
		clientClosedRequest: errorHOF(HttpResponseCodeMapper.CLIENT_CLOSED_REQUEST),
	},
	server: {
		internalServerError: errorHOF(HttpResponseCodeMapper.INTERNAL_SERVER_ERROR),
		notImplemented: errorHOF(HttpResponseCodeMapper.NOT_IMPLEMENTED),
		badGateway: errorHOF(HttpResponseCodeMapper.BAD_GATEWAY),
		serviceUnavailable: errorHOF(HttpResponseCodeMapper.SERVICE_UNAVAILABLE),
		gatewayTimeout: errorHOF(HttpResponseCodeMapper.GATEWAY_TIMEOUT),
		httpVersionNotSupported: errorHOF(HttpResponseCodeMapper.HTTP_VERSION_NOT_SUPPORTED),
		variantAlsoNegotiates: errorHOF(HttpResponseCodeMapper.VARIANT_ALSO_NEGOTIATES),
		insufficientStorage: errorHOF(HttpResponseCodeMapper.INSUFFICIENT_STORAGE),
		loopDetected: errorHOF(HttpResponseCodeMapper.LOOP_DETECTED),
		notExtended: errorHOF(HttpResponseCodeMapper.NOT_EXTENDED),
		networkAuthenticationRequired: errorHOF(HttpResponseCodeMapper.NETWORK_AUTHENTICATION_REQUIRED),
		networkConnectTimeoutError: errorHOF(HttpResponseCodeMapper.NETWORK_CONNECT_TIMEOUT_ERROR),
	},
})
/* eslint-enable sort-keys-fix/sort-keys-fix */
