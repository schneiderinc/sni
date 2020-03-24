import React, { Component } from 'react';
import './Logout.scss';
import { IonContent, IonPage, IonButton, IonCard, IonItem, IonImg } from '@ionic/react';
import AppHeader from 'app/components/app/Bars/Bar-header';
import { LogoutPopUp } from 'app/components/app/LogoutPopup/LogoutPopup';


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
	// showLogoutPopup = () => {
	// 	this.setState({ showLogoutModal: true })
	// }
	// showLogoutPopup2 = () => {
	// 	this.setState({ showLogoutModal: false })
	// }
	
	render() {

		return (
			 <IonCard onClick={() => this.logout()} class="menu_list_card">
			 	<IonItem lines="none" class="Logout_item" >Logout
			 		<IonImg slot="end" alt="logo" src="assets/icon/logout.svg" />
			 	</IonItem>
				 {/* <LogoutPopUp showLogoutModal={this.state.showLogoutModal}  {...this.props} closeShowModal={this.showLogoutPopup2}/> */}
			</IonCard>
			//<IonButton onClick={() => this.logout()} onClick={this.showLogoutPopup} class="logout_btn" >Logout</IonButton>
			
		);
	}
}
export default LogOutPage;
