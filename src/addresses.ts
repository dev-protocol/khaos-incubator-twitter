import { FunctionAddresses } from '@devprotocol/khaos-core'

// TODO デプロイあとに更新する
export const addresses: FunctionAddresses = async ({ network }) =>
	network === 'mainnet' ? '0x.........' : '0x..............'
