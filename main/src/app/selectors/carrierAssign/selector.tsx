import { createSelector } from 'reselect';

const selectData = (state: any) => state.carrierAssigned;

export const getShowToasterValue = () => createSelector([selectData], ShowToaster => ShowToaster.showToaster);