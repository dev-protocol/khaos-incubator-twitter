/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable functional/immutable-data */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable functional/no-let */
/* eslint-disable functional/prefer-readonly-type */
import test from 'ava'
import sinon from 'sinon'
import { execute } from './programmable-proxy'
import axios, { AxiosRequestConfig } from 'axios'

let get: sinon.SinonStub<
	[url: string, config?: AxiosRequestConfig | undefined],
	Promise<unknown>
>

test.before(() => {
	get = sinon.stub(axios, 'get')
	get
		.withArgs('https://programmable-proxy.azureedge.net?s=http://hogehoge')
		.resolves({ status: 200, data: '{ "text": "dummy-text" }' })
	get
		.withArgs('https://programmable-proxy.azureedge.net?s=http://hugahuga')
		.resolves({ status: 400, data: '{ "error": "error message" }' })
})
test('api is sccessed.', async (t) => {
	const [isStatusGreen, twitterText] = await execute('http://hogehoge')
	t.is(isStatusGreen, true)
	t.is(twitterText, 'dummy-text')
})
test('api is failed.', async (t) => {
	const [isStatusGreen, twitterText] = await execute('http://hugahuga')
	t.is(isStatusGreen, false)
	t.is(twitterText, '')
})
test.after(() => {
	get.restore()
})
