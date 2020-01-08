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


export const doLogin = () => ({
    type: constants.LOGIN_INPROGRESS
})

export const loginSuccess = (data:any) => ({
    type: constants.LOGIN_SUCCESS,
    data
});

export const loginError = () => ({
    type: constants.LOGIN_ERROR,
})

export const logout = () => ({
    type: constants.LOGOUT,
})