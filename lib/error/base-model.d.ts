import { HttpResponseCodeMapper } from '../http-response-code';
export type ErrorPayload = Record<string, any>;
export declare class ErrorBaseModel<T extends ErrorPayload = never> extends Error {
    httpCode: number;
    payload?: T;
    constructor(params: {
        httpCode: number | HttpResponseCodeMapper;
        name?: string;
        message?: string;
        payload?: T;
    });
}
//# sourceMappingURL=base-model.d.ts.map