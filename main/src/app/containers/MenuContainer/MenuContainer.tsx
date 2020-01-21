import React, {Component} from 'react';
import MenuPage from 'app/pages/Menu/Menu.page';

class MenuContainer extends Component {
    render() {
        const menuHeadingList = [
            {
                'heading':"Help",
                'sub_heading':["About Schneider","FAQ"]
            },
            {
                'heading':"Feedback",
                'sub_heading':["For the App"]
            },
            {
                'heading':"Truck sales",
                'sub_heading':["Details","CPP Register"]
            },
            {
                'heading':"Legal",
                'sub_heading':["Eula","Privacy","Terms & Conditions"]
            },
            {
                'heading':"Contact",
                'sub_heading':["Call","Chat"]
            },
            {
                'heading':"Other",
                'sub_heading':["Tire Bank","Equipments"]
            }
        ]
        return (<MenuPage menuHeadingList={menuHeadingList}/>)
    }
}

export default MenuContainer;