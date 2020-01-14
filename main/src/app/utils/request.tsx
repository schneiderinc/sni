import Service from 'app/services/common.services';

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The arguments we want to pass to "Axios"
 *
 * @return {object}           The response data
 */
export default function request(args:any) {
  var commonService = new Service();
  if(args[0] !== "LOGIN") {
    return commonService.get(args[0],args[1]);

  } else {
    return commonService.post(args[0],args[1], args[2], args[3], args[4], args[5]);
        
  }
} 
