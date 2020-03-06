import * as Constants from 'app/utils/constants';
export const profileImageSet = (data:any) =>{
    console.log(data,"imgeeeeeeeee")
    return ({
        type: Constants.PROFILE_IMAGE_SET,
        payload: data
    })
} 
export const MyLoadCard = () => ({
    type: Constants.MYLOAD_CARD_DATA
   
})
export const GetMyLoadCardData = (data:any) => ({
        type: Constants.GET_MYLOAD_CARD_DATA,
        payload: data
    })
    
    
  
    
 