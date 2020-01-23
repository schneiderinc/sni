import React, { Component } from 'react';

import { IonContent, IonPage} from '@ionic/react';
import {TabHeader} from 'app/components/app/Bars/Bar-header'



class ProfilePage extends Component<any,any> {
	constructor (props:any) {
		super(props);
	   	this.state = {
			tab:false,
			toggleBtn:false
		};
	}
	
	render() {
	
		return (
		  	<IonPage className="menu_page">
			  	<TabHeader  Title="Profile"  toggleBtn={this.state.toggleBtn}  tab={this.state.tab} ProfileDetailsTab={true} />
				<IonContent class="menu_page_content">
					<h1>hiiii</h1>
                    
				</IonContent>
    		</IonPage>
		);
	}
}
export default ProfilePage;