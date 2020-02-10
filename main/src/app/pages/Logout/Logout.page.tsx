import React, { Component } from 'react';

import { IonContent, IonPage, IonButton } from '@ionic/react';
import AppHeader from 'app/components/app/Bars/Bar-header';


interface loadDetailsPageProps {
	logout: Function
}
class LogOutPage extends Component<loadDetailsPageProps, any> {
	constructor(props: any) {
		super(props);

	}
	render() {
		return (
			<IonPage >
				<AppHeader title="Settings" />
				<IonContent className="ion-padding">
					<IonButton onClick={() => this.props.logout()} class="logout_btn" >Logout</IonButton>
				</IonContent>
			</IonPage>


		);
	}
}
export default LogOutPage;
