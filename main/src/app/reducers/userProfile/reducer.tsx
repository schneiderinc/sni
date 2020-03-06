import {ActionType, UserProfileState} from "app/schemas/userProfile/userProfile.Schema";
import * as Constants from "app/utils/constants";
import produce from "immer";

const initialState: UserProfileState = {

    ProfileData:[], 
};

export default (state = initialState, action: ActionType) =>
  produce(state, draft => {
    switch (action.type) {
  
      case  Constants.GET_USER_PROFILE_DATA:
       draft.ProfileData = action.payload;
       break;
    }
  });