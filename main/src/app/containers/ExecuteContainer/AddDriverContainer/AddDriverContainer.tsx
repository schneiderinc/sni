import React, {Component} from 'react';

import AddDriver from 'app/pages/Execute/AddDriver/AddDriver';

class AddDriverContainer extends Component {
    render() {
        return (<AddDriver  {...this.props} />)
    }
}

export default AddDriverContainer;