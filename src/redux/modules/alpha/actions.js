import * as CONSTANTS from './constants'
import { createAction } from 'redux-actions'

export const getAlphaList = createAction(CONSTANTS.GET_ALPHA_LIST)
export const getAlphaTags = createAction(CONSTANTS.GET_ALPHA_TAGS)