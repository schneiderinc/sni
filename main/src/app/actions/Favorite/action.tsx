import * as Constants from 'app/utils/constants';
export const getFavorite = (data: any) => ({
        type: Constants.GET_FAVORITE,
        payload: data

    })