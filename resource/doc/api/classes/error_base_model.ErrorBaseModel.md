[@beecode/msh-error](../README.md) / [error/base-model](../modules/error_base_model.md) / ErrorBaseModel

# Class: ErrorBaseModel\<T\>

[error/base-model](../modules/error_base_model.md).ErrorBaseModel

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ErrorPayload`](../modules/error_base_model.md#errorpayload) = `any` |

## Hierarchy

- `Error`

  ↳ **`ErrorBaseModel`**

## Table of contents

### Constructors

- [constructor](error_base_model.ErrorBaseModel.md#constructor)

### Properties

- [cause](error_base_model.ErrorBaseModel.md#cause)
- [httpCode](error_base_model.ErrorBaseModel.md#httpcode)
- [message](error_base_model.ErrorBaseModel.md#message)
- [name](error_base_model.ErrorBaseModel.md#name)
- [payload](error_base_model.ErrorBaseModel.md#payload)
- [stack](error_base_model.ErrorBaseModel.md#stack)
- [prepareStackTrace](error_base_model.ErrorBaseModel.md#preparestacktrace)
- [stackTraceLimit](error_base_model.ErrorBaseModel.md#stacktracelimit)

### Methods

- [captureStackTrace](error_base_model.ErrorBaseModel.md#capturestacktrace)

## Constructors

### constructor

• **new ErrorBaseModel**\<`T`\>(`params`): [`ErrorBaseModel`](error_base_model.ErrorBaseModel.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ErrorPayload`](../modules/error_base_model.md#errorpayload) = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.httpCode` | `number` |
| `params.message?` | `string` |
| `params.name?` | `string` |
| `params.payload?` | `T` |

#### Returns

[`ErrorBaseModel`](error_base_model.ErrorBaseModel.md)\<`T`\>

#### Overrides

Error.constructor

#### Defined in

[packages/error/src/error/base-model.ts:11](https://github.com/beecode-rs/msh-error/blob/744dc1e/src/error/base-model.ts#L11)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### httpCode

• **httpCode**: `number`

#### Defined in

[packages/error/src/error/base-model.ts:8](https://github.com/beecode-rs/msh-error/blob/744dc1e/src/error/base-model.ts#L8)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1077

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1076

___

### payload

• `Optional` **payload**: `T`

#### Defined in

[packages/error/src/error/base-model.ts:9](https://github.com/beecode-rs/msh-error/blob/744dc1e/src/error/base-model.ts#L9)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1078

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:21
