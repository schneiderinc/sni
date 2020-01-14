import {createSelector} from 'reselect';

const selectGlobal = (state:any) => state.global;

export const makeSelectGlobal = () => createSelector([selectGlobal], global => global);

export const getLoading = () => createSelector([selectGlobal],  global => global.loading);

export const getCurrentUser = () => createSelector([selectGlobal],  global => global.currentUser);

export const getLoginError = () => createSelector([selectGlobal],  global => global.error);