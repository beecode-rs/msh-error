import { NextFunction, Request, Response } from 'express'
import { ErrorBaseModel } from 'src/error/base-model'

export const expressMiddleware = (err: Error | ErrorBaseModel, _req: Request, res: Response, _next: NextFunction): unknown => {
	const code = (err as any).httpCode ?? 500

	return res.status(code).json({
		code,
		message: err.message,
		status: 'error',
	})
}
