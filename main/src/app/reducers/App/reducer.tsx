import { ActionType, GPSState } from "app/schemas/App/App.Schema";
import * as Constants from "app/utils/constants";
import produce from "immer";

const initialState: GPSState = {
    GPSData: []
};

export default (state = initialState, action: ActionType) =>

    produce(state, draft => {
        switch (action.type) {
            case Constants.UPDATE_GPS_COORDS:
                draft.GPSData = [...draft.GPSData, action.payload];
                console.log("RED121212", draft.GPSData);
                break;
        }
    });
