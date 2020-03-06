import {all, put, call, takeLatest} from 'redux-saga/effects';
import {showLoading, hideLoading} from 'app/actions/Login/action';

import * as constants from 'app/utils/constants';
import {GetUserProfileData} from 'app/actions/userProfile/action';
import {userProfileData} from 'app/utils/mock_Data';

export function* UserProfileData() {
  try {
    yield put(showLoading());
   const repos=userProfileData;
   yield put(GetUserProfileData(repos));
    yield put(hideLoading());
  } catch(e) {
    yield put(hideLoading());
  }
  
}

export default function* rootSaga() {
  yield all([
  takeLatest(constants.USER_PROFILE_DATA, UserProfileData),
  ]);
}