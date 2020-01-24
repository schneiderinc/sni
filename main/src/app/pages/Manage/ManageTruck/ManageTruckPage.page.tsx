import React, { Component } from 'react';

import { IonContent, IonPage} from '@ionic/react';
import {TabHeader} from 'app/components/app/Bars/Bar-header'



class ManageUserPage extends Component<any,any> {
	constructor (props:any) {
		super(props);
	   	this.state = {
		
		};
	}
	
	render() {
	
		return (
		  	<IonPage className="menu_page">
			  	<TabHeader  Title="Manage Truck"  toggleBtn={this.state.toggleBtn}  tab={this.state.tab} loadDetailsTab={true} {...this.props} />
				<IonContent class="menu_page_content">
					<h1>Manage Truck page</h1>
                    
				</IonContent>
    		</IonPage>
		);
	}
}
export default ManageUserPage;