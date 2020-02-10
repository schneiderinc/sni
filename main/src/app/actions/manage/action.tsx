import * as Constants from 'app/utils/constants';
export const profileImageSet = (data:any) =>{
    console.log(data,"imgeeeeeeeee")
    return ({
        type: Constants.PROFILE_IMAGE_SET,
        payload: data
    })
} 
export const ManageCard = () => ({
    type: Constants.MANAGE_CARD_DATA
   
})
export const GetManageCardData = (data:any) => ({
        type: Constants.GET_MANAGE_CARD_DATA,
        payload: data
    })
    
    
  
    
 