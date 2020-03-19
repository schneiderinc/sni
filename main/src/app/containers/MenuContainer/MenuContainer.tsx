import React, {Component} from 'react';
import MenuPage from 'app/pages/Menu/Menu.page';

class MenuContainer extends Component {
    render() {
        const menuHeadingList = [
            {
                'heading':"Help",
                'sub_heading':["FAQ","Video Walkthroughs"]
            },
            {
                'heading':"Contact",
                'sub_heading':["Feedback for the App","Chat","Email","Call"]
            },
            {
                'heading':"Carrier Reward Program",
                'sub_heading':["Fuel Savings","Truck Sales","Carrier Purchasing Program Registration","Emergency Services","Fuel Route Optimizer","Quickpay Sign Up"]
            },
            {
                'heading':"Legal",
                'sub_heading':["Privacy","Terms & Conditions","End User Licensing Agreement"]
            },
            {
                'heading':"Learn About Schneider",
                'sub_heading':["About Schneider","Becoming a Carrier","Becoming a Driver for Schneider"]
            }
        ]
        return (<MenuPage menuHeadingList={menuHeadingList} {...this.props}/>)
    }
}

export default MenuContainer;