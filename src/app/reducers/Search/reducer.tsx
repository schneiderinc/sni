import { ActionType, SearchState} from "app/schemas/Search/Search.schema";
import * as Constants from "app/utils/constants";
import produce from "immer";

const initalState:SearchState = {
  loads: [],
  params: {}
};

export default (state = initalState, action: ActionType) =>
  produce(state, draft => {
    switch (action.type) {
      case Constants.SEARCH_DATA:
        draft.params = action.payload;
        break;
        case "loadSearchData":
        draft.loads = action.payload;
        break;
    }
  });
