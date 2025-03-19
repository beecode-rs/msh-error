import { ErrorBaseModel, type ErrorPayload } from '#src/error/base-model';
import { type HttpResponseCodeMapper } from '#src/http-response-code';
export declare const errorHOF: (httpCode: HttpResponseCodeMapper) => {
    <T extends ErrorPayload = never>(message?: string, payload?: T): ErrorBaseModel;
    <T extends ErrorPayload = never>(params?: {
        name?: string;
        message?: string;
        payload?: T;
    }): ErrorBaseModel;
};
//# sourceMappingURL=hof.d.ts.map