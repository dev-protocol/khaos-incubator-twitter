/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable functional/immutable-data */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable functional/no-let */
/* eslint-disable functional/prefer-readonly-type */
import test from 'ava'
import sinon from 'sinon'
import { oraclize } from './oraclize'
import * as utilts from '@devprotocol/util-ts'

let getTextUrls: sinon.SinonStub<
	[url: string],
	Promise<readonly [boolean, readonly string[]]>
>

test.before(() => {
	getTextUrls = sinon.stub(utilts, 'getTextUrls')
	getTextUrls.withArgs('1234567890').resolves([true, ['https://stakes.social']])
	getTextUrls.withArgs('1234567891').resolves([false, ['']])
	getTextUrls.withArgs('1234567892').resolves([true, ['']])
})

test('oraclize is executed.', async (t) => {
	const res = await oraclize({
		signatureOptions: {} as any,
		query: {
			allData: {
				_twitterId: '1234567890',
				_githubRepository: 'hogehoge/repository',
			},
		} as any,
		network: 'mainnet',
	})
	t.is(res!.message, 'hogehoge/repository')
	t.is(res!.status, 0)
	t.is(res!.statusMessage, '')
})

test('twitter api failed.', async (t) => {
	const res = await oraclize({
		signatureOptions: {} as any,
		query: {
			allData: {
				_twitterId: '1234567891',
				_githubRepository: 'hogehoge/repository',
			},
		} as any,
		network: 'mainnet',
	})
	t.is(res!.message, 'hogehoge/repository')
	t.is(res!.status, 1)
	t.is(res!.statusMessage, 'twitter api error')
})

test('The URL of stakes.socials is not included in the twitter text.', async (t) => {
	const res = await oraclize({
		signatureOptions: {} as any,
		query: {
			allData: {
				_twitterId: '1234567892',
				_githubRepository: 'hogehoge/repository',
			},
		} as any,
		network: 'mainnet',
	})
	t.is(res!.message, 'hogehoge/repository')
	t.is(res!.status, 1)
	t.is(res!.statusMessage, 'stakes social url is not included')
})

test.after(() => {
	getTextUrls.restore()
})
