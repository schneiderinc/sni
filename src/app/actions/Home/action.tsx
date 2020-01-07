import * as Constants from 'app/utils/constants';

export const updateData = () => ({
    type: Constants.UPDATE_DATA
})

export const loadData = (data:any) => ({
    type: Constants.LOAD_DATA,
    payload: data
})