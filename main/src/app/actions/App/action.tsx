import * as Constants from 'app/utils/constants';
export const updateGpsCoordinates = (data: any) => ({
    type: Constants.UPDATE_GPS_COORDS,
    payload: data
})
