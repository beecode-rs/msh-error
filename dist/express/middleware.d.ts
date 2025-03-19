import { type NextFunction, type Request, type Response } from 'express';
import { type ErrorBaseModel } from '#src/error/base-model';
export declare const expressMiddleware: (err: Error | ErrorBaseModel, _req: Request, res: Response, _next: NextFunction) => unknown;
//# sourceMappingURL=middleware.d.ts.map