[@beecode/msh-error](../README.md) / [error/base-model](../modules/error_base_model.md) / ErrorBaseModel

# Class: ErrorBaseModel<T\>

[error/base-model](../modules/error_base_model.md).ErrorBaseModel

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ErrorPayload`](../modules/error_base_model.md#errorpayload) = `never` |

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

• **new ErrorBaseModel**<`T`\>(`params`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ErrorPayload`](../modules/error_base_model.md#errorpayload) = `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.httpCode` | `number` |
| `params.message?` | `string` |
| `params.name?` | `string` |
| `params.payload?` | `T` |

#### Overrides

Error.constructor

#### Defined in

[packages/error/src/error/base-model.ts:10](https://github.com/beecode-rs/msh-error/blob/1b7382c/src/error/base-model.ts#L10)

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

[packages/error/src/error/base-model.ts:7](https://github.com/beecode-rs/msh-error/blob/1b7382c/src/error/base-model.ts#L7)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1067

___

### payload

• `Optional` **payload**: `T`

#### Defined in

[packages/error/src/error/base-model.ts:8](https://github.com/beecode-rs/msh-error/blob/1b7382c/src/error/base-model.ts#L8)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1069

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

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

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

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

node_modules/@types/node/globals.d.ts:4
