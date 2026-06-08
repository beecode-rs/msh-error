# Migration Guide

## v1.0.12 → v2.0.0

This release restructures the package internals into clean architecture layers (`business/model/`, `business/service/`). If you import directly from sub-paths, you need to update your imports. The main entry point (`@beecode/msh-error`) is **unchanged** and requires no migration.

### What Changed

Files were moved from flat/grouped folders into layered directories:

| Old Path | New Path |
|---|---|
| `dist/error/factory` | `dist/business/service/error-factory` |
| `dist/error/hof` | `dist/business/service/error-hof` |
| `dist/error/base-model` | `dist/business/model/error-base-model` |
| `dist/http-response-code` | `dist/business/model/http-response-code-mapper` |
| `dist/express/middleware` | `dist/business/service/express-middleware` |
| `dist/util/string-util` | Removed — see below |

### Import Paths

#### No change needed (main entry point)

```ts
import { errorFactory, errorHOF } from '@beecode/msh-error'
```

#### Direct sub-path imports — update required

**ErrorFactory**

```diff
- import { errorFactory } from '@beecode/msh-error/dist/error/factory'
+ import { errorFactory } from '@beecode/msh-error/dist/business/service/error-factory'
```

**ErrorHOF**

```diff
- import { errorHOF } from '@beecode/msh-error/dist/error/hof'
+ import { errorHOF } from '@beecode/msh-error/dist/business/service/error-hof'
```

**ErrorBaseModel / ErrorPayload**

```diff
- import { ErrorBaseModel } from '@beecode/msh-error/dist/error/base-model'
+ import { ErrorBaseModel } from '@beecode/msh-error/dist/business/model/error-base-model'
```

**HttpResponseCodeMapper**

```diff
- import { HttpResponseCodeMapper } from '@beecode/msh-error/dist/http-response-code'
+ import { HttpResponseCodeMapper } from '@beecode/msh-error/dist/business/model/http-response-code-mapper'
```

**Express middleware**

```diff
- import { expressMiddleware } from '@beecode/msh-error/dist/express/middleware'
+ import { expressMiddleware } from '@beecode/msh-error/dist/business/service/express-middleware'
```

### Removed: `stringUtil`

The `stringUtil.codeNameFromEnum()` utility was moved into the model layer as `httpResponseCodeUtil.codeNameFromEnum()`:

```diff
- import { stringUtil } from '@beecode/msh-error/dist/util/string-util'
- stringUtil.codeNameFromEnum(HttpResponseCodeMapper.BAD_REQUEST)
+ import { httpResponseCodeUtil } from '@beecode/msh-error/dist/business/model/http-response-code-mapper'
+ httpResponseCodeUtil.codeNameFromEnum(HttpResponseCodeMapper.BAD_REQUEST)
```
