import React, { Component } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import AppHeader from 'app/components/app/Bars/Bar-header';
class ProfilePage extends Component<any, any> {
	constructor(props: any) {
		super(props);
	}
	render() {

		return (
			<IonPage>
				<AppHeader title="Profile" backUrl={"/app/" + this.props.module} />
				<IonContent >
					<h1>Profile page</h1>
				</IonContent>
			</IonPage>
		);
	}
}
export default ProfilePage;