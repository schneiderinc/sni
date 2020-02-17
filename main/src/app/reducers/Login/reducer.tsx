import produce from "immer";
import * as constants from "../../utils/constants";
import { GlobalState } from "../../schemas/schema";

const initalState: GlobalState = {
  lastUpdatedDate: "",
  loading: false,
  error: false,
  currentUser: false,
  userData: null,
  showPermissionAlert: false,
  permissionAlertMessage: "",
  alertError: false //  not using this.
};

const appReducer = (state = initalState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.LAST_UPDATED_DATE:
        draft.lastUpdatedDate = action.date;
        break;
      case constants.TOGGLE_LOADING:
        draft.loading = action.status;
        break;
      case constants.PERMISSION_ALERT_MESSAGE:
        draft.showPermissionAlert = action.payload.isShowPermissionAlert;
        draft.permissionAlertMessage = action.payload.permissionAlertMessage;
        break;
      case constants.CLOSE_PERMISSION_ALERT:
        draft.showPermissionAlert = false;
        draft.permissionAlertMessage = "";
        break;
      case constants.LOGIN_INPROGRESS:
        draft.error = false;
        break;
      case constants.LOGIN_SUCCESS:
        draft.currentUser = true;
        draft.userData = action.data;
        break;
      case constants.LOGIN_ERROR:
        draft.error = true;
        break;
      case constants.LOGOUT:
        draft.currentUser = false;
        break;
    }
  });

export default appReducer;
