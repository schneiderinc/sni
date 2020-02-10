import {all, put, call, takeLatest} from 'redux-saga/effects';
import {showLoading, hideLoading} from 'app/actions/Login/action';

import * as constants from 'app/utils/constants';
import {GetCarrierManageData,GetCarrierInsuranceData,GetCarrierInsuranceData2} from 'app/actions/manageCarrier/action';
import {carrierProfileInsurance,carrierProfile,carrierProfileInsurance2} from 'app/utils/mock_Data';

export function* CarrierManageData() {

  try {
    yield put(showLoading());
   const repos=carrierProfile;
   yield put(GetCarrierManageData(repos));
    yield put(hideLoading());
  } catch(e) {
    yield put(hideLoading());
  }
  
}

export function* CarrierInsuranceManageData() {

    try {
      yield put(showLoading());
     const repos=carrierProfileInsurance;
     yield put(GetCarrierInsuranceData(repos));
      yield put(hideLoading());
    } catch(e) {
      yield put(hideLoading());
    }
    
  }
  export function* CarrierInsuranceManageData2() {

    try {
      yield put(showLoading());
     const repos=carrierProfileInsurance2;
     yield put(GetCarrierInsuranceData2(repos));
      yield put(hideLoading());
    } catch(e) {
      yield put(hideLoading());
    }
    
  }


export default function* rootSaga() {
  yield all([
  takeLatest(constants.CARRIER_MANAGE_DATA, CarrierManageData),
  takeLatest(constants.CARRIER_INSURANCE_DATA, CarrierInsuranceManageData),
  takeLatest(constants.CARRIER_INSURANCE_DATA2, CarrierInsuranceManageData2)

  ]);
}