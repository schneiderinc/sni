import { createSelector } from 'reselect';

const selectGlobal = (state: any) => state.global;
const selectApp = (state: any) => state.App;

export const makeSelectGlobal = () => createSelector([selectGlobal], global => global);

export const getLoading = () => createSelector([selectGlobal], global => global.loading);

export const getCurrentUser = () => createSelector([selectGlobal], global => global.currentUser);

export const getLoginError = () => createSelector([selectGlobal], global => global.error);

export const getUserData = () => createSelector([selectGlobal], global => global.userData);

export const getShowPermissionAlert = () => createSelector([selectGlobal], global => global.showPermissionAlert);

export const getPermissionAlertMessage = () => createSelector([selectGlobal], global => global.permissionAlertMessage);

export const getPermissionAlertTitle = () => createSelector([selectGlobal], global => global.permissionAlertTitle);

export const getGPSDetails = () => createSelector([selectApp], App => App.GPSData)

