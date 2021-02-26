import { FunctionAddresses } from '@devprotocol/khaos-core'

export const addresses: FunctionAddresses = async ({ network }) =>
	network === 'mainnet' ? '0x886f06F5118536589e89A719d3D9E61B330E95B6' : '0x1CF5A65D5594C507D797c855D71cF5524B15a639'
