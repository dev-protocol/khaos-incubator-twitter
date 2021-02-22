import { Abi } from '@devprotocol/khaos-core'

export const abi: Abi = [
	'event Twitter(string _githubRepository, string _twitterId, string _twitterPublicSignature, string _githubPublicSignature)',
	'function finish(string memory _githubRepository, uint256 _status, string memory _errorMessage) external',
]
