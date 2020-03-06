import { all, put, call, takeLatest } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'app/actions/Login/action';
import * as constants from 'app/utils/constants';
import request from 'app/utils/request';
import { GetMyLoadCardData } from 'app/actions/myload/action';
import { MyLoadCardData } from 'app/utils/mock_Data';
export function* profileImg(data: any) {
  console.log(data, "imagesaga")
  try {
    yield put(showLoading());
    const body = {
      "image-content": "data.payload"
    }
    const response = yield call(request, ["MYLOAD", "PROFILE_IMG", null, "Content-type", body, null]);
    console.log("Response:", response)
    // yield put(PROFILE_IMAGE_SET(repos));
    yield put(hideLoading());
  } catch (e) {
    yield put(hideLoading());
  }

}
export function* MyloadCardDataData() {

  try {
    yield put(showLoading());
    const repos = MyLoadCardData;
    yield put(GetMyLoadCardData(repos));
    yield put(hideLoading());
  } catch (e) {
    yield put(hideLoading());
  }

}

export function* MyLoadCardDataData() {

  try {
    yield put(showLoading());
    const repos = MyLoadCardData;
    yield put(GetMyLoadCardData(repos));
    yield put(hideLoading());
  } catch (e) {
    yield put(hideLoading());
  }

}

export default function* rootSaga() {
  yield all([
    takeLatest(constants.PROFILE_IMAGE_SET, profileImg),
    takeLatest(constants.MYLOAD_CARD_DATA, MyLoadCardDataData)
  ]);
}