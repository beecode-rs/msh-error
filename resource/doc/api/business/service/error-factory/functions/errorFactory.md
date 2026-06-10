[**@beecode/msh-error**](../../../../README.md)

***

[@beecode/msh-error](../../../../README.md) / [business/service/error-factory](../README.md) / errorFactory

# Function: errorFactory()

> **errorFactory**(): `object`

Defined in: [packages/error/src/business/service/error-factory.ts:6](https://github.com/beecode-rs/msh-error/blob/65369919769158ac071ebde1d40254aa4ce9f25a/src/business/service/error-factory.ts#L6)

## Returns

`object`

### client

> **client**: `object`

#### client.badRequest

> **badRequest**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.clientClosedRequest

> **clientClosedRequest**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.conflict

> **conflict**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.connectionClosedWithoutResponse

> **connectionClosedWithoutResponse**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.expectationFailed

> **expectationFailed**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.failedDependency

> **failedDependency**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.forbidden

> **forbidden**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.gone

> **gone**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.lengthRequired

> **lengthRequired**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.locked

> **locked**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.methodNotAllowed

> **methodNotAllowed**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.misdirectedRequest

> **misdirectedRequest**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.notAcceptable

> **notAcceptable**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.notFound

> **notFound**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.payloadTooLarge

> **payloadTooLarge**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.paymentRequired

> **paymentRequired**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.preconditionFailed

> **preconditionFailed**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.preconditionRequired

> **preconditionRequired**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.proxyAuthenticationRequired

> **proxyAuthenticationRequired**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.requestedRangeNotSatisfiable

> **requestedRangeNotSatisfiable**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.requestHeaderFieldsTooLarge

> **requestHeaderFieldsTooLarge**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.requestTimeout

> **requestTimeout**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.requestUriTooLong

> **requestUriTooLong**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.tooManyRequests

> **tooManyRequests**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.unauthorized

> **unauthorized**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.unavailableForLegalReasons

> **unavailableForLegalReasons**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.unprocessableEntity

> **unprocessableEntity**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.unsupportedMediaType

> **unsupportedMediaType**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### client.upgradeRequired

> **upgradeRequired**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

### server

> **server**: `object`

#### server.badGateway

> **badGateway**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### server.gatewayTimeout

> **gatewayTimeout**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### server.httpVersionNotSupported

> **httpVersionNotSupported**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### server.insufficientStorage

> **insufficientStorage**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### server.internalServerError

> **internalServerError**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### server.loopDetected

> **loopDetected**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### server.networkAuthenticationRequired

> **networkAuthenticationRequired**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### server.networkConnectTimeoutError

> **networkConnectTimeoutError**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### server.notExtended

> **notExtended**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### server.notImplemented

> **notImplemented**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### server.serviceUnavailable

> **serviceUnavailable**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

#### server.variantAlsoNegotiates

> **variantAlsoNegotiates**: \{\<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md); \}

##### Call Signature

> \<`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### message?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

##### Call Signature

> \<`T`\>(`params?`): [`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)

###### Type Parameters

###### T

`T` *extends* [`ErrorPayload`](../../../model/error-base-model/type-aliases/ErrorPayload.md) = `never`

###### Parameters

###### params?

###### message?

`string`

###### name?

`string`

###### payload?

`T`

###### Returns

[`ErrorBaseModel`](../../../model/error-base-model/classes/ErrorBaseModel.md)
