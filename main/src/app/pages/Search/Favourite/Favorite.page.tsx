import React from 'react';
import { IonContent, IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonItemSliding, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/react';
import favoriteData from './favoriteData.json';
import './favorite.scss';
const FovoriteTab = (props: any) => {
    return (
        <IonItemSliding class="favorite_card">
            <IonCardContent onClick={props.particularCardClick} className="card-content" style={{ background: props.cardColor }}>
                <IonGrid>
                    <IonRow class="recent_row">
                        <IonCol className="card-col">
                            <div className="card-name">{props.favoriteData.fromAddress}</div>
                            <div className="card-dt-recent">Radius: {props.favoriteData.fromRadius}</div>
                            <div className="card-dist-recent">{props.favoriteData.pickupDate}</div>
                        </IonCol>
                        <IonCol size="3" className="loadCardArrow">
                            <img alt="logo" className="card_arrow_img1" src="assets/icon/van.svg" />
                            <div className="vehicle_type">{props.favoriteData.vehicleType}</div>
                            <img alt="logo" className="card-arrow" src="assets/icon/arrow_search.svg" />
                        </IonCol>
                        <IonCol className=" card-col right">
                            <div className="card-name">{props.favoriteData.toAddress}</div>
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
                            <IonCol className="tabButton_col view_btn"><IonIcon className="tabButtonImg" src="assets/icon/view.svg" /></IonCol>
                            <IonCol><IonLabel>VIEW</IonLabel></IonCol>
                        </IonRow>
                    </IonTabButton>
                    <IonTabButton tab="delete" className="delete_tab">
                        <IonRow>
                            <IonCol className="tabButton_col"><IonIcon className="tabButtonImg" src="assets/icon/delete.svg" /></IonCol>
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
            whiteColor: "#FFFFFF",
            cardColor: "#FFF9F099",
            selectedCardId: null
        }
    }
    add() {
        console.log("HAIIIII");
    }
    cardClick = (selectedIndex: number) => {
        const index = selectedIndex !== this.state.selectedCardId ? selectedIndex : null;
        this.setState({ selectedCardId: index });
    }
    render() {

        return (
            <IonContent className="ion-padding recent_container" class="background">
                <div className="header-text">Select a favorite search to see matching loads.</div>
                <IonGrid class="recent-list">
                    {
                        favoriteData.map((detail, index) => (
                            <IonCard className={`ion-card ${index === this.state.selectedCardId ? "searched-item":""}`} key={index}>
                                <FovoriteTab favoriteData={detail} particularCardClick={() => this.cardClick(index)} add={this.add} showButtons={index === this.state.selectedCardId ? true : false} cardColor={index === this.state.selectedCardId ? this.state.cardColor : this.state.whiteColor} />
                            </IonCard>
                        ))
                    }
                </IonGrid>
            </IonContent>
        );
    }
}

export default FavouritePage;