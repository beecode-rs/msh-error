import { ErrorBaseModel, ErrorPayload } from '#src/error/base-model';
import { HttpResponseCodeMapper } from '#src/http-response-code';
export declare const errorHOF: (httpCode: HttpResponseCodeMapper) => {
    <T extends ErrorPayload = never>(message?: string, payload?: T): ErrorBaseModel;
    <T_1 extends ErrorPayload = never>(params?: {
        name?: string | undefined;
        message?: string | undefined;
        payload?: T_1 | undefined;
    } | undefined): ErrorBaseModel;
};
//# sourceMappingURL=hof.d.ts.map