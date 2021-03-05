import { FunctionAddresses } from '@devprotocol/khaos-core'

export const addresses: FunctionAddresses = async ({ network }) =>
	network === 'mainnet'
		? '0x7f1b8c30832ca3ABC6326A58903A3a47ade00019'
		: '0x59D4b114866920eD57FfAdF14A9E84a11e41217B'
