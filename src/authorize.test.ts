import test from 'ava'
import { authorize } from './authorize'

test('It always comes back undefined.', async (t) => {
	const res = await authorize({
		message: 'test',
		secret: 'test',
		request: {} as any,
	})
	t.true(typeof res === 'undefined')
})
