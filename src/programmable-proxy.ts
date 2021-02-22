import urljoin from 'url-join'
import axios from 'axios'

export const execute = async (
	url: string
): Promise<readonly [boolean, string]> => {
	const programmableProxyUrl: string = urljoin(
		'https://programmable-proxy.azureedge.net',
		`?s=${url}`
	)
	const res = await axios.get(programmableProxyUrl)
	const isStatusGreen = res.status === 200
	const twitterText: string = isStatusGreen ? JSON.parse(res.data).text : ''
	return [isStatusGreen, twitterText]
}
