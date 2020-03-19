import React, {Component} from 'react';
import { connect } from 'react-redux';
import { logout } from 'app/actions/Login/action';
import LogOutPage from 'app/pages/Logout/Logout.page';
import {LogIn} from 'app/models/home/login.model'

class LogOutContainer extends Component<any, any> {
    _clear = new LogIn()
    logout = () => {
      this._clear.clearToken()
    }

    render() {
        return (<LogOutPage logout={this.logout} {...this.props}/>)
    }
}

const mapStateToProps = (state:any) => ({});


const mapDispatchToProps = (dispatch:Function) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(LogOutContainer);