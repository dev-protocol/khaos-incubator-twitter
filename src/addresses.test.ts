import test from 'ava'
import { addresses } from './addresses'

test('Returns mainnet address', async (t) => {
	const res = await addresses({ network: 'mainnet' })
	t.is(res, '0x886f06F5118536589e89A719d3D9E61B330E95B6')
})

test('Returns ropsten address', async (t) => {
	const res = await addresses({ network: 'ropsten' })
	t.is(res, '0x1CF5A65D5594C507D797c855D71cF5524B15a639')
})
