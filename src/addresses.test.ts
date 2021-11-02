import test from 'ava'
import { addresses } from './addresses'

test('Returns mainnet address', async (t) => {
	const res = await addresses({ network: 'mainnet' })
	t.is(res, '0x7f1b8c30832ca3ABC6326A58903A3a47ade00019')
})

test('Returns ropsten address', async (t) => {
	const res = await addresses({ network: 'ropsten' })
	t.is(res, '0xca98de1774F13090014660fb80367Fde970C4A72')
})

test('Returns undefined when arbitrum-one', async (t) => {
	const res = await addresses({ network: 'arbitrum-one' })
	t.is(res, undefined)
})

test('Returns undefined when arbitrum-rinkeby', async (t) => {
	const res = await addresses({ network: 'arbitrum-rinkeby' })
	t.is(res, undefined)
})
