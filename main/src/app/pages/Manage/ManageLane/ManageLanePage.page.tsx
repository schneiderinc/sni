import React, { Component } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import AppHeader from 'app/components/app/Bars/Bar-header';
class ManageLanePage extends Component<any, any> {
	constructor(props: any) {
		super(props);

	}
	render() {
		return (
			<IonPage className="desktop-page">
				<AppHeader title="Manage Lane" backUrl={"/app/" + this.props.module} />
				<IonContent >
					<h1>Manage Lane page</h1>
				</IonContent>
			</IonPage>
		);
	}
}
export default ManageLanePage;