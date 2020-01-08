import React, { Component } from 'react';

import { IonContent, IonPage, IonButton } from '@ionic/react';
import {TabHeader} from 'app/components/app/Bars/Bar-header'


interface loadDetailsPageProps {
  logout: Function
}
class LogOutPage extends Component<loadDetailsPageProps,any> {
	constructor (props:any) {
		super(props);
	
	   this.state = {
	
		tab:false,
		toggleBtn:false
	  };
	  }
	
	render() {
		return (
		  <IonPage >
       <TabHeader  Title="Settings"  toggleBtn={this.state.toggleBtn}  tab={this.state.tab}  />
      <IonContent className="ion-padding">
        <IonButton  onClick={() => this.props.logout()} class= "logout_btn" >Logout</IonButton>
      </IonContent>
    </IonPage>
		
		
		);
	}
}
export default LogOutPage;
