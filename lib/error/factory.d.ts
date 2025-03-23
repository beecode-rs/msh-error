export declare const errorFactory: () => {
    client: {
        badRequest: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        unauthorized: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        paymentRequired: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        forbidden: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        notFound: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        methodNotAllowed: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        notAcceptable: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        proxyAuthenticationRequired: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        requestTimeout: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        conflict: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        gone: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        lengthRequired: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        preconditionFailed: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        payloadTooLarge: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        requestUriTooLong: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        unsupportedMediaType: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        requestedRangeNotSatisfiable: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        expectationFailed: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        misdirectedRequest: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        unprocessableEntity: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        locked: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        failedDependency: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        upgradeRequired: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        preconditionRequired: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        tooManyRequests: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        requestHeaderFieldsTooLarge: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        connectionClosedWithoutResponse: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        unavailableForLegalReasons: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        clientClosedRequest: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
    };
    server: {
        internalServerError: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        notImplemented: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        badGateway: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        serviceUnavailable: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        gatewayTimeout: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        httpVersionNotSupported: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        variantAlsoNegotiates: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        insufficientStorage: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        loopDetected: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        notExtended: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        networkAuthenticationRequired: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
        networkConnectTimeoutError: {
            <T extends import("./base-model.js").ErrorPayload = never>(message?: string, payload?: T): import("./base-model.js").ErrorBaseModel;
            <T extends import("./base-model.js").ErrorPayload = never>(params?: {
                name?: string;
                message?: string;
                payload?: T;
            }): import("./base-model.js").ErrorBaseModel;
        };
    };
};
//# sourceMappingURL=factory.d.ts.map