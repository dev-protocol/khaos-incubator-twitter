import urljoin from 'url-join'
import { FunctionOraclizer } from '@devprotocol/khaos-core'
import { getTextUrls } from './twitter'

export const oraclize: FunctionOraclizer = async ({ query }) => {
	const twitterId: string = query.allData['_twitterId']
	const repository: string = query.allData['_githubRepository']
	const twitterUrl = urljoin('https://api.twitter.com/2/tweets', twitterId)
	const [isStatusGreen, urls] = await getTextUrls(twitterUrl)
	const stakesSocialUrls = urls.filter((url) => url.indexOf('https://stakes.social') !== -1)
	const resStatus = stakesSocialUrls.length > 0 ? 0 : 1
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
