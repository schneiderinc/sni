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
  permissionAlertTitle: "",
  alertError: false,//  not using this.
  networkStatus: {},
  deviceInfo: {},
  Hidden:true,
  loginToken: ""
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
        draft.permissionAlertTitle = action.payload.permissionAlertTitle;
        break;
      case constants.CLOSE_PERMISSION_ALERT:
        draft.showPermissionAlert = false;
        draft.permissionAlertMessage = "";
        draft.permissionAlertTitle = "";
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
        case constants.HIDE_TAB_BAR:
          draft.Hidden = false;
          console.log(  draft.Hidden, "draft.Hidden")
          break;
      case constants.LOGOUT:
        draft.currentUser = false;
        break;
      case constants.UPDATE_NETWORK_STATUS:
        console.log("NETWORK RDUCR", action.data)
        draft.networkStatus = action.data
        break;
      case constants.UPDATE_DEVICE_INFO:
        console.log("DVC DATA", action.data);
        draft.deviceInfo = action.data
        break;
        case constants.TOKEN_DATA:
          draft.loginToken = action.data.access_token;
          break;
    }
  });

export default appReducer;
