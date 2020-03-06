import {createSelector} from 'reselect';

const selectData = (state:any) => state.myload;

// export const makeSelectImg = () => createSelector([selectData], manage => manage.profileImg);
export const makeMyLoadCardData = () => createSelector([selectData], myload => myload.myLoadCardData);

