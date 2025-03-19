import { ErrorBaseModel, type ErrorPayload } from '../error/base-model.js';
import { type HttpResponseCodeMapper } from '../http-response-code.js';
export declare const errorHOF: (httpCode: HttpResponseCodeMapper) => {
    <T extends ErrorPayload = never>(message?: string, payload?: T): ErrorBaseModel;
    <T extends ErrorPayload = never>(params?: {
        name?: string;
        message?: string;
        payload?: T;
    }): ErrorBaseModel;
};
//# sourceMappingURL=hof.d.ts.map