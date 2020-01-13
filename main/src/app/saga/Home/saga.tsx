import {all, put, call, takeLatest} from 'redux-saga/effects';
import {showLoading, hideLoading} from 'app/actions/Login/action';

import * as constants from 'app/utils/constants';
import request from 'app/utils/request';
import { loadData } from 'app/actions/Home/action';
//import { LOAD_DATA } from 'app/utils/mock_Data';
//import { Recommended } from 'app/models/home/Loads.model';

//const __model:Recommended = new Recommended();
export function* updateData() {
  try {
    yield put(showLoading());
    const repos = yield call(request, ["HOME","RECOMMENDED_LOADS"]);
    //console.log(repos);
    //const repos = LOAD_DATA;
    yield put(loadData(repos.data));
    yield put(hideLoading());
  } catch(e) {
   // yield __model.getLoads() && put(loadData(__model.getLoads()));
    yield put(hideLoading());
  }
  
}

export default function* rootSaga() {
  yield all([
    takeLatest(constants.UPDATE_DATA, updateData)
  ]);
}