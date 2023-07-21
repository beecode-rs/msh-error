import { ErrorBaseModel, ErrorPayload } from '#/error/base-model.js'
import { HttpResponseCodeMapper } from '#/http-response-code.js'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const errorHOF = (httpCode: HttpResponseCodeMapper) => {
	function closure<T extends ErrorPayload = never>(message?: string, payload?: T): ErrorBaseModel
	function closure<T extends ErrorPayload = never>(params?: { name?: string; message?: string; payload?: T }): ErrorBaseModel
	function closure<T extends ErrorPayload = never>(
		messageOrParams?: string | { name?: string; message?: string; payload?: T },
		payload?: T
	): ErrorBaseModel<T> {
		if (typeof messageOrParams === 'string') {
			return new ErrorBaseModel<T>({ httpCode, message: messageOrParams, payload })
		}

		return new ErrorBaseModel<T>({ ...messageOrParams, httpCode })
	}

	return closure
}
