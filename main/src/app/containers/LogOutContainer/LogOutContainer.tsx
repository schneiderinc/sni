import React, {Component} from 'react';
import { connect } from 'react-redux';
import { logout } from 'app/actions/Login/action';
import LogOutPage from 'app/pages/Logout/Logout.page';

interface LoadDetailsProps  {
    logout: Function
}

class LogOutContainer extends Component<LoadDetailsProps> {

    logout = () => {
        this.props.logout()
    }

    render() {
        return (<LogOutPage logout={this.logout}/>)
    }
}

const mapStateToProps = (state:any) => ({});


const mapDispatchToProps = (dispatch:Function) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(LogOutContainer);