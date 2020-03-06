import React, {Component} from 'react';

import DriverAssignList from 'app/pages/Execute/AssignDriverList/AssignDriverList';

class AssignDriverContainer extends Component {
    render() {
        console.log(this.props);
        return (<DriverAssignList   {...this.props} />)
    }
}

export default AssignDriverContainer;