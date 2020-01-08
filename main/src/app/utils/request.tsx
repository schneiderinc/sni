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
  return commonService.get(args[0],args[1]);
} 