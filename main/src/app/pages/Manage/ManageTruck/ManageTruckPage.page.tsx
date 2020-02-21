import React, { Component } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import AppHeader from 'app/components/app/Bars/Bar-header';
class ManageUserPage extends Component<any, any> {
	constructor(props: any) {
		super(props);

	}
	render() {
		return (
			<IonPage className="desktop-page">
				<AppHeader title="Manage Truck" backUrl={"/app/" + this.props.module} />
				<IonContent >
					<h1>Manage Truck page</h1>
				</IonContent>
			</IonPage>
		);
	}
}
export default ManageUserPage;