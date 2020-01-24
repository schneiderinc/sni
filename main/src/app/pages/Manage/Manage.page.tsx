import React, { Component } from 'react';
import { IonContent, IonPage, IonRow, IonCol, IonCard, IonCardContent, IonBadge } from '@ionic/react';
import './Manage.scss';
import { Link } from 'react-router-dom';
import {ManageCardData} from 'app/utils/mock_Data'

class ManagePage extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <IonPage>
                <IonContent>
					<div className="profileHeader manageHeader">
                        <img alt="profile" src="assets/images/man@2x.png" className="profileImg">
                        </img>
                        <IonBadge className="editBadge">    <
                            img alt="profile" src="assets/images/Edit.png" className="profileEditIcon" ></img>
                        </IonBadge>
                        <div className="profileName">Igor Smith</div>
                        <div className="Dispatcher">Dispatcher</div>
                        <div className="profileEmail">igor@schneider.com</div>
                    </div>
                    <div className="card_content_background">
						<div className="cardContent-space">
						{ManageCardData.map((v:any, k:number) => (

								<Link to={v.profileRouting} key={k}><IonCard className="profileCard">
									<IonCardContent className="profile-cardContent">
										<IonRow className="profile-card-row">
											<IonCol size='2'>
												<img alt="profile" src={v.cradImg} className="profileIcon"></img>
											</IonCol>
											<IonCol size='9'>
												<p className="carrier-profile">{v.profileHeading}</p>
											</IonCol>
											<IonCol size='1' className="manage-profile-arrow-col">
												<img src="assets/images/Arrow.png" alt="logo" className="profile-arrow" />
											</IonCol>
										</IonRow>
									</IonCardContent>
								</IonCard>
								</Link>
							))}
						</div>
					</div>
                </IonContent>
            </IonPage>
        );
    }
}
export default ManagePage;

