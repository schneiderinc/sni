import {ActionType, ManageCarrierState} from "app/schemas/manageCarrier/manageCarrier.Schema";
import * as Constants from "app/utils/constants";
import produce from "immer";

const initialState: ManageCarrierState = {

 CarrierData:[],
 CarrierInsuranceData:[],
 CarrierInsuranceData2:[],
 contactDetails:[]
};

export default (state = initialState, action: ActionType) =>
  produce(state, draft => {
    switch (action.type) {
  
      case  Constants.GET_CARRIER_MANAGE_DATA:
       draft.CarrierData = action.payload;
       break;
       case  Constants.GET_CARRIER_INSURANCE_DATA:
        draft.CarrierInsuranceData = action.payload;
        break;
        case  Constants.GET_CARRIER_INSURANCE_DATA2:
          draft.CarrierInsuranceData2 = action.payload;
          break;
          case  Constants.GET_CARRIER_CONTACT_DATA:
            draft.contactDetails = action.payload;
            break;
    }
  });
