import { FunctionAddresses } from '@devprotocol/khaos-core'

export const addresses: FunctionAddresses = async ({ network }) =>
	network === 'mainnet'
		? '0x02d107567020bCE1Eb524D80C44f899Fa9993E5f'
		: '0x554c3f103894901f4ea0c4c955EB0E6fB347b5A6'
