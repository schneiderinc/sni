import {MyLoadState} from "app/schemas/myload/myload.Schema";
import * as Constants from "app/utils/constants";
import produce from "immer";

const initialState: MyLoadState = {
  profileImg:[],
  myLoadCardData:[]

};

export default (state = initialState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      // case   Constants.PROFILE_IMAGE_SET:
    
      //   draft.profileImg = action.payload;
      //   console.log(draft.profileImg,"action")
      // break;
      case  Constants.GET_MYLOAD_CARD_DATA:
       draft.myLoadCardData = action.payload;
      
      break;
      case  Constants.GET_MYLOAD_CARD_DATA:
       draft.myLoadCardData = action.payload;
      
      break;
    
    }
  });
