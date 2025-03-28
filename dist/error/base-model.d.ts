import { type HttpResponseCodeMapper } from '#src/http-response-code';
export type ErrorPayload = Record<string, unknown>;
export declare class ErrorBaseModel<T extends ErrorPayload = any> extends Error {
    httpCode: number;
    payload?: T;
    constructor(params: {
        httpCode: HttpResponseCodeMapper;
        name?: string;
        message?: string;
        payload?: T;
    });
}
//# sourceMappingURL=base-model.d.ts.map