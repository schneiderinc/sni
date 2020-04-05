import { IonicAuthOptions } from '@ionic-enterprise/auth';

export const nativeAzureConfig: IonicAuthOptions = {
  // client or application id for provider
  clientID: 'f045d15c-3dbe-41c8-a229-aafa5394318b',
  // This is the expected redirectUri from the login page.
  redirectUri: 'com.cognizantmobilityenterprise.schneider://callback',
  // requested scopes from provider
  scope: 'openid offline_access https://schneidercarexpdev.onmicrosoft.com/api/readscope https://schneidercarexpdev.onmicrosoft.com/api/writescope',
  // The discovery url for the provider
  discoveryUrl:
    'https://schneidercarexpdev.b2clogin.com/schneidercarexpdev.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1A_signup_signin',
  // The audience if applicable
  audience: '',
  // The expected logout url
  logoutUrl: '',
  // The platform which we are running on
  platform: 'capacitor',
  // The type of iOS webview to use. 'shared' will use a webview that can share session/cookies
  // on iOS to provide SSO across multiple apps but will cause a prompt for the user which asks them
  // to confirm they want to share site data with the app. 'private' uses a webview which will not
  // prompt the user but will not be able to share session/cookie data either for true SSO across
  // multiple apps.
  iosWebView: 'private',
  // The auth provider.
  authConfig: 'azure',
  // This sets the color of the toolbar at the top of the login webview for android.
  //  Red is just to call attention to what is being set (you don't want to use Red)
  androidToolbarColor: ''
};

export const webAzureConfig: IonicAuthOptions = {
  // client or application id for provider
  clientID: 'f045d15c-3dbe-41c8-a229-aafa5394318b',
  // This is the expected redirectUri from the login page.
  redirectUri: 'http://localhost:3000/login',
  // requested scopes from provider
  scope: 'openid offline_access https://schneidercarexpdev.onmicrosoft.com/api/readscope',
  // The discovery url for the provider
  discoveryUrl:
    'https://schneidercarexpdev.b2clogin.com/schneidercarexpdev.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1A_signup_signin',
  // The audience if applicable
  audience: 'https://graph.microsoft.com',
  // The expected logout url
  logoutUrl: 'http://localhost:3000/login',
  // The platform which we are running on
  platform: 'web',
  // The auth provider.
  authConfig: 'azure'
};

export const environment = {
  production: false,
  // dataService: 'http://localhost:5000' // switch to this to run local
  dataService: 'https://cs-demo-api.herokuapp.com'
};
