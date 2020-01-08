import React, {Component} from 'react';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router';
import { createStructuredSelector } from 'reselect';
import useInjectSaga from 'app/utils/injectSaga';
import saga from 'app/saga/Login/saga';
import { getLoading, getCurrentUser } from 'app/selectors/selector';
import { updateDate, doLogin } from 'app/actions/Login/action';
import { LoginPage } from 'app/pages/Login';

interface LoginProps {
    loading: boolean;
    currentUser: boolean;
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
        this.props.doLogin();
    }
   
    render() {
        const {loading, currentUser} = this.props;
        const props = {
            loading,
            handleSubmit: this.handleSubmit
        }
        return currentUser?<Redirect to="/app" />:<LoginPage {...props}/>;
    }
}

const mapStateToProps = createStructuredSelector({
    loading: getLoading(),
    currentUser: getCurrentUser()
});
   

const mapDispatchToProps = (dispatch:any) => ({
    updateDate: () => dispatch(updateDate()),
    doLogin: () => dispatch(doLogin())
})

const withSaga = useInjectSaga({key, saga});
const withConnect = connect(mapStateToProps,mapDispatchToProps)

export default compose(withSaga, withConnect)(LoginContainer);