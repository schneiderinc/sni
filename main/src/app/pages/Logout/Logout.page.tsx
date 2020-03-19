import React, { Component } from 'react';
import { IonContent, IonPage, IonButton } from '@ionic/react';
import AppHeader from 'app/components/app/Bars/Bar-header';


class LogOutPage extends Component<any, any> {
	constructor(props: any) {
		super(props);
	}
	logout = () => {
		this.props.logout();
		this.props.history.push("/login");
	}
	render() {

		return (
			<IonButton onClick={() => this.logout()} class="logout_btn" >Logout</IonButton>
		);
	}
}
export default LogOutPage;
