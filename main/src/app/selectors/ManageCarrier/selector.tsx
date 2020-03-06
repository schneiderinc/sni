import {createSelector} from 'reselect';

const selectData = (state:any) => state.manageCarrier;

export const makeManageCarrier = () => createSelector([selectData], manageCarrier => manageCarrier.CarrierData);
export const makeManageCarrierInsurance = () => createSelector([selectData], manageCarrierInsurance => manageCarrierInsurance.CarrierInsuranceData);
export const makeManageCarrierInsurance2= () => createSelector([selectData], manageCarrierInsurance2 => manageCarrierInsurance2.CarrierInsuranceData2);
export const makemanageContact= () => createSelector([selectData], manageContact => manageContact.contactDetails);