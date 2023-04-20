@beecode/msh-error

# @beecode/msh-error

## Table of contents

### Functions

- [errorFactory](README.md#errorfactory)
- [errorHOF](README.md#errorhof)

## Functions

### errorFactory

▸ **errorFactory**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `client` | { `badRequest`: () => `ErrorBaseModel`<`never`\> ; `clientClosedRequest`: () => `ErrorBaseModel`<`never`\> ; `conflict`: () => `ErrorBaseModel`<`never`\> ; `connectionClosedWithoutResponse`: () => `ErrorBaseModel`<`never`\> ; `expectationFailed`: () => `ErrorBaseModel`<`never`\> ; `failedDependency`: () => `ErrorBaseModel`<`never`\> ; `forbidden`: () => `ErrorBaseModel`<`never`\> ; `gone`: () => `ErrorBaseModel`<`never`\> ; `lengthRequired`: () => `ErrorBaseModel`<`never`\> ; `locked`: () => `ErrorBaseModel`<`never`\> ; `methodNotAllowed`: () => `ErrorBaseModel`<`never`\> ; `misdirectedRequest`: () => `ErrorBaseModel`<`never`\> ; `notAcceptable`: () => `ErrorBaseModel`<`never`\> ; `notFound`: () => `ErrorBaseModel`<`never`\> ; `payloadTooLarge`: () => `ErrorBaseModel`<`never`\> ; `paymentRequired`: () => `ErrorBaseModel`<`never`\> ; `preconditionFailed`: () => `ErrorBaseModel`<`never`\> ; `preconditionRequired`: () => `ErrorBaseModel`<`never`\> ; `proxyAuthenticationRequired`: () => `ErrorBaseModel`<`never`\> ; `requestHeaderFieldsTooLarge`: () => `ErrorBaseModel`<`never`\> ; `requestTimeout`: () => `ErrorBaseModel`<`never`\> ; `requestUriTooLong`: () => `ErrorBaseModel`<`never`\> ; `requestedRangeNotSatisfiable`: () => `ErrorBaseModel`<`never`\> ; `tooManyRequests`: () => `ErrorBaseModel`<`never`\> ; `unauthorized`: () => `ErrorBaseModel`<`never`\> ; `unavailableForLegalReasons`: () => `ErrorBaseModel`<`never`\> ; `unprocessableEntity`: () => `ErrorBaseModel`<`never`\> ; `unsupportedMediaType`: () => `ErrorBaseModel`<`never`\> ; `upgradeRequired`: () => `ErrorBaseModel`<`never`\>  } |
| `client.badRequest` | () => `ErrorBaseModel`<`never`\> |
| `client.clientClosedRequest` | () => `ErrorBaseModel`<`never`\> |
| `client.conflict` | () => `ErrorBaseModel`<`never`\> |
| `client.connectionClosedWithoutResponse` | () => `ErrorBaseModel`<`never`\> |
| `client.expectationFailed` | () => `ErrorBaseModel`<`never`\> |
| `client.failedDependency` | () => `ErrorBaseModel`<`never`\> |
| `client.forbidden` | () => `ErrorBaseModel`<`never`\> |
| `client.gone` | () => `ErrorBaseModel`<`never`\> |
| `client.lengthRequired` | () => `ErrorBaseModel`<`never`\> |
| `client.locked` | () => `ErrorBaseModel`<`never`\> |
| `client.methodNotAllowed` | () => `ErrorBaseModel`<`never`\> |
| `client.misdirectedRequest` | () => `ErrorBaseModel`<`never`\> |
| `client.notAcceptable` | () => `ErrorBaseModel`<`never`\> |
| `client.notFound` | () => `ErrorBaseModel`<`never`\> |
| `client.payloadTooLarge` | () => `ErrorBaseModel`<`never`\> |
| `client.paymentRequired` | () => `ErrorBaseModel`<`never`\> |
| `client.preconditionFailed` | () => `ErrorBaseModel`<`never`\> |
| `client.preconditionRequired` | () => `ErrorBaseModel`<`never`\> |
| `client.proxyAuthenticationRequired` | () => `ErrorBaseModel`<`never`\> |
| `client.requestHeaderFieldsTooLarge` | () => `ErrorBaseModel`<`never`\> |
| `client.requestTimeout` | () => `ErrorBaseModel`<`never`\> |
| `client.requestUriTooLong` | () => `ErrorBaseModel`<`never`\> |
| `client.requestedRangeNotSatisfiable` | () => `ErrorBaseModel`<`never`\> |
| `client.tooManyRequests` | () => `ErrorBaseModel`<`never`\> |
| `client.unauthorized` | () => `ErrorBaseModel`<`never`\> |
| `client.unavailableForLegalReasons` | () => `ErrorBaseModel`<`never`\> |
| `client.unprocessableEntity` | () => `ErrorBaseModel`<`never`\> |
| `client.unsupportedMediaType` | () => `ErrorBaseModel`<`never`\> |
| `client.upgradeRequired` | () => `ErrorBaseModel`<`never`\> |
| `server` | { `badGateway`: () => `ErrorBaseModel`<`never`\> ; `gatewayTimeout`: () => `ErrorBaseModel`<`never`\> ; `httpVersionNotSupported`: () => `ErrorBaseModel`<`never`\> ; `insufficientStorage`: () => `ErrorBaseModel`<`never`\> ; `internalServerError`: () => `ErrorBaseModel`<`never`\> ; `loopDetected`: () => `ErrorBaseModel`<`never`\> ; `networkAuthenticationRequired`: () => `ErrorBaseModel`<`never`\> ; `networkConnectTimeoutError`: () => `ErrorBaseModel`<`never`\> ; `notExtended`: () => `ErrorBaseModel`<`never`\> ; `notImplemented`: () => `ErrorBaseModel`<`never`\> ; `serviceUnavailable`: () => `ErrorBaseModel`<`never`\> ; `variantAlsoNegotiates`: () => `ErrorBaseModel`<`never`\>  } |
| `server.badGateway` | () => `ErrorBaseModel`<`never`\> |
| `server.gatewayTimeout` | () => `ErrorBaseModel`<`never`\> |
| `server.httpVersionNotSupported` | () => `ErrorBaseModel`<`never`\> |
| `server.insufficientStorage` | () => `ErrorBaseModel`<`never`\> |
| `server.internalServerError` | () => `ErrorBaseModel`<`never`\> |
| `server.loopDetected` | () => `ErrorBaseModel`<`never`\> |
| `server.networkAuthenticationRequired` | () => `ErrorBaseModel`<`never`\> |
| `server.networkConnectTimeoutError` | () => `ErrorBaseModel`<`never`\> |
| `server.notExtended` | () => `ErrorBaseModel`<`never`\> |
| `server.notImplemented` | () => `ErrorBaseModel`<`never`\> |
| `server.serviceUnavailable` | () => `ErrorBaseModel`<`never`\> |
| `server.variantAlsoNegotiates` | () => `ErrorBaseModel`<`never`\> |

#### Defined in

[error/index.ts:23](https://github.com/beecode-rs/msh-error/blob/b9e9cb2/src/error/index.ts#L23)

___

### errorHOF

▸ **errorHOF**(`httpCode`): () => `ErrorBaseModel`<`never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpCode` | `HttpResponseCodeMapper` |

#### Returns

`fn`

▸ (): `ErrorBaseModel`<`never`\>

##### Returns

`ErrorBaseModel`<`never`\>

#### Defined in

[error/index.ts:4](https://github.com/beecode-rs/msh-error/blob/b9e9cb2/src/error/index.ts#L4)
