import React from 'react';
import { IonContent, IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonItemOptions, IonItemOption, IonItemSliding, IonItem, IonTabBar, IonTabButton, IonLabel } from '@ionic/react';
import favoriteData from './favoriteData.json';
import './favorite.scss';

const FovoriteTab = (props: any) => {
    return (
        <IonItemSliding>
                <IonCardContent  onClick={props.particularCardClick} className="card-content" style={{ background: props.cardColor }}>
                    <IonGrid>
                        <IonRow class="recent_row">
                            <IonCol className="card-col">
                                <div className="card-name"><b>{props.favoriteData.fromAddress}</b></div>
                                <div className="card-dt-recent">Radius: {props.favoriteData.fromRadius}</div>
                                <div className="card-dist-recent">{props.favoriteData.pickupDate}</div>
                            </IonCol>
                            <IonCol size="3" className="loadCardArrow">
                                <img alt="logo" className="card_arrow_img1" src="assets/icon/van.png" />
                                <div className="vehicle_type">{props.favoriteData.vehicleType}</div>
                                <img alt="logo" className="card-arrow" src="assets/icon/Path 100.png" />
                            </IonCol>
                            <IonCol className=" card-col right">
                                <div className="card-name"><b>{props.favoriteData.toAddress}</b></div>
                                <div className="card-dt-recent">Radius: {props.favoriteData.toRadius}</div>
                                <div className="card-dist-recent">{props.favoriteData.pickupDate}</div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
                {props.showButtons ?
                <IonTabBar slot="bottom">
                    <IonTabButton className="tabButton_add" tab="view">
                        <IonRow>
                            <IonCol className="tabButton_col"><img alt="logo" className="tabButtonImg" src="assets/icon/view.png" /></IonCol>
                            <IonCol><IonLabel>VIEW</IonLabel></IonCol>
                        </IonRow>
                    </IonTabButton>
                    <IonTabButton tab="delete">
                        <IonRow>
                            <IonCol className="tabButton_col"><img alt="logo" className="tabButtonImg" src="assets/icon/view.png" /></IonCol>
                            <IonCol><IonLabel>DELETE</IonLabel></IonCol>
                        </IonRow>
                    </IonTabButton>
                </IonTabBar> : null}
        </IonItemSliding>

    );
}
class FavouritePage extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            showButtons: false,
            cardColor: "#FFFFFF"
        }
    }
    add() {
        console.log("HAIIIII");
    }
    cardClick = (x: any) => {
        console.log(x, "index")
        this.setState({ showButtons: !this.state.showButtons, cardColor: "#FFF9F099" });
    }
    render() {

        return (
            <IonContent className="ion-padding recent_container" class="background">
                <div className="contianer">
                    <div className="EnterLoad">Select a favorite search to see matching loads.</div>
                    {
                        favoriteData.map((detail, index) => (
                            <IonCard className="ion-card" key={index}>
                                <FovoriteTab favoriteData={detail} particularCardClick={() => this.cardClick(index)} add={this.add} showButtons={this.state.showButtons} cardColor={this.state.cardColor} />
                            </IonCard>
                        ))
                    }
                </div>
            </IonContent>
        );
    }
}

export default FavouritePage;