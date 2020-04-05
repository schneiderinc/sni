import React, { memo, useEffect, Dispatch, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getCurrentUser } from "app/selectors/selector";
import reducer from "app/reducers/App/reducer";
import saga from "app/saga/App/saga";
import { compose } from "redux";
import useInjectSaga from "app/utils/injectSaga";
import useInjectReducer from "app/utils/injectReducer";
import { useNetwork } from 'app/utils/useNetwork';
import { useDeviceInfo } from 'app/utils/useDeviceInfo';
import { updateNetworkStatus, updateDevicInfo } from 'app/actions/Login/action';
import { AuthenticationService } from 'app/services/authentication.service';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonModal, isPlatform } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { observer } from 'mobx-react-lite';
import { VaultService } from 'app/services/vault.service';
import { AuthProvider } from 'app/services/Auth';
import { VaultProvider } from 'app/services/Vault';
import { BrowserAuthPlugin } from 'app/services/browser-auth.plugin';
import { BrowserAuthService } from 'app/services/browser-auth.service';
import { LoginContainer } from "app/containers/LoginContainer";
import { App } from 'app';
import {loginSuccess} from 'app/actions/Login/action';

const key = "App";
interface PrivateProps {
  component: React.FC;
  currentUser: boolean;
}

const PrivateRoute: React.FC<any> = ({
  currentUser,
  component: WrappedComponent,
  updateNetworkStatus,
  updateDevicInfo,
  ...rest
}) => {

  // const { getNetworkStatus, networkStatus } = useNetwork();
  // const { getDeviceInfo, deviceInfo } = useDeviceInfo();

  // useEffect(() => {
  //   getNetworkStatus();
  //   getDeviceInfo();
  // }, [])

  // useEffect(() => {
  //   console.log("UPDATE NETOWKR", networkStatus);
  //   if (networkStatus != undefined || networkStatus != {})
  //     updateNetworkStatus(networkStatus);
  // }, [networkStatus])

  // useEffect(() => {
  //   console.log("Update deviceInfo", deviceInfo);
  //   if (deviceInfo != undefined || deviceInfo != {})
  //     updateDevicInfo(deviceInfo);
  // }, [deviceInfo]);
  let browserPlugin;
  if (!isPlatform("capacitor")) {
    browserPlugin = new BrowserAuthPlugin(new BrowserAuthService());
  }
  const vaultService = new VaultService(browserPlugin);
  const authService = new AuthenticationService(vaultService);
  return (
    <VaultProvider value={vaultService}>
      <AuthProvider value={authService}>
        <AppComponent authService={authService} vaultService={vaultService} Wrapper={WrappedComponent}/>
      </AuthProvider>
    </VaultProvider>
  );
  
  // return (
  //   <Route
  //     {...rest}
  //     render={(props: any) => {
  //       return currentUser ? (<WrappedComponent {...props} />) : (<Redirect to="/login" />)
  //     }}
  //   />
  // );
};
var isLoggedIn = false;
type AppComponentProps = { authService: AuthenticationService, vaultService: VaultService, Wrapper:any };
const AppComponent: React.FC<AppComponentProps> = observer((props) => {
  // mobx will reload this for us
isLoggedIn = props.authService.isLoggedIn; 

   return <IonApp>
   <IonReactRouter>
     <IonRouterOutlet>
       <Route path="/" render={() => <Redirect to="/login" />} exact={true} />
       <Route path="/app" render={() => isLoggedIn ? <props.Wrapper {...props} /> : <Redirect to="/login"/>} />
       <Route path="/login" render={() => isLoggedIn ? <Redirect to="/app/home"/> : <LoginContainer />} />
     </IonRouterOutlet>
   </IonReactRouter>
 </IonApp>
})

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
