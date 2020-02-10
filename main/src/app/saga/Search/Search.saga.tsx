import { all, put, call, takeLatest } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'app/actions/Login/action';
import * as constants from 'app/utils/constants';
import request from 'app/utils/request';
import { loadSearchData } from 'app/actions/Search/action';
import { GetRecent } from 'app/actions/Recent/action'

import { getFavorite } from 'app/actions/Favorite/action'

//const __model:Recommended = new Recommended();
export function* searchData(data: any) {
  try {
    yield put(showLoading());
    const repos = yield call(request, ["SEARCH", "SEARCH_LOADS"]);
    yield put(loadSearchData(repos.data));

    yield put(hideLoading());
  } catch (e) {
    // yield __model.getLoads() && put(loadData(__model.getLoads()));
    yield put(hideLoading());
  }

}
export function* recentData() {
  try {
    yield put(showLoading());
    const recentData = yield call(request, ["RECENT", "RECENT_LOADS"]);
    yield put(GetRecent(recentData));
    yield put(hideLoading());
  } catch (e) {
   
    yield put(hideLoading());
  }

}

export function* favoriteData() {
  try {
    yield put(showLoading());
    const favoriteData = yield call(request, ["FAVORITE", "FAVORITE_LOADS"]);
    yield put(getFavorite(favoriteData));
    yield put(hideLoading());
  } catch (e) {
   
    yield put(hideLoading());
  }

}

export default function* rootSaga() {
  yield all([
    takeLatest(constants.SEARCH_DATA, searchData),
    takeLatest(constants.RECENT_LOADS, recentData),
    takeLatest(constants.FAVORITE_LOADS, favoriteData)

  ]);
}