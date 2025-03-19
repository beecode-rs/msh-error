import { type HttpResponseCodeMapper } from '#src/http-response-code'
import { stringUtil } from '#src/util/string-util'

export type ErrorPayload = Record<string, unknown>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class ErrorBaseModel<T extends ErrorPayload = any> extends Error {
	httpCode: number
	payload?: T

	constructor(params: { httpCode: HttpResponseCodeMapper | number; name?: string; message?: string; payload?: T }) {
		const { httpCode, name = stringUtil.codeNameFromEnum(httpCode), message = `${httpCode} - ${name}`, payload } = params
		super(message)
		this.httpCode = httpCode
		this.name = name
		this.payload = payload
	}
}
