import { setObject, getObject,clear } from "app/utils/common";

export class LogIn {
    setAccessToken(accessToken: any) {
        return setObject('Access_Token', accessToken);
    }

    getAccessToken() {
        return getObject('Access_Token');
    }
    clearToken(){
        return clear()
    }
}