import React, { useEffect, useState } from "react";
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

const key = "App";
const App: React.FC = (props: any) => {

  const { loading } = props;
  const { Geolocation } = Plugins;
  const [currentPosition, setCurrentPosition] = useState();
  const { isAvailable, state: appState } = useAppState();
  let intervalID: any;

  useEffect(() => {
    try {
      watchCurrentPosition();
    }
    catch (error) {
      console.log("ERROR:", error);
    }
  }, [])

  useEffect(() => {

    if (!appState) {

    }

    const coordinates = currentPosition;
    if (coordinates) {
      props.updateGpsCoordinates(coordinates);
    }
  }, [currentPosition])

  /* Commented Code as SetInterval is not flow is not working in iOS. */
  const watchCurrentPosition = () => {
    if (!intervalID) {
      intervalID = setInterval(() => {
        getCurrentPosition();
      }, 6000, intervalID)
    }
  }

  // const watchCurrentPosition = () => {
  //   console.log("intervalID", intervalID)
  //   try {
  //     if (!intervalID) {
  //       intervalID = Geolocation.watchPosition({ enableHighAccuracy: false, maximumAge: 5000, timeout: 5000 }, (result, error) => {
  //         if (result) {
  //           console.log("GPSDATA:::", result);

  //           setCurrentPosition(captureGPSData(result));
  //         } else {
  //           console.log('GPS Error', error);
  //         }
  //       })
  //     }
  //   }
  //   catch (error) {
  //     console.log("GPS catch Error:", error);
  //   }
  // }

  const captureGPSData = (_result: any) => {

    const { timestamp } = _result;
    const { latitude, longitude } = _result.coords;
    const gpsData = {
      timestamp: new Date(timestamp).toLocaleString("en-US").toString(),
      latitude,
      longitude
    }
    return gpsData;

  }
  const getCurrentPosition = () => {
    try {
      Geolocation.getCurrentPosition({ maximumAge: 0, enableHighAccuracy: false, timeout: 0 }).then((result) => {
        const { timestamp } = result;
        const { latitude, longitude } = result.coords;
        const gpsData = {
          timestamp: new Date(timestamp).toLocaleString("en-US").toString(),
          latitude,
          longitude
        }
        setCurrentPosition(gpsData);
      }, (error) => {
        console.log(" getCurrentPosition Error:", error);
      });
    } catch (error) {
      console.log("GPS catch Error:", error);
    }

  }

  return (
    <React.Fragment>
      <IonLoading
        isOpen={loading}
        message={'loading...'}
        show-backdrop={false}
        spinner="circles"
      />
      <RootLevelTabs />
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: getLoading(),
})

const mapDispatchToProps = (dispatch: Function) => ({
  updateGpsCoordinates: (data: any) => dispatch(updateGpsCoordinates(data))
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