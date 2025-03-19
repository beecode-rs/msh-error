import { type NextFunction, type Request, type Response } from '../express';
import { type ErrorBaseModel } from '../error/base-model.js';
export declare const expressMiddleware: (err: Error | ErrorBaseModel, _req: Request, res: Response, _next: NextFunction) => unknown;
//# sourceMappingURL=middleware.d.ts.map