import React from 'react';
import { IonContent, IonCard, IonGrid, IonCardContent, IonRow, IonCol, IonItem, IonTabBar, IonTabButton, IonLabel, IonItemSliding } from '@ionic/react';
import './Recent.scss';
import recentData from './recentData.json';

const RecentTab = (props: any) => {
    return (
        <IonItemSliding>
            <IonCardContent onClick={props.particularCardClick} className="card-content" style={{ background: props.cardColor }}>
                <IonGrid>
                    <IonRow class="recent_row">
                        <IonCol className="card-col">
                            <div className="card-name"><b>{props.recentData.fromAddress}</b></div>
                            <div className="card-dt-recent">Radius: {props.recentData.fromRadius}</div>
                            <div className="card-dist-recent">{props.recentData.pickupDate}</div>
                        </IonCol>
                        <IonCol size="3" className="loadCardArrow">
                            <img alt="logo" className="card_arrow_img1" src="assets/icon/van.png" />
                            <div className="vehicle_type">{props.recentData.vehicleType}</div>
                            <img alt="logo" className="card-arrow" src="assets/icon/Path 100.png" />
                        </IonCol>
                        <IonCol className=" card-col right">
                            <div className="card-name"><b>{props.recentData.toAddress}</b></div>
                            <div className="card-dt-recent">Radius: {props.recentData.toRadius}</div>
                            <div className="card-dist-recent">{props.recentData.pickupDate}</div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>

            {(props.showButtons)&&(props.x===props.y) ?
                <IonTabBar slot="bottom">
                    <IonTabButton className="tabButton_add" onClick={props.add} tab="add">
                        <IonRow>
                            <IonCol className="tabButton_col"><img alt="logo" className="tabButtonImg" src="assets/icon/heart.png" /></IonCol>
                            <IonCol><IonLabel>ADD</IonLabel></IonCol>
                        </IonRow>
                    </IonTabButton>
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

class RecentSearch extends React.Component<any, any>{
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
        const y= x;
        console.log("y=",y)
        this.setState({ showButtons: !this.state.showButtons, cardColor: "#FFF9F099" });
    }

    render() {

        return (
            <IonContent className="ion-padding recent_container" class="background">
                <div className="contianer">
                    <div className="EnterLoad">Select a recent search to see matching loads.</div>
                    {
                        recentData.map((detail, index) => (
                            <IonCard className="ion-card" key={index}>
                                <RecentTab recentData={detail} particularCardClick={() => this.cardClick(index)} add={this.add} showButtons={this.state.showButtons} cardColor={this.state.cardColor} />
                            </IonCard>
                        ))
                    }
                </div>
            </IonContent>
        );
    }
}

export default RecentSearch;