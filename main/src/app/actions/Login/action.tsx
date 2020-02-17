import * as constants from '../../utils/constants';

export const updateDate = () => ({
    type: constants.LAST_UPDATED_DATE,
    date: new Date().toISOString()
});

export const showLoading = () => ({
    type: constants.TOGGLE_LOADING,
    status: true
});

export const hideLoading = () => ({
    type: constants.TOGGLE_LOADING,
    status: false
});


export const doLogin = (username: string, password: string, rememberme: boolean) => ({
    type: constants.LOGIN_INPROGRESS,
    payload: { username, password, rememberme }
})

export const loginSuccess = (data: any) => ({
    type: constants.LOGIN_SUCCESS,
    data
});

export const loginError = (data: any) => ({
    type: constants.LOGIN_ERROR,
    data
})

export const logout = () => ({
    type: constants.LOGOUT,
})

export const showPermissionAlert = (data: any) => ({
    type: constants.PERMISSION_ALERT_MESSAGE,
    payload: data
});

export const closePermissionAlert = () => ({
    type: constants.CLOSE_PERMISSION_ALERT

});