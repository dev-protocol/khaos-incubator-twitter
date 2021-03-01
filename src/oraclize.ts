import urljoin from 'url-join'
import { FunctionOraclizer } from '@devprotocol/khaos-core'
import { execute } from './programmable-proxy'

export const oraclize: FunctionOraclizer = async ({ query }) => {
	const twitterId: string = query.allData['_twitterId']
	const repository: string = query.allData['_githubRepository']
	const twitterUrl = urljoin('https://api.twitter.com/2/tweets', twitterId)
	const [isStatusGreen, twitterText] = await execute(twitterUrl)
	const resStatus = twitterText.indexOf('https://stakes.social') !== -1 ? 0 : 1
	const resStatusMessage =
		resStatus === 0
			? ''
			: isStatusGreen
			? 'stakes social url is not included'
			: 'twitter api error'
	return {
		message: repository,
		status: resStatus,
		statusMessage: resStatusMessage,
	}
}
