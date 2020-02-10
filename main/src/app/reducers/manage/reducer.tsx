import {ManageState} from "app/schemas/manage/manage.Schema";
import * as Constants from "app/utils/constants";
import produce from "immer";

const initialState: ManageState = {
  profileImg:[],
  manageCardData:[]

};

export default (state = initialState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      // case   Constants.PROFILE_IMAGE_SET:
    
      //   draft.profileImg = action.payload;
      //   console.log(draft.profileImg,"action")
      // break;
      case  Constants.GET_MANAGE_CARD_DATA:
       draft.manageCardData = action.payload;
      
      break;
    
    }
  });
