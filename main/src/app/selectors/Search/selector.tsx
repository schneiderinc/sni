import {createSelector} from 'reselect';

const selectData = (state:any) => state.search;

export const makeSearch = () => createSelector([selectData], search => search.loads);