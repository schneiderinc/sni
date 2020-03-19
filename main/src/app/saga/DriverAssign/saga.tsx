import {all, put, call, takeLatest} from 'redux-saga/effects';
import {showLoading, hideLoading} from 'app/actions/Login/action';
import { getFavorite } from 'app/actions/Favorite/action'
import { FAVORITE_DATA } from 'app/utils/mock_Data3';
import * as constants from 'app/utils/constants';
// import request from 'app/utils/request';

export function* favoriteData(data: any) {
    try {
      yield put(showLoading());
  
   
      yield put(hideLoading());
    } catch (e) {
     
      yield put(hideLoading());
    }
  
  }

export default function* rootSaga() {
  yield all([
    takeLatest(constants.FAVORITE_LOADS, favoriteData)
  ]);
}