import { ActionType, ShowToaster } from "app/schemas/carrierAssign/CarrierAssign.schema";
import * as Constants from "app/utils/constants";
import produce from "immer";

const initialState: ShowToaster = {
    showToaster: false,
};

export default (state = initialState, action: ActionType) =>
    produce(state, draft => {
        switch (action.type) {
            case Constants.SHOW_TOASTER_VALUE:
                draft.showToaster = !draft.showToaster;
                break;
            case Constants.LOAD_DATA:
                draft.loads = action.payload;
                break;
        }
    });
