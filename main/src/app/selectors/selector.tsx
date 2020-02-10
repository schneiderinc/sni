import { createSelector } from 'reselect';

const selectGlobal = (state: any) => state.global;
const selectApp = (state: any) => state.App;

export const makeSelectGlobal = () => createSelector([selectGlobal], global => global);

export const getLoading = () => createSelector([selectGlobal], global => global.loading);

export const getCurrentUser = () => createSelector([selectGlobal], global => global.currentUser);

export const getLoginError = () => createSelector([selectGlobal], global => global.error);

export const getUserData = () => createSelector([selectGlobal], global => global.userData);
export const makeErrorImg = () => createSelector([selectGlobal], global => global.imageError);
export const ImgErrormsg = () => createSelector([selectGlobal], global => global.ImgErrormsg);

export const getGPSDetails = () => createSelector([selectApp], App => App.GPSData)

