import React, { memo, useEffect, Dispatch } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getCurrentUser } from "app/selectors/selector";
import { Redirect, Route } from "react-router";
import reducer from "app/reducers/App/reducer";
import saga from "app/saga/App/saga";
import { compose } from "redux";
import useInjectSaga from "app/utils/injectSaga";
import useInjectReducer from "app/utils/injectReducer";
import { useNetwork } from 'app/utils/useNetwork';
import { useDeviceInfo } from 'app/utils/useDeviceInfo';
import { updateNetworkStatus, updateDevicInfo } from 'app/actions/Login/action';
const key = "App";
interface PrivateProps {
  component: React.FC;
  currentUser: boolean;
  path: string;
}

const PrivateRoute: React.FC<any> = ({
  currentUser,
  component: WrappedComponent,
  updateNetworkStatus,
  updateDevicInfo,
  ...rest
}) => {

  const { getNetworkStatus, networkStatus } = useNetwork();
  const { getDeviceInfo, deviceInfo } = useDeviceInfo();

  useEffect(() => {
    getNetworkStatus();
    getDeviceInfo();
  }, [])

  useEffect(() => {
    console.log("UPDATE NETOWKR", networkStatus);
    if (networkStatus != undefined || networkStatus != {})
      updateNetworkStatus(networkStatus);
  }, [networkStatus])

  useEffect(() => {
    console.log("Update deviceInfo", deviceInfo);
    if (deviceInfo != undefined || deviceInfo != {})
      updateDevicInfo(deviceInfo);
  }, [deviceInfo]);
  return (
    <Route
      {...rest}
      render={(props: any) => {
        return currentUser ? (
          <WrappedComponent {...props} />
        ) : (
            <Redirect to="/login" />
          );
      }}
    />
  );
};


const mapStateToProps = createStructuredSelector({
  currentUser: getCurrentUser()
});
const mapDispatchToProps = (dispatch: Function) => ({
  updateNetworkStatus: (data: any) => dispatch(updateNetworkStatus(data)),
  updateDevicInfo: (data: any) => dispatch(updateDevicInfo(data))
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = useInjectReducer({ key, reducer });
const withSaga = useInjectSaga({ key, saga });

// export default compose(
//   withSaga,
//   withReducer,
//   withConnect
// )(PrivateRoute);

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
