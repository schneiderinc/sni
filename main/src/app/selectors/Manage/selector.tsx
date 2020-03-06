import {createSelector} from 'reselect';

const selectData = (state:any) => state.manage;

// export const makeSelectImg = () => createSelector([selectData], manage => manage.profileImg);
export const makeManageCardData = () => createSelector([selectData], manage => manage.manageCardData);

