import { useState } from 'react';
import { Plugins } from '@capacitor/core';
import { infinite } from 'ionicons/icons';
const { Geolocation, GeolocationOptions } = Plugins;

const ERROR_ACCESS_DENIED_IOS =
  'The operation couldn’t be completed. (kCLErrorDomain error 1.)';
const ERROR_ACCESS_DENIED_ANDROID = 'User denied location permission';
const ERROR_ACCESS_DENIED_WEB = 'User denied Geolocation';
const ERROR_ACCESS_LOCATION_UNAVAILABLE_ANDROID = 'location unavailable';

export function useGeolocation() {
  const [currentPosition, setCurrentPosition] = useState();
  const [errorMessage, setErrorMessage] = useState<any>({});
  let intervalID: any;

  /* Commented Code as SetInterval is not flow is not working in iOS. */

  const watchCurrentPosition = () => {
    if (!intervalID) {
      intervalID = setInterval(
        () => {
          getCurrentPosition();
        },
        60000,
        intervalID
      );
    }
  };

  //   const watchCurrentPosition = () => {
  //     console.log('intervalID', intervalID);
  //     try {
  //       if (!intervalID) {
  //         intervalID = Geolocation.watchPosition(
  //           { enableHighAccuracy: false, maximumAge: Infinity, timeout: 15000 },
  //           (result, error) => {
  //             if (result) {
  //               console.log('GPSDATA:::', result);

  //               setCurrentPosition(captureGPSData(result));
  //             } else {
  //               console.log('GPS Error', error);
  //             }
  //           }
  //         );
  //       }
  //     } catch (error) {
  //       console.log('GPS catch Error:', error);
  //     }
  //   };

  const captureGPSData = (_result: any) => {
    const { timestamp } = _result;
    const { latitude, longitude } = _result.coords;
    const gpsData = {
      timestamp: new Date(timestamp).toLocaleString('en-US').toString(),
      latitude,
      longitude
    };
    return gpsData;
  };

  const getCurrentPosition = () => {
    try {
      Geolocation.getCurrentPosition({
        maximumAge: 1000,
        enableHighAccuracy: false,
        timeout: 60000
      }).then(
        result => {
          setCurrentPosition(captureGPSData(result));
        },
        error => {
          console.log(' getCurrentPosition Error:', JSON.stringify(error));
          const errorMsg = error.errorMessage || error.message || error;
          if (
            errorMsg === ERROR_ACCESS_DENIED_ANDROID ||
            errorMsg === ERROR_ACCESS_LOCATION_UNAVAILABLE_ANDROID ||
            errorMsg === ERROR_ACCESS_DENIED_IOS ||
            errorMsg === ERROR_ACCESS_DENIED_WEB
          ) {
            const date = new Date();
            setErrorMessage({ date, errorMsg });
          }
        }
      );
    } catch (error) {
      console.log('GPS catch Error:', error);
    }
  };

  return {
    watchCurrentPosition,
    currentPosition,
    errorMessage
  };
}
