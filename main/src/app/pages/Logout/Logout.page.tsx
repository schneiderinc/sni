import React, { Component } from 'react';
import './Logout.scss';
import { IonCard, IonItem, IonImg } from '@ionic/react';


class LogOutPage extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			showLogoutModal: false
		}
	}
	logout = () => {
		this.props.logout();
		this.props.history.push("/login");
	}
	render() {

		return (
			 <IonCard onClick={() => this.logout()} class="menu_list_card">
			 	<IonItem lines="none" class="Logout_item" >Logout
			 		<IonImg slot="end" alt="logo" src="assets/icon/logout.svg" />
			 	</IonItem>
			</IonCard>
		);
	}
}
export default LogOutPage;
