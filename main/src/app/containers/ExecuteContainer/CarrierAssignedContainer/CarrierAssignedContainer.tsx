import React, {Component} from 'react';

import CarrierAssignedPage from 'app/pages/Execute/CarrierAssigned/CarrierAssignedPage.page';
import {LOAD_DATA} from 'app/utils/mock_Data'
class CarrierAssignedContainer extends Component {
    render() {
        return (<CarrierAssignedPage carrierAssignLoad={LOAD_DATA}  {...this.props}/>)
    }
}

export default CarrierAssignedContainer;