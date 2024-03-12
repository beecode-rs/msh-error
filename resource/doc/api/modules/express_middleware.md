[@beecode/msh-error](../README.md) / express/middleware

# Module: express/middleware

## Table of contents

### Functions

- [expressMiddleware](express_middleware.md#expressmiddleware)

## Functions

### expressMiddleware

▸ **expressMiddleware**(`err`, `_req`, `res`, `_next`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` \| [`ErrorBaseModel`](../classes/error_base_model.ErrorBaseModel.md)<`never`\> |
| `_req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `res` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `_next` | `NextFunction` |

#### Returns

`unknown`

#### Defined in

[packages/error/src/express/middleware.ts:5](https://github.com/beecode-rs/msh-error/blob/e92b3a2/src/express/middleware.ts#L5)
