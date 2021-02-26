import test from 'ava'
import { abi } from './abi'

test('Returns abi informations.', async (t) => {
	t.is(
		abi.toString(),
		'event Twitter(string _githubRepository, string _twitterId, string _twitterPublicSignature, string _githubPublicSignature),function finish(string memory _githubRepository, uint256 _status, string memory _errorMessage) external'
	)
})
