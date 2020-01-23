import React, { Component } from 'react';

import { IonHeader, IonContent, IonPage, IonRow, IonCol, IonCard, IonCardContent, IonBadge } from '@ionic/react';

import './Manage.scss';
import { Link } from 'react-router-dom';


const cardData = [
	{
		cradImg: "assets/images/Profile_icon.png",
		profileHeading: "User Profile",
		profileRouting:"/app/ProfileDetails"
	
	},
	{
		cradImg: "assets/images/Carrier_profile_icon.png",
		profileHeading: "Carrier Profile",
		profileRouting:"/app/CarrierProfileDetails"
		
	},
	{
		cradImg: "assets/images/noun_Manage Account_1182506 (1).png",
		profileHeading: "Manage Users",
		profileRouting:"/app/ProfileDetails"
	
	},
	{
		cradImg: "assets/images/Post_truck.png",
		profileHeading: "Manage Truck/ Lane Postings",
		profileRouting:"/app/ProfileDetails"
	
	}
]



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
					{cardData.map((v:any, k:number) => (
							<Link to={v.profileRouting}><IonCard  key={k} className="profileCard">
								<IonCardContent>
                                    <IonRow className="profile-card-row">
										<IonCol size='2'>
											<img alt="profile" src={v.cradImg} className="profileIcon"></img>
									    </IonCol>
										<IonCol size='10'>
											<IonRow>
											<IonCol size='11'><p className="carrier-profile">{v.profileHeading}</p></IonCol>
											<IonCol size='1'><img src="assets/images/Arrow.png" alt="logo" className="profile-arrow" /></IonCol>
											</IonRow>
											
											
										</IonCol>
									</IonRow>
								</IonCardContent>
							</IonCard>
							</Link>

						))}

					</div>
				</IonContent>
			
			</IonPage>
		);
	}
}
export default ManagePage;