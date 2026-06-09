module.exports = {
	'**/*.json': (files) => {
		const filtered = files.filter((f) => !f.startsWith('resource/'))
		if (filtered.length === 0) return []
		return ['npm run lint-json']
	},
	'src/**/*.{ts,tsx,js,jsx}': ['eslint', 'prettier --check'],
}
