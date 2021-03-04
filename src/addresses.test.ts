import test from 'ava'
import { addresses } from './addresses'

test('Returns mainnet address', async (t) => {
	const res = await addresses({ network: 'mainnet' })
	t.is(res, '0x02d107567020bCE1Eb524D80C44f899Fa9993E5f')
})

test('Returns ropsten address', async (t) => {
	const res = await addresses({ network: 'ropsten' })
	t.is(res, '0x554c3f103894901f4ea0c4c955EB0E6fB347b5A6')
})
