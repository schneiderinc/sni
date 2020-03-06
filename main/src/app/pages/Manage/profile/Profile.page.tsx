import React, { Component } from 'react';
import { IonContent, IonPage, IonList, IonItem, IonLabel, IonInput, IonIcon } from '@ionic/react';
import AppHeader from 'app/components/app/Bars/Bar-header';
import './Profile.page.scss';

class ProfilePage extends Component<any, any> {
	constructor(props: any) {
		super(props);
	}
	
	render() {
		const userProfiledata = this.props.userProfiledata;
		return (
			<IonPage className="desktop-page user-profile-page">
				<AppHeader title="User Profile" backUrl={"/app/" + this.props.module} tab={this.props.module}/>
				<IonContent>
					<IonList>
						{userProfiledata.map((userData: any, index:number)=>(
							<IonItem key={index}>
								<IonLabel position="floating" mode="ios">{userData.subHeading}</IonLabel>
								<IonInput value={userData.inputValue} readonly type="text" class={userData.subHeading === "Phone No" ? 'phone-text': ''}></IonInput>
								{userData.subHeading === "Phone No" ? <IonIcon src="assets/icon/edit_color.svg" slot="end"/>: ''}
							</IonItem>
						))}
						<IonItem class="chnage-password-text" lines="none">
							<IonLabel>Change Password</IonLabel>
							<i className="arrow_forward"></i>
						</IonItem>
					</IonList>
				</IonContent>
			</IonPage>
		);
	}
}
export default ProfilePage;