import test from 'ava'
import { addresses } from './addresses'

test('Returns mainnet address', async (t) => {
	const res = await addresses({ network: 'mainnet' })
	t.is(res, '0x7f1b8c30832ca3ABC6326A58903A3a47ade00019')
})

test('Returns ropsten address', async (t) => {
	const res = await addresses({ network: 'ropsten' })
	t.is(res, '0x59D4b114866920eD57FfAdF14A9E84a11e41217B')
})
