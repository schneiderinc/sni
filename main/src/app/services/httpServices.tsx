import http from 'axios';
/**
 * To make service API alls with AXIOS Library.
 */
class __HTTP_SERVICES {
/**
 * To make service calls with http methods.
 * @param {*} urlEntity formed URL.
 * @param {*} headers consolidated Headers. 
 * @param {*} method Http methods. 
 * @param {*} data request data. 
 * @param {strijg} key end point key. 
 * @param {array} requests service requests collection. 
 * @param {array} progress callback for monitoring the service progress. 
 * @returns {promie} result of the Service API.
 */
    __request (urlEntity:string, headers:any, method:string, data:any, key:string, requests:any, duration:number, progress:any ){
        const _serviceUrl = urlEntity.toString();
        if(requests[key]){
            requests[key].cancel();
        } else {
            requests[key] = http.CancelToken.source();
        }

        var values:any;

        if(key === "LOGIN"){
            values = {
                //Http methods
                method: method,
                //Service endpoint URL
                url: _serviceUrl,
                //Consolidated Headers
                headers: headers,
                //Request data
                data: data,
                //setting timeout for request
                timeout: duration
              }
              return http(values);            
        } else {

            values = {
                //Http methods
                method: method,
                //Service endpoint URL
                url: _serviceUrl,
                //Consolidated Headers
                headers: headers,
                //Request data
                data: data,
                //Download progress event
                onDownloadProgress: progress,
                //Upload progress evnt
                onUploadProgress : progress,
                //setting timeout for request
                timeout: duration
            }
            return http(values);
        }
    }
};
export default __HTTP_SERVICES;
