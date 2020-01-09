import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getURLDetails from 'app/services/endPoints';
import { RECENT_DATA } from 'app/utils/mock_Data2';

var _mockObj = new MockAdapter(axios, { delayResponse: 1000 });
export default function run() {

  var _endPoint: any = getURLDetails("RECENT", "RECENT_LOADS", null);
  _mockObj.onGet(_endPoint.get_Service_Url()).reply(200, RECENT_DATA);
}
