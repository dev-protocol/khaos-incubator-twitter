import { FunctionAuthorizer } from '@devprotocol/khaos-core'
import { always } from 'ramda'

export const authorize: FunctionAuthorizer = always(Promise.resolve(undefined))
