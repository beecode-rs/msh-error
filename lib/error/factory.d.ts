export declare const errorFactory: () => {
    client: {
        badRequest: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        unauthorized: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        paymentRequired: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        forbidden: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        notFound: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        methodNotAllowed: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        notAcceptable: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        proxyAuthenticationRequired: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        requestTimeout: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        conflict: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        gone: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        lengthRequired: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        preconditionFailed: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        payloadTooLarge: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        requestUriTooLong: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        unsupportedMediaType: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        requestedRangeNotSatisfiable: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        expectationFailed: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        misdirectedRequest: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        unprocessableEntity: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        locked: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        failedDependency: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        upgradeRequired: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        preconditionRequired: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        tooManyRequests: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        requestHeaderFieldsTooLarge: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        connectionClosedWithoutResponse: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        unavailableForLegalReasons: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        clientClosedRequest: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
    };
    server: {
        internalServerError: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        notImplemented: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        badGateway: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        serviceUnavailable: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        gatewayTimeout: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        httpVersionNotSupported: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        variantAlsoNegotiates: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        insufficientStorage: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        loopDetected: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        notExtended: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        networkAuthenticationRequired: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
        networkConnectTimeoutError: {
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("../../dist/error/base-model.js").ErrorBaseModel;
            <T extends import("../../dist/error/base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("../../dist/error/base-model.js").ErrorBaseModel;
        };
    };
};
//# sourceMappingURL=factory.d.ts.map