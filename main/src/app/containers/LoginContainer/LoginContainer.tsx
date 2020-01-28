import React, {Component} from 'react';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router';
import { createStructuredSelector } from 'reselect';
import useInjectSaga from 'app/utils/injectSaga';
import saga from 'app/saga/Login/saga';
import { getLoading, getCurrentUser, getLoginError, getUserData } from 'app/selectors/selector';
import { updateDate, loginError, doLogin } from 'app/actions/Login/action';
import { LoginPage } from 'app/pages/Login';

interface LoginProps {
    userData: any
    loading: boolean;
    currentUser: boolean;
    loginError: boolean;
    updateDate: Function;
    doLogin: Function;
    history: any;
}

const key = 'login';

class LoginContainer extends Component<LoginProps> {

    componentDidMount() {
        this.props.updateDate();
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
        return currentUser?<Redirect to="/app" />:<LoginPage {...props}/>;
    }
}

const mapStateToProps = createStructuredSelector({
    userData: getUserData(),
    loading: getLoading(),
    currentUser: getCurrentUser(),
    loginError: getLoginError(),

});
   

const mapDispatchToProps = (dispatch:any) => ({
    updateDate: () => dispatch(updateDate()),
    doLogin: (username: string, password: string, rememberme: boolean) => dispatch(doLogin(username, password, rememberme)),
    errorLogin: (data: any) => dispatch(loginError(data))
})

const withSaga = useInjectSaga({key, saga});
const withConnect = connect(mapStateToProps,mapDispatchToProps)

export default compose(withSaga, withConnect)(LoginContainer);