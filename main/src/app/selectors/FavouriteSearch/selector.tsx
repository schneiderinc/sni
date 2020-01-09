import {createSelector} from 'reselect';

const selectData = (state:any) => state.Favorite;

export const makeFavorite = () => createSelector([selectData], Favorite => Favorite);