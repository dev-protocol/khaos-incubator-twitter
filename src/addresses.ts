import { FunctionAddresses } from '@devprotocol/khaos-core'

export const addresses: FunctionAddresses = async ({ network }) =>
	network === 'mainnet'
		? '0x7f1b8c30832ca3ABC6326A58903A3a47ade00019'
		: '0xca98de1774F13090014660fb80367Fde970C4A72'
