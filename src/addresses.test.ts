import test from 'ava'
import { addresses } from './addresses'

// TODO デプロイあとに更新する
test('Returns mainnet address', async (t) => {
	const res = await addresses({ network: 'mainnet' })
	t.is(res, '0x.........')
})

// TODO デプロイあとに更新する
test('Returns ropsten address', async (t) => {
	const res = await addresses({ network: 'ropsten' })
	t.is(res, '0x..............')
})
