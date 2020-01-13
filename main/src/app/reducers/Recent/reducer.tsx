import {ActionType, RecentState} from "app/schemas/Recent/Recent.Schema";
import * as Constants from "app/utils/constants";
import produce from "immer";

const initialState: RecentState = {
  recent: []
 
};

export default (state = initialState, action: ActionType) =>
  produce(state, draft => {
    switch (action.type) {
      case   Constants.GET_RECENT:
        draft.recent = action.payload;
      break;
    }
  });
