import { type NextFunction, type Request, type Response } from 'express'

import { ErrorBaseModel } from '#src/error/base-model'

export const expressMiddleware = (err: unknown, _req: Request, res: Response, _next: NextFunction): unknown => {
	if (err instanceof ErrorBaseModel) {
		return res.status(err.httpCode).json({
			code: err.httpCode,
			message: err.message,
			status: 'error',
		})
	}

	if (err instanceof Error) {
		return res.status(500).json({
			code: 500,
			message: err.message,
			status: 'error',
		})
	}

	return res.status(500).json({
		code: 500,
		message: 'Unknown error',
		status: 'error',
	})
}
