import {all, put, call, takeLatest} from 'redux-saga/effects';
import {showLoading, hideLoading} from 'app/actions/Login/action';
import * as constants from 'app/utils/constants';
import request from 'app/utils/request';
import { loadSearchData } from 'app/actions/Search/action';

//const __model:Recommended = new Recommended();
export function* searchData(data:any) {
  try {
    yield put(showLoading());
    const repos = yield call(request, ["SEARCH","SEARCH_LOADS"]);
    yield put(loadSearchData(repos));
    yield put(hideLoading());
  } catch(e) {
   // yield __model.getLoads() && put(loadData(__model.getLoads()));
    yield put(hideLoading());
  }
  
}

export default function* rootSaga() {
  yield all([
    takeLatest(constants.SEARCH_DATA, searchData)
  ]);
}