import React, { Component } from 'react';
import { IonContent, IonPage, IonButton } from '@ionic/react';
import AppHeader from 'app/components/app/Bars/Bar-header';
import { useAuthService } from 'app/services/Auth';

type logout = { logout:any };
const LogOutPage: React.FC<logout> = ({logout}) => {
	logout();
	const authService = useAuthService();
		return (
			<IonButton onClick={() => authService.logout()} class="logout_btn" >Logout</IonButton>
		);

}
export default LogOutPage;
