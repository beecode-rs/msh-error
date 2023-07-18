[@beecode/msh-error](../README.md) / error/hof

# Module: error/hof

## Table of contents

### Functions

- [errorHOF](error_hof.md#errorhof)

## Functions

### errorHOF

▸ **errorHOF**(`httpCode`): <T\>(`message?`: `string`, `payload?`: `T`) => [`ErrorBaseModel`](../classes/error_base_model.ErrorBaseModel.md)<T\>(`params?`: { `message?`: `string` ; `name?`: `string` ; `payload?`: `T`  }) => [`ErrorBaseModel`](../classes/error_base_model.ErrorBaseModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpCode` | [`HttpResponseCodeMapper`](../enums/http_response_code.HttpResponseCodeMapper.md) |

#### Returns

`fn`

▸ <`T`\>(`message?`, `payload?`): [`ErrorBaseModel`](../classes/error_base_model.ErrorBaseModel.md)

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ErrorPayload`](error_base_model.md#errorpayload) = `never` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `payload?` | `T` |

##### Returns

[`ErrorBaseModel`](../classes/error_base_model.ErrorBaseModel.md)

▸ <`T`\>(`params?`): [`ErrorBaseModel`](../classes/error_base_model.ErrorBaseModel.md)

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ErrorPayload`](error_base_model.md#errorpayload) = `never` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `Object` |
| `params.message?` | `string` |
| `params.name?` | `string` |
| `params.payload?` | `T` |

##### Returns

[`ErrorBaseModel`](../classes/error_base_model.ErrorBaseModel.md)

#### Defined in

[packages/error/src/error/hof.ts:5](https://github.com/beecode-rs/msh-error/blob/1b7382c/src/error/hof.ts#L5)
