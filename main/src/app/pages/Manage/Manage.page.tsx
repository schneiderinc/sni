import React, { Component } from 'react';
import { IonContent, IonPage, IonRow, IonCol, IonCard, IonCardContent, IonBadge, IonAlert } from '@ionic/react';
import './Manage.scss';
import { Link } from 'react-router-dom';
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
                allowEditing: false,
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
            <IonPage>
                <IonContent>
                    <div className="profileHeader manageHeader">
                        <img alt="profile" src={this.state.imagePath} className="profileImg"  >
                        </img>
                        <IonBadge className="editBadge">
                            <img alt="profile" src="assets/images/Edit.png" className="profileEditIcon" onClick={this.takePicture}></img>
                        </IonBadge>
                        <div className="profileName">Igor Smith</div>
                        <div className="Dispatcher">Dispatcher</div>
                        <div className="profileEmail">igor@schneider.com</div>
                    </div>
                    <div className="card_content_background">
                        <div className="cardContent-space">
                            {manageCard.map((profileData: any, index: number) => (
                                <Link to={profileData.profileRouting} key={index}><IonCard className="profileCard">
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
                                </Link>
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

