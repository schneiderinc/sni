import * as Constants from "app/utils/constants";
export const UserProfileData = () => ({
    type: Constants.USER_PROFILE_DATA
})
export const GetUserProfileData = (data:any) => ({
    type: Constants.GET_USER_PROFILE_DATA,
    payload: data
})