import { ActionType, FavoriteState } from "app/schemas/Favorite/Favorite.Schema";
import * as Constants from "app/utils/constants";
import produce from "immer";

const initialState: FavoriteState = {
  Favorite: []

};

export default (state = initialState, action: ActionType) =>
  produce(state, draft => {
    switch (action.type) {
      case Constants.GET_FAVORITE:
        draft.Favorite = action.payload;
        break;
    }
  });
