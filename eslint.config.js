import eslintNode from '@beecode/msh-config/src/eslint-config.mjs'

export default [
	{
		ignores: [
			'.base-frame-template',
			'.history',
			'.idea',
			'.semaphore',
			'coverage',
			'dist',
			'node_modules',
			'resource',
			'packages',
			'.*.js',
			'.*.cjs',
			'.*.json',
			'package-lock.json',
			'tsconfig*.json',
			'typedoc.json',
			'jest.config*.ts',
			'eslint.config.js',
			'release.config.cjs',
		],
	},
	...eslintNode,
]
