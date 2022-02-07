import { takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/coin/constants'
import apiCall from '../api/apiCall'

const doGetCoinRatingList = apiCall({
  type: CONSTANTS.GET_COIN_RATING_LIST,
  isGhostApi: true,
  method: 'get',
  path: '/coin-ratings',
})

const doGetCoinRatingTypeList = apiCall({
  type: CONSTANTS.GET_COIN_RATING_TYPE_LIST,
  isGhostApi: true,
  method: 'get',
  path: '/coin-types',
})

const doGetCoinById = apiCall({
  type: CONSTANTS.GET_COIN_BY_ID,
  isGhostApi: true,
  method: 'get',
  path: ({ payload }) => `coin-ratings/${payload.symbol}/`,
})

export default function* rootSaga() {
  yield takeLatest(CONSTANTS.GET_COIN_RATING_LIST, doGetCoinRatingList)
  yield takeLatest(CONSTANTS.GET_COIN_RATING_TYPE_LIST, doGetCoinRatingTypeList)
  yield takeLatest(CONSTANTS.GET_COIN_BY_ID, doGetCoinById)
}