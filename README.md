[![Build Status](https://beecode.semaphoreci.com/badges/msh-error/branches/main.svg?style=shields)](https://beecode.semaphoreci.com/projects/msh-error)
[![codecov](https://codecov.io/gh/beecode-rs/msh-error/branch/main/graph/badge.svg?token=fHc0YaxEiB)](https://codecov.io/gh/beecode-rs/msh-error)
[![GitHub license](https://img.shields.io/github/license/beecode-rs/msh-error)](https://github.com/beecode-rs/msh-error/blob/main/LICENSE)  
[![NPM](https://nodei.co/npm/@beecode/msh-error.png)](https://nodei.co/npm/@beecode/msh-error)

# msh-error

Micro-service helper: node error

This project is intended to be used in typescript project.

<!-- toc -->

- [Install](#install)
- [Usage](#usage)

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
import { errorFactory } from '@beecode/msh-error/error/factory.js';

export const testService = {
	someFunction: () => {
		// ...
		if(isThereAnError) {
			throw errorFactory().client.forbidden('Some custom message');
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
import { errorFactory } from '@beecode/msh-error/error/factory.js';

export const testService = {
	someFunction: () => {
		// ...
		if(isThereAnError) {
			throw errorFactory().client.forbidden({ message:"Some custom message", payload: { some:"custom", data:"here" } });
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
