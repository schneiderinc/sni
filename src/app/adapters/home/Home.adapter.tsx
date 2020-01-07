import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getURLDetails from 'app/services/endPoints';
import { LOAD_DATA } from 'app/utils/mock_Data';

var _mockObj = new MockAdapter(axios, { delayResponse: 1000 });
export default function run() {

  var _endPoint: any = getURLDetails("HOME", "RECOMMENDED_LOADS", null);
  _mockObj.onGet(_endPoint.get_Service_Url()).reply(200, LOAD_DATA);
}
