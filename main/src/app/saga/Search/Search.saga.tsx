import { all, put, call, takeLatest } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'app/actions/Login/action';
import * as constants from 'app/utils/constants';
import request from 'app/utils/request';
import { loadSearchData } from 'app/actions/Search/action';
import { GET_RECENT } from 'app/actions/Recent/action'
import { RECENT_DATA } from 'app/utils/mock_Data2';
import { GET_FAVORITE } from 'app/actions/Favorite/action'
import { FAVORITE_DATA } from 'app/utils/mock_Data3';
//const __model:Recommended = new Recommended();
export function* searchData(data: any) {
  try {
    yield put(showLoading());
    const repos = yield call(request, ["SEARCH", "SEARCH_LOADS"]);
    yield put(loadSearchData(repos));

    yield put(hideLoading());
  } catch (e) {
    // yield __model.getLoads() && put(loadData(__model.getLoads()));
    yield put(hideLoading());
  }

}
export function* recentData(data: any) {
  try {
    yield put(showLoading());

    const repos2 = RECENT_DATA;
    yield put(GET_RECENT(repos2));

    yield put(hideLoading());
  } catch (e) {
   
    yield put(hideLoading());
  }

}

export function* favoriteData(data: any) {
  try {
    yield put(showLoading());

    const repos3 = FAVORITE_DATA;
  console.log(repos3,"repios3")
    yield put(GET_FAVORITE(repos3));

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