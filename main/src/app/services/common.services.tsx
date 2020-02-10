
import getURLDetails from './endPoints';
import HTTP from './httpServices';
/**
 * This common service is used to make GET and POST Web API calls.
 */
var serviceRequests = {};
class commonService {
    /**
     * To fetch data from the Web Service API.
     * @param {string} endPoint end point value.
     * @param {string} urlKey url key value.
     * @param {*} data request data to be transfered.
     * @param {*} token token value.
     * @param {*} responseType response type.
     * @param {*} serviceProgress callback for monitoring service progress. 
     * @returns {promise} result of the Service API.
     */

    get(endPoint: string, urlKey: string, data?: any, token?: string, responseType?: string, serviceProgress?: Function) {
        var _endPointEntity = getURLDetails(endPoint, urlKey, data);
        var _this = this;
        return new Promise(function (resolve: any, reject: any) {
            if (_endPointEntity) {
                (new HTTP()).__request(_endPointEntity.get_Service_Url(), _this.getHeaders(endPoint, token, responseType), 'get', null, urlKey, serviceRequests, _this.set_TimeOut(), function (pgr: any) {
                    serviceProgress && serviceProgress(pgr);
                }).then((response: any) => {
                    // Success
                    resolve(response.data);
                }).catch((error: any) => {
                    reject(error);
                });
            } else {
                reject("No URL is provided for Service Request");
            }
        })

    }
    /**
     * To post data to the Web Service API. 
     * if there is no specic functional programming is designated for the post API, the above GET methods will be changed to single common metohd in future based on the excersize.
     * @param {string} endPoint end_point.
     * @param {string} urlKey url key value.
     * @param {*} data request data to be transfered.
     * @param {*} token token value.
     * @param {*} responseType response type.
     * @param {*} serviceProgress callback for monitoring service progress. 
     * @returns {promise} result of the Service API.
     */

    post(endPoint: string, urlKey: string, data: any, token: string, requestData?: any, responseType?: any, serviceProgress?: any) {
        var _endPointEntity = getURLDetails(endPoint, urlKey, data);
        console.log("_endPointEntity", _endPointEntity.get_Service_Url());
        var _dataString = JSON.stringify(requestData);
        var _this = this;
        if (endPoint === "LOGIN") {
            _dataString = requestData;
        }
        return new Promise(function (resolve: any, reject: any) {
            if (_endPointEntity) {
                (new HTTP()).__request(_endPointEntity.get_Service_Url(), _this.getHeaders(endPoint, token, responseType), 'post', _dataString, urlKey, serviceRequests, _this.set_TimeOut(), function (pgr: any) {
                    serviceProgress && serviceProgress(pgr);
                }).then((response) => {
                    resolve(response.data);
                    // console.log("Response:::", JSON.stringify(response.data));
                    console.log("access_token:::", response.data.access_token);
                    console.log("token_type:::", response.data.token_type);
                    console.log("expires_in:::", response.data.expires_in);
                    console.log("refresh_token:::", response.data.refresh_token);
                    console.log("id_token:::", response.data.id_token);
                    // console.log(response.data.access_token.de);
                }).catch((error) => {
                    reject(error);
                });
            } else {
                reject("No URL is provided for Service Request");
            }
        });
    }
    /**
 * To get Headers information for the specified servcie API.
 * @param {*} token token value.
 * @param {*} clientId IBM client ID. 
 * @param {*} responseType response type. 
 * @returns {object} consolidated header list.
 */
    getHeaders(endPoint?: string, token?: string, responseType?: string) {
        var headers = {
            "Content-Type": "application/json",
            "accept": "application/vnd.github.VERSION.raw"
        };
        if (token != null) {
            JSON.parse(JSON.stringify(headers)).Authorization = "Bearer " + token;
        }
        if (endPoint === "LOGIN") {
            return {
                token: responseType
            };
        }
        return headers;
    }
    /**
     * To cancel request 
     * @param {string} endPointKey response type.
     */
    cancelRequest(endPointKey: string) {
        var __currentReqest = JSON.parse(JSON.stringify(serviceRequests))[endPointKey];
        __currentReqest.cancel(endPointKey + " Service Request has been cancelled by Agent")
    }
    /**
     * To set timeout for request 
     * @returns {number} specific time out based on end point key.
     */
    set_TimeOut() {

        return 120000; //Default maximum 10 seconds for any API Call.
    }
};
export default commonService;
