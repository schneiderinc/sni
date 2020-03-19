import React, { useEffect } from "react";
import { IonLoading } from '@ionic/react';
import { createStructuredSelector } from "reselect";
import { getLoading } from "./selectors/selector";

import useInjectSaga from "app/utils/injectSaga";
import useInjectReducer from "app/utils/injectReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { Plugins } from '@capacitor/core';

import reducer from "app/reducers/App/reducer";
import saga from "app/saga/App/saga";

import RootLevelTabs from 'app/components/app/Bars/Bar-bottom'
import { useAppState } from '@ionic/react-hooks/app/useApp'
import { updateGpsCoordinates } from './actions/App/action';
import { useGeolocation } from 'app/utils/useGeolocation';
import { PermissionAlert } from 'app/components/PermissionsAlert/PermissionAlert'
import { getShowPermissionAlert, getPermissionAlertMessage, getPermissionAlertTitle } from 'app/selectors/selector'
import {makeDriverAssign} from 'app/selectors/selector'
import { closePermissionAlert, showPermissionAlert } from 'app/actions/Login/action';
const key = "App";
const App: React.FC = (props: any) => {

  const { loading } = props;
  const { Geolocation } = Plugins;
  const { isAvailable, state: appState } = useAppState();
  const { watchCurrentPosition, currentPosition, errorMessage } = useGeolocation();

  console.log( props.hiddenbarBottom,'heloo')
  useEffect(() => {
    console.log("MOUNT");
    try {
      watchCurrentPosition();
    }
    catch (error) {
      console.log("ERROR:", error);
    }
  }, [])

  useEffect(() => {
    console.log("UPDATE:Postion");
    if (!appState) {
    }
    if (currentPosition) {
      props.updateGpsCoordinates(currentPosition);
    }
  }, [currentPosition])

  useEffect(() => {
    console.log("UPDATE:Error");
    if (!appState) {
    }

    if (!errorMessage.errorMsg)
      return;
    props.showPermissionAlert({
      isShowPermissionAlert: true,
      permissionAlertMessage: errorMessage.errorMsg,
      permissionAlertTitle: errorMessage.title
    });

  }, [errorMessage])

  return (
    <React.Fragment>
      <IonLoading
        isOpen={loading}
        message={'loading...'}
        show-backdrop={false}
        spinner="circles"
      />
      {props.isShowPermissionAlert
        ? <PermissionAlert
          title={props.permissionAlertTitle}
          isOpen={props.isShowPermissionAlert}
          message={props.permissionAlertMessage}
          close={props.closePermissionAlert} />
        : null}

      <RootLevelTabs isBarBottom={props.hiddenbarBottom} />

    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: getLoading(),
  isShowPermissionAlert: getShowPermissionAlert(),
  permissionAlertMessage: getPermissionAlertMessage(),
  permissionAlertTitle: getPermissionAlertTitle(),
  hiddenbarBottom: makeDriverAssign()
})

const mapDispatchToProps = (dispatch: Function) => ({
  updateGpsCoordinates: (data: any) => dispatch(updateGpsCoordinates(data)),
  closePermissionAlert: () => dispatch(closePermissionAlert()),
  showPermissionAlert: (data: any) => dispatch(showPermissionAlert(data))
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = useInjectReducer({ key, reducer });
const withSaga = useInjectSaga({ key, saga });

export default compose(
  withSaga,
  withReducer,
  withConnect
)(App);