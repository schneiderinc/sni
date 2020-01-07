import {all, put, takeLatest} from 'redux-saga/effects';
import {showLoading, hideLoading, loginSuccess} from 'app/actions/Login/action';

import * as constants from 'app/utils/constants';

// changed type of `saga` from `SagaIterator` to `() => SagaIterator`
export function* doLogin() {
  try {
    yield put(showLoading());
    yield put(hideLoading());
    yield put(loginSuccess({}));
  } catch(e) {
    yield put(hideLoading());
  }
  
}

export default function* rootSaga() {
  yield all([
    takeLatest(constants.LOGIN_INPROGRESS, doLogin)
  ]);
}