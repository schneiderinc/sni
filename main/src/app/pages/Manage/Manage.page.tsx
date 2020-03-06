import React, { Component } from 'react';
import { IonContent, IonPage, IonRow, IonCol, IonCard, IonCardContent, IonHeader } from '@ionic/react';
import './Manage.scss';
import ImageCapture from 'app/components/ImageCapture/ImageCapture';
class ManagePage extends Component<any, any> {
 render() {
        const { manageCard } = this.props;
        return (
            <IonPage className="manage-header desktop-page">
                <IonHeader className="profileHeader manageHeader">
                    {/* <img alt="profile" src={this.state.imagePath} className="profileImg" onClick={this.takePicture}></img> */}
                    {/* <IonBadge className="editBadge">
                        <img alt="profile" src="assets/images/Edit.png" className="profileEditIcon" ></img>
                    </IonBadge> */}

                    <ImageCapture   {...this.props} />
                    <div className="profileName">Igor Smith</div>
                    <div className="Dispatcher">Dispatcher</div>
                    <div className="profileEmail">igor@schneider.com</div>
                </IonHeader>
                <IonContent>
                    <div className="card_content_background">
                        <div className="cardContent-space">
                            {manageCard.length>0?manageCard.map((profileData: any, index: number) => (
                                <IonCard className="profileCard" routerLink={`${profileData.profileRouting}`} key={index}>
                                    <IonCardContent className="profile-cardContent">
                                        <IonRow className="profile-card-row">
                                            <IonCol size='2'>
                                                <img alt="profile" src={profileData.cradImg} className="profileIcon"></img>
                                            </IonCol>
                                            <IonCol size='9'>
                                                <p className="carrier-profile">{profileData.profileHeading}</p>
                                            </IonCol>
                                            <IonCol size='1' className="manage-profile-arrow-col">
                                                <div className="arrow_forward"></div>
                                            </IonCol>
                                        </IonRow>
                                    </IonCardContent>
                                </IonCard>
                            )):null}
                        </div>
                   
                    </div>
                </IonContent>
            </IonPage>
        );
    }
}
export default ManagePage;