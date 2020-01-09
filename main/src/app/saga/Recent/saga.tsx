import {all, put, call, takeLatest} from 'redux-saga/effects';
import {showLoading, hideLoading} from 'app/actions/Login/action';

import * as constants from 'app/utils/constants';
// import request from 'app/utils/request';


export function* RecentData() {
  try {
    yield put(showLoading());
   
    yield put(hideLoading());
  } catch(e) {
  
    yield put(hideLoading());
  }
  
}

export default function* rootSaga() {
  yield all([
    takeLatest(constants.GET_RECENT, RecentData)
  ]);
}