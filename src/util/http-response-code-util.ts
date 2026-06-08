import { HttpResponseCodeMapper } from '#src/business/model/http-response-code-mapper.js'

export const httpResponseCodeUtil = {
	codeNameFromEnum: (codeEnum: HttpResponseCodeMapper): string => {
		const nameWithUnderscore = HttpResponseCodeMapper[codeEnum]
		if (!nameWithUnderscore) {
			return 'Unknown error code name'
		}

		return nameWithUnderscore.split('__').join('-').split('_').join(' ')
	},
}
