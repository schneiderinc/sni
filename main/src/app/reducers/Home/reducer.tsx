import { ActionType, HomeState } from "app/schemas/Home/Home.schema";
import * as Constants from "app/utils/constants";
import produce from "immer";

const initalState: HomeState = {
  loads: []
};

export default (state = initalState, action: ActionType) =>
  produce(state, draft => {
    switch (action.type) {
      case Constants.LOAD_DATA:
        draft.loads = action.payload;
      break;
    }
  });
