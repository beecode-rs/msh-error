import { HttpResponseCodeMapper } from '#http-response-code.js'
import { stringUtil } from '#util/string-util.js'

export type ErrorPayload = Record<string, never>

export class ErrorBaseModel<T extends ErrorPayload = never> extends Error {
	httpCode: number
	payload?: T

	constructor(params: { httpCode: number | HttpResponseCodeMapper; name?: string; message?: string; payload?: T }) {
		const { httpCode, name = stringUtil.codeNameFromEnum(httpCode), message = `${httpCode} - ${name}`, payload } = params
		super(message)
		this.httpCode = httpCode
		this.name = name
		this.payload = payload
	}
}
