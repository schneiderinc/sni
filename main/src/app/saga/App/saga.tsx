import { all, put, call, takeLatest } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'app/actions/Login/action';

import * as constants from 'app/utils/constants';
import request from 'app/utils/request';
import { loadData } from 'app/actions/Home/action';
//import { LOAD_DATA } from 'app/utils/mock_Data';
//import { Recommended } from 'app/models/home/Loads.model';

//const __model:Recommended = new Recommended();
export function* updateGpsData(data: any) {
    try {
        const body = { "gps": data.payload }
        console.log("GPS", data.payload);
        yield put(showLoading());
        const repos = yield call(request, ["APP", "GPS_COORDS", null, "Content-Type", body]);
        yield put(hideLoading());
    } catch (e) {
        // yield __model.getLoads() && put(loadData(__model.getLoads()));
        yield put(hideLoading());
    }

}

export default function* rootSaga() {
    yield all([
        takeLatest(constants.UPDATE_GPS_COORDS, updateGpsData)
    ]);
}