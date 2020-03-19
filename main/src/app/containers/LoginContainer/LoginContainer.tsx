import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router';
import { createStructuredSelector } from 'reselect';
import useInjectSaga from 'app/utils/injectSaga';
import saga from 'app/saga/Login/saga';
import { getLoading, getCurrentUser, getLoginError, getUserData, getLoginToken } from 'app/selectors/selector';
import { updateDate, loginError, doLogin } from 'app/actions/Login/action';
import { LoginPage } from 'app/pages/Login';
import { LogIn } from 'app/models/home/login.model';
interface LoginProps {
    userData: any
    loading: boolean;
    currentUser: boolean;
    loginError: boolean;
    updateDate: Function;
    doLogin: Function;
    history: any;
    loginToken: any
}

const key = 'login';

class LoginContainer extends Component<LoginProps> {
    _accessToken = new LogIn()
    _getaccessToken = () => {
        return this._accessToken.getAccessToken();
    }
    componentDidMount() {
        this.props.updateDate(); 
    }
   
    componentDidUpdate() { 
            this._accessToken.setAccessToken(this.props.loginToken);
      }
      

    handleSubmit = (username: string, password: string, rememberme: boolean) => {
        this.props.doLogin(username, password, rememberme);
    }
    render() {
        const { loading, currentUser, loginError, userData } = this.props;
        const props = {
            userData,
            loading,
            loginError,
            handleSubmit: this.handleSubmit
        }
        return currentUser ? <Redirect to="/app" /> : <LoginPage {...props} />;
    }
}

const mapStateToProps = createStructuredSelector({
    userData: getUserData(),
    loading: getLoading(),
    currentUser: getCurrentUser(),
    loginError: getLoginError(),
    loginToken: getLoginToken(),
});


const mapDispatchToProps = (dispatch: any) => ({
    updateDate: () => dispatch(updateDate()),
    doLogin: (username: string, password: string, rememberme: boolean) => dispatch(doLogin(username, password, rememberme)),
    errorLogin: (data: any) => dispatch(loginError(data))
})

const withSaga = useInjectSaga({ key, saga });
const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withSaga, withConnect)(LoginContainer);