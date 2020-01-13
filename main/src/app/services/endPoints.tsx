
//1: PROD
//2: QA
//3: DEV
//4: ADAPTER

const environmentVariable:number = 3;
var HOST_URL:string[];
 HOST_URL = [
    "https://schneider-api", //PROD
    "https://qa.schneider-api", // QA
     "https://int.schneider-api", //DEV
     "https://schneiderapp.herokuapp.com" // ADAPTER    
 ];
 interface EndPoints {
     [index:string]:any;
    HOME:Keys;
    
  };
  interface Keys {
    [index:string]:string;
    RECOMMENDED_LOADS:string;
 };

 export const URL_ENDPOINTS:EndPoints = {
     HOME:{
        RECOMMENDED_LOADS: "/loads"
     },
     SEARCH:{
        SEARCH_LOADS: "/search-results"
     },
     RECENT:{
         RECENT_LOADS: "/recent"
     },
     FAVORITE:{
         FAVORITE_LOADS: "/favorite"
     }
};

export default function getURLDetails(endPoint:string, urlKey:string, value?:any) {
    return {
        get_Service_Url: function () {
            var _url = "";
                _url = HOST_URL[environmentVariable] + URL_ENDPOINTS[endPoint][urlKey];
            _url = value ? _url.replace('{rcmd}', value): _url;
            return _url;
        }
    }
}
