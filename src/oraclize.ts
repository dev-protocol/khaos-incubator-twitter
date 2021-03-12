import {
	FunctionOraclizer,
	FunctionOraclizeResults,
} from '@devprotocol/khaos-core'
import { getTextUrls } from '@devprotocol/util-ts'

export const oraclize: FunctionOraclizer = async ({ query }) => {
	const twitterId: string = query.allData['_twitterId']
	const repository: string = query.allData['_githubRepository']
	const [isStatusGreen, urls] = await getTextUrls(twitterId)
	const stakesSocialUrls = urls.filter(
		(url) => url.indexOf('https://stakes.social') !== -1
	)
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
	} as FunctionOraclizeResults
}
