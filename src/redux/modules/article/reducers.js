import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    status: 'INIT',
    error: null,
    articles: [],
    article: {},
    filteredArticles: [],
    filteredPosts: [],
    authors: [],
    totalAuthorsCount: 0,
    totalFilteredCount: 0,
  }
}

export default handleActions({
  [CONSTANTS.GET_ALL_ARTICLES]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.GET_ALL_ARTICLES)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    articles: payload,
  }),
  [requestFail(CONSTANTS.GET_ALL_ARTICLES)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    error: payload,
  }),
  [CONSTANTS.GET_ARTICLE_BY_ID]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.GET_ARTICLE_BY_ID)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    article: payload.posts[0],
  }),
  [requestFail(CONSTANTS.GET_ARTICLE_BY_ID)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    error: payload,
  }),
  [CONSTANTS.GET_FILTERED_ARTICLES]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.GET_FILTERED_ARTICLES)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    filteredArticles: payload.posts,
    totalFilteredCount: payload.meta.pagination.total,
  }),
  [requestFail(CONSTANTS.GET_FILTERED_ARTICLES)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    error: payload,
  }),
  [CONSTANTS.GET_AUTHORS_LIST]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.GET_AUTHORS_LIST)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    authors: payload.users,
    totalAuthorsCount: payload.meta.pagination.total
  }),
  [requestFail(CONSTANTS.GET_AUTHORS_LIST)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    error: payload,
  }),
}, getInitialState())
