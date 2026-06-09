[![Build Status](https://beecode.semaphoreci.com/badges/msh-error/branches/main.svg?style=shields)](https://beecode.semaphoreci.com/projects/msh-error)
[![codecov](https://codecov.io/gh/beecode-rs/msh-error/branch/main/graph/badge.svg?token=fHc0YaxEiB)](https://codecov.io/gh/beecode-rs/msh-error)
[![GitHub license](https://img.shields.io/github/license/beecode-rs/msh-error)](https://github.com/beecode-rs/msh-error/blob/main/LICENSE)  
[![NPM](https://nodei.co/npm/@beecode/msh-error.png)](https://nodei.co/npm/@beecode/msh-error)

# msh-error

Micro-service helper: node error

This project is intended to be used in typescript project.

<!-- toc -->

- [Install](#install)
- [Documentation](#documentation)
- [Usage](#usage)
  * [With custom message](#with-custom-message)
  * [Pass some payload](#pass-some-payload)
  * [Error HOF (higher-order function)](#error-hof-higher-order-function)
  * [Express middleware](#express-middleware)
  * [ErrorBaseModel](#errorbasemodel)
  * [HttpResponseCodeMapper](#httpresponsecodemapper)
- [Migration](#migration)

<!-- tocstop -->

## Install

`npm i @beecode/msh-error`

## [Documentation](resource/doc/api/README.md)

## Usage

```ts
import { errorFactory } from '@beecode/msh-error'

export const testService = {
	someFunction: () => {
		// ...
		if(isThereAnError) {
			throw errorFactory().client.forbidden();
			// FORBIDDEN: 403 - FORBIDDEN
			//     at Object.closure ...
			// 	   at file:...
			// 	   at ModuleJob.run (node:...) {
			//   httpCode: 403,
			// 	 payload: undefined
			// }
		}
		// ...
	}
}
```

### With custom message

```ts
import { errorFactory } from '@beecode/msh-error'

export const testService = {
	someFunction: () => {
		// ...
		if(isThereAnError) {
			throw errorFactory().client.forbidden('Some custom message')
			// FORBIDDEN: Some custom message
			//     at Object.closure ...
			// 	   at file:...
			// 	   at ModuleJob.run (node:...) {
			//   httpCode: 403,
			//   payload: undefined
			// }
		}
		// ...
	}
}
```

### Pass some payload

```ts
import { errorFactory } from '@beecode/msh-error'

export const testService = {
	someFunction: () => {
		// ...
		if(isThereAnError) {
			throw errorFactory().client.forbidden({ message:"Some custom message", payload: { some:"custom", data:"here" } })
			// FORBIDDEN: Some custom message
			//     at Object.closure ...
			// 	   at file:...
			// 	   at ModuleJob.run (node:...) {
			//   httpCode: 403,
			// 	 payload: { some: 'custom', data: 'here' }
			// }
		}
		// ...
	}
}

```

### Error HOF (higher-order function)

`errorHOF` is the lower-level building block behind `errorFactory`. It takes an `HttpResponseCodeMapper` enum value and returns a closure that creates `ErrorBaseModel` instances. Use it when you need an error for a status code not covered by the factory's predefined methods.

```ts
import { errorHOF, HttpResponseCodeMapper } from '@beecode/msh-error'

const serviceUnavailable = errorHOF(HttpResponseCodeMapper.SERVICE_UNAVAILABLE)

// With a custom message
throw serviceUnavailable('Service is down for maintenance')

// With message and payload
throw serviceUnavailable('Service is down', { retryAfter: 60 })
```

### Express middleware

`expressMiddleware` is a ready-made Express error-handling middleware. It catches thrown `ErrorBaseModel` instances and responds with the appropriate HTTP status code and a JSON body. Unknown errors fall back to 500.

```ts
import express from 'express'
import { expressMiddleware, errorFactory } from '@beecode/msh-error'

const app = express()

// ... your routes ...

// Register as the last middleware (4 arguments = error handler)
app.use(expressMiddleware)

// Example: a route that throws
app.get('/protected', (_req, _res) => {
	throw errorFactory().client.unauthorized()
	// Responds with: { "code": 401, "message": "UNAUTHORIZED: 401 - UNAUTHORIZED", "status": "error" }
})
```

### ErrorBaseModel

`ErrorBaseModel` is the base error class that all errors from this package extend. It extends the native `Error` and adds `httpCode` and `payload` properties. You can use `instanceof` to identify these errors in catch blocks.

```ts
import { ErrorBaseModel } from '@beecode/msh-error'

try {
	// some code that throws
} catch (err) {
	if (err instanceof ErrorBaseModel) {
		console.log(err.httpCode) // e.g. 403
		console.log(err.payload)  // e.g. { some: 'data' }
	}
}
```

You can also construct one directly:

```ts
import { ErrorBaseModel, HttpResponseCodeMapper } from '@beecode/msh-error'

const error = new ErrorBaseModel({
	httpCode: HttpResponseCodeMapper.BAD_REQUEST,
	message: 'Invalid input',
	payload: { field: 'email', reason: 'required' },
})
```

### HttpResponseCodeMapper

`HttpResponseCodeMapper` is an enum containing all standard HTTP response status codes (1xx–5xx). Use it with `errorHOF` or when constructing `ErrorBaseModel` directly.

```ts
import { HttpResponseCodeMapper } from '@beecode/msh-error'

// Available codes include:
// HttpResponseCodeMapper.BAD_REQUEST           // 400
// HttpResponseCodeMapper.UNAUTHORIZED          // 401
// HttpResponseCodeMapper.FORBIDDEN             // 403
// HttpResponseCodeMapper.NOT_FOUND             // 404
// HttpResponseCodeMapper.INTERNAL_SERVER_ERROR // 500
// ... and many more (see source for full list)
```

## Migration

See [MIGRATION.md](./MIGRATION.md) for breaking changes and upgrade instructions.
