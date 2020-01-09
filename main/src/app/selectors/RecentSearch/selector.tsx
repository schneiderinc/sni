import {createSelector} from 'reselect';

const selectData = (state:any) => state.recent;

export const makeRecent = () => createSelector([selectData], recent => recent.recent);