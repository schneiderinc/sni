import React from 'react';
import { IonContent, IonCard, IonGrid, IonCardContent, IonRow, IonCol, IonTabBar, IonTabButton, IonLabel, IonItemSliding, IonIcon } from '@ionic/react';
import './Recent.scss';
import recentData from './recentData.json';
const RecentCard = (props: any) => {
    return (
        <IonItemSliding>
            <IonCardContent onClick={props.particularCardClick} className="card-content" style={{ background: props.cardColor }}>
                <IonGrid>
                    <IonRow class="recent_row">
                        <IonCol className="card-col">
                            <div className="card-name">{props.recentData.fromAddress}</div>
                            <div className="card-dt-recent">Radius: {props.recentData.fromRadius}</div>
                            <div className="card-dist-recent">{props.recentData.pickupDate}</div>
                        </IonCol>
                        <IonCol size="3" className="loadCardArrow">
                            <img alt="logo" className="card_arrow_img1" src="assets/icon/van.svg" />
                            <div className="vehicle_type">{props.recentData.vehicleType}</div>
                            <img alt="logo" className="card-arrow" src="assets/icon/arrow_search.svg" />
                        </IonCol>
                        <IonCol className=" card-col right">
                            <div className="card-name">{props.recentData.toAddress}</div>
                            <div className="card-dt-recent">Radius: {props.recentData.toRadius}</div>
                            <div className="card-dist-recent">{props.recentData.pickupDate}</div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>

            {(props.showButtons) ?
                <IonTabBar slot="bottom">
                    <IonTabButton className="tabButton_add" tab="view">
                        <IonRow>
                            <IonCol className="tabButton_col"><IonIcon className="tabButtonImg" src="assets/icon/heart.svg"></IonIcon></IonCol>
                            <IonCol><IonLabel>SAVE</IonLabel></IonCol>
                        </IonRow>
                    </IonTabButton>
                    <IonTabButton className="tabButton_add" tab="view">
                        <IonRow>
                            <IonCol className="tabButton_col"><IonIcon className="tabButtonImg" src="assets/icon/view.svg"></IonIcon></IonCol>
                            <IonCol><IonLabel>VIEW</IonLabel></IonCol>
                        </IonRow>
                    </IonTabButton>
                    <IonTabButton tab="delete" className="delete_tab">
                        <IonRow>
                            <IonCol className="tabButton_col"><IonIcon className="tabButtonImg" src="assets/icon/delete.svg"></IonIcon></IonCol>
                            <IonCol><IonLabel>DELETE</IonLabel></IonCol>
                        </IonRow>
                    </IonTabButton>
                </IonTabBar> : null}
        </IonItemSliding>

    );
}

class RecentSearch extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            // showButtons: false,
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
                <div className="header-text">Select a recent search to see matching loads.</div>
                <IonGrid class="recent-list">
                    {
                        recentData.map((detail: any, index: number) => (
                            <IonCard className={`ion-card ${index === this.state.selectedCardId ? "searched-item":""}`} key={index}>
                                <RecentCard recentData={detail} particularCardClick={() => this.cardClick(index)} add={this.add} showButtons={index === this.state.selectedCardId ? true : false} cardColor={index === this.state.selectedCardId ? this.state.cardColor : this.state.whiteColor} />
                            </IonCard>
                        ))
                    }
                </IonGrid>
            </IonContent>
        );
    }
}

export default RecentSearch;