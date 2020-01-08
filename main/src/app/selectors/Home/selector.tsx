import {createSelector} from 'reselect';

const selectData = (state:any) => state.carrier;

export const makeSelectHome = () => createSelector([selectData], carrier => carrier.loads);