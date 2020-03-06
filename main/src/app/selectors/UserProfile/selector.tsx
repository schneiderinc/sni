import {createSelector} from 'reselect';

const selectData = (state:any) => state.profileData;

export const makeUserProfile = () => createSelector([selectData], userProfile => userProfile.ProfileData);

    


