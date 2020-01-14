import {all, put, call, takeLatest} from 'redux-saga/effects';
import {showLoading, hideLoading, loginSuccess, loginError} from 'app/actions/Login/action';

import * as constants from 'app/utils/constants';
import request from 'app/utils/request';

// changed type of `saga` from `SagaIterator` to `() => SagaIterator`
export function* doLogin(data: any) {
  try {
    var body = "username="+ data.username + "&password=" + data.password + "&grant_type=password&scope=openid+c3cd05f1-ee91-4dc0-a916-52868681800b+offline_access&client_id=c3cd05f1-ee91-4dc0-a916-52868681800b&response_type=token+id_token";
    yield put(showLoading());
      yield call(request, ["LOGIN","LOGIN",null,"Content-Type", body, "application/x-www-form-urlencoded"]);
    yield put(hideLoading());
    yield put(loginSuccess({}));
  } catch(e) {
    yield put(hideLoading());
    yield put(loginError(true));
  }
  
}

export default function* rootSaga() {
  yield all([
    takeLatest(constants.LOGIN_INPROGRESS, doLogin)
  ]);
}