
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
     "https://api.github.com/repos/suneelc/apis/git/blobs" ,// ADAPTER
    "https://localhost:8100"
    
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
        RECOMMENDED_LOADS: "/820e3eacce7230627022edfa40075a6b9729680d"
     },
     SEARCH:{
        SEARCH_LOADS: "/676db37069dc3393c69595bb5566449e11a34aa8"
     },
     RECENT:{
         RECENT_LOADS: "/xyz"
     }
};

export default function getURLDetails(endPoint:string, urlKey:string, value?:any) {
    return {
        get_Service_Url: function () {
            var _url = "";
                _url = HOST_URL[environmentVariable] + URL_ENDPOINTS[endPoint][urlKey];
                console.log(_url,"url");
            _url = value ? _url.replace('{rcmd}', value): _url;
            return _url;
        }
    }
}
