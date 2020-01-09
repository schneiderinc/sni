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
        console.log(action.payload,"payload")
        draft.recent = action.payload;
       console.log(draft.recent,"recnet")
        break;
    }
  });
