
import React, { Component } from 'react';

import { IonContent, IonPage } from '@ionic/react';
import {TabHeader} from 'app/components/app/Bars/Bar-header'



class ManagePage extends Component<any,any> {
	constructor (props:any) {
		super(props);
	   	this.state = {
			tab:false,
			toggleBtn:false
		};
	}
	
	render() {
		return (
		  	<IonPage>
			  	<TabHeader  Title="Manage"  toggleBtn={this.state.toggleBtn}  tab={this.state.tab}  />
				<IonContent>
				</IonContent>
    		</IonPage>
		);
	}
}
export default ManagePage;