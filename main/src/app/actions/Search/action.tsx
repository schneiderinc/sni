import * as Constants from 'app/utils/constants';

export const SEARCH_DATA = (data:any) => ({
    type: Constants.SEARCH_DATA,
    payload: data
})

export const loadSearchData = (data:any) => ({
    type: "loadSearchData",
    payload: data
})