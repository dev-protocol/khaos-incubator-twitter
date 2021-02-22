import test from 'ava'
import { event } from './event'

test('Returns `Twitter` when passed network is mainnet', async (t) => {
	t.is(await event({ network: 'mainnet' }), 'Twitter')
})

test('Returns `Twitter` when passed network is ropsten', async (t) => {
	t.is(await event({ network: 'ropsten' }), 'Twitter')
})
