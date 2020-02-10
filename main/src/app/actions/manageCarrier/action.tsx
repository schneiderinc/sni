import * as Constants from 'app/utils/constants';
export const CarrierManageData = () => ({
    type: Constants.CARRIER_MANAGE_DATA
   
})
export const GetCarrierManageData = (data:any) => ({
        type: Constants.GET_CARRIER_MANAGE_DATA,
        payload: data
    })
    export const CarrierInsuranceData = () =>({
            type: Constants.CARRIER_INSURANCE_DATA
           
        })
    
    export const GetCarrierInsuranceData = (data:any) => ({
        type: Constants.GET_CARRIER_INSURANCE_DATA,
        payload: data
    })
    export const CarrierInsuranceData2 = () =>({
        type: Constants.CARRIER_INSURANCE_DATA2
       
    })

export const GetCarrierInsuranceData2 = (data:any) => ({
    type: Constants.GET_CARRIER_INSURANCE_DATA2,
    payload: data
})
    