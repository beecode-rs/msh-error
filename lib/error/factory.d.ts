export declare const errorFactory: () => {
    client: {
        badRequest: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        unauthorized: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        paymentRequired: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        forbidden: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        notFound: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        methodNotAllowed: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        notAcceptable: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        proxyAuthenticationRequired: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        requestTimeout: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        conflict: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        gone: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        lengthRequired: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        preconditionFailed: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        payloadTooLarge: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        requestUriTooLong: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        unsupportedMediaType: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        requestedRangeNotSatisfiable: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        expectationFailed: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        misdirectedRequest: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        unprocessableEntity: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        locked: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        failedDependency: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        upgradeRequired: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        preconditionRequired: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        tooManyRequests: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        requestHeaderFieldsTooLarge: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        connectionClosedWithoutResponse: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        unavailableForLegalReasons: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        clientClosedRequest: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
    };
    server: {
        internalServerError: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        notImplemented: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        badGateway: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        serviceUnavailable: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        gatewayTimeout: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        httpVersionNotSupported: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        variantAlsoNegotiates: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        insufficientStorage: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        loopDetected: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        notExtended: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        networkAuthenticationRequired: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
        networkConnectTimeoutError: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string | undefined, payload?: T | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
            <T_1 extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string | undefined;
                message?: string | undefined;
                payload?: T_1 | undefined;
            } | undefined): import("../../dist/error/base-model.js").ErrorBaseModel<any>;
        };
    };
};
//# sourceMappingURL=factory.d.ts.map