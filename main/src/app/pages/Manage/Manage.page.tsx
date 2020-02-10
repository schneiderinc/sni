import React, { Component } from 'react';
import { IonContent, IonPage, IonRow, IonCol, IonCard, IonCardContent, IonBadge, IonAlert, IonHeader } from '@ionic/react';
import './Manage.scss';
import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;
class ManagePage extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            imagePath: "assets/images/man@2x.png"
        };
    }


    takePicture = async () => {
        try {
            const image = await Camera.getPhoto({
                quality: 80,
                allowEditing: true,
                resultType: CameraResultType.DataUrl
            });
            console.log("CAM:", image);
            this.setState({ imagePath: image.dataUrl });
            this.props.setImage(image.dataUrl)

        }
        catch (error) {
            this.props.setImageError({ imageError: true, ImgErrormsg: "Enable Your camera permissions" })
            // To Do : Dispatch Action To update Store with Proper Object to show Error Message .
        }
    }
    render() {
        const { manageCard, makeErrorImg, ImgErrormsg } = this.props;
        return (
            <IonPage className="manage-header">
                <IonHeader className="profileHeader manageHeader">
                    <img alt="profile" src={this.state.imagePath} className="profileImg" onClick={this.takePicture}></img>
                    {/* <IonBadge className="editBadge">
                        <img alt="profile" src="assets/images/Edit.png" className="profileEditIcon" ></img>
                    </IonBadge> */}
                    <div className="profileName">Igor Smith</div>
                    <div className="Dispatcher">Dispatcher</div>
                    <div className="profileEmail">igor@schneider.com</div>
                </IonHeader>
                <IonContent>
                    <div className="card_content_background">
                        <div className="cardContent-space">
                            {manageCard.map((profileData: any, index: number) => (
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
                            ))}
                        </div>
                        {makeErrorImg ? <IonAlert
                            isOpen={makeErrorImg} message={ImgErrormsg}
                            buttons={[
                                {
                                    text: 'Ok',
                                    role: 'Ok',
                                    cssClass: 'secondary',
                                    handler: () => {
                                        this.props.setAlert()
                                    }
                                },]}
                        /> : null}

                    </div>
                </IonContent>
            </IonPage>
        );
    }
}
export default ManagePage;

