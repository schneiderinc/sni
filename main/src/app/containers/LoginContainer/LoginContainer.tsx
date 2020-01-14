import React, {Component} from 'react';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router';
import { createStructuredSelector } from 'reselect';
import useInjectSaga from 'app/utils/injectSaga';
import saga from 'app/saga/Login/saga';
import { getLoading, getCurrentUser,getLoginError } from 'app/selectors/selector';
import { updateDate, doLogin, loginError } from 'app/actions/Login/action';
import { LoginPage } from 'app/pages/Login';

interface LoginProps {
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

    handleSubmit = (username:string, password:string) => {
        this.props.doLogin(username, password);
    }
   
    render() {
        const {loading, currentUser, loginError} = this.props;
        const props = {
            loading,
            loginError,
            handleSubmit: this.handleSubmit
        }
        return currentUser?<Redirect to="/app" />:<LoginPage {...props}/>;
    }
}

const mapStateToProps = createStructuredSelector({
    loading: getLoading(),
    currentUser: getCurrentUser(),
    loginError: getLoginError() 

});
   

const mapDispatchToProps = (dispatch:any) => ({
    updateDate: () => dispatch(updateDate()),
    doLogin: (username:string, password:string) => dispatch(doLogin(username, password)),
    errorLogin: (data: any) => dispatch(loginError(data))
})

const withSaga = useInjectSaga({key, saga});
const withConnect = connect(mapStateToProps,mapDispatchToProps)

export default compose(withSaga, withConnect)(LoginContainer);