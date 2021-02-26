import { FunctionPack } from '@devprotocol/khaos-core'

export const pack: FunctionPack = async ({ results }) => {
	return {
		name: 'finish',
		args: [results.message, results.status, results.statusMessage],
	}
}
