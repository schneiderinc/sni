import React, { Component } from 'react';

import { IonHeader, IonContent, IonPage, IonRow, IonCol, IonCard, IonCardContent, IonBadge, IonIcon } from '@ionic/react';

import './Manage.scss';




class ManagePage extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<IonPage>
				<IonHeader className="manageHeader">

					<div className="profileHeader">
						<img alt="profile" src="assets/images/Picture1@2x.png" className="profileImg">

						</img>
						<IonBadge className="editBadge">	<img alt="profile" src="assets/images/Edit.png" className="profileEditIcon" ></img></IonBadge>
					
						<div className="profileName">Igor Smith</div>
						<div className="Dispatcher">Dispatcher</div>
						<div className="profileEmail">igor@schneider.com</div>
					</div>

				</IonHeader>
				<IonContent>
					<div className="cardContent-space">
						<IonCard className="profileCard">
							<IonCardContent>
								<IonRow className="profile-card-row">
									<IonCol size='2'>
										<img alt="profile" src="assets/images/Profile.png" className="profileIcon"></img>
									</IonCol>
									<IonCol size='10'>
										<div className="carrier-profile">Profile</div>

									</IonCol>
								</IonRow>
							</IonCardContent>
						</IonCard>

						<IonCard className="profileCard">
							<IonCardContent>
								<IonRow className="carrierprofile-card-row">
									<IonCol size='2'>
										<img alt="profile" src="assets/images/noun_Document_169857 (1).png" className="CarrierprofileIcon"></img>
									</IonCol>
									<IonCol size='10'>
										<div className="carrier-profile">Carrier Profile</div>

									</IonCol>
								</IonRow>
							</IonCardContent>
						</IonCard>


						<IonCard className="profileCard">
							<IonCardContent>
								<IonRow className="manageprofile-card-row">
									<IonCol size='2'>
										<img alt="profile" src="assets/images/noun_Manage Account_1182506 (1).png" className="manageprofileIcon"></img>
									</IonCol>
									<IonCol size='10'>
										<div className="carrier-profile">Manage User</div>

									</IonCol>
								</IonRow>
							</IonCardContent>
						</IonCard>
						<IonCard className="profileCard">
							<IonCardContent>
								<IonRow className="truckprofile-card-row">
									<IonCol size='2'>
										<img alt="profile" src="assets/images/noun_delivery truck_2292554 (1).png" className="truckprofileIcon"></img>
									</IonCol>
									<IonCol size='10'>
										<div className="carrier-profile">Post Truck/ Lane</div>
									</IonCol>
								</IonRow>
							</IonCardContent>
						</IonCard>
					</div>
				</IonContent>
			</IonPage>
		);
	}
}
export default ManagePage;