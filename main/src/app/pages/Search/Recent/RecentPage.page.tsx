import React from 'react';
import { IonContent, IonCard, IonGrid, IonCardContent, IonRow, IonCol, IonItemSliding } from '@ionic/react';
import './Recent.scss';
import recentData from './recentData.json';
import { CardTabFooter } from 'app/components/app/CardTabFooter/CardTabFooter';
const footerOptions = [{
    "icon": "assets/icon/heart.svg",
    "label": "SAVE"
},
{
    "icon": "assets/icon/view.svg",
    "label": "VIEW"
}, {
    "icon": "assets/icon/delete.svg",
    "label": "DELETE"
}
]
interface recentProps { particularCardClick: any, cardColor: any, recentData: any, showButtons: any, particularCardDelete: any, add: any };

const RecentCard: React.FC<recentProps> = ({ particularCardClick, cardColor, recentData, showButtons, particularCardDelete, add }) => {
    return (
        <IonItemSliding>
            <IonCardContent onClick={particularCardClick} className="card-content" style={{ background: cardColor }}>
                <IonGrid>
                    <IonRow class="recent_row">
                        <IonCol className="card-col">
                            <div className="card-name">{recentData.fromAddress}</div>
                            <div className="card-dt-recent">Radius: {recentData.fromRadius}</div>
                            <div className="card-dist-recent">{recentData.pickupDate}</div>
                        </IonCol>
                        <IonCol size="3" className="loadCardArrow">
                            <img alt="logo" className="card_arrow_img1" src="assets/icon/van.svg" />
                            <div className="vehicle_type">{recentData.vehicleType}</div>
                            <img alt="logo" className="card-arrow" src="assets/icon/arrow_search.svg" />
                        </IonCol>
                        <IonCol className=" card-col right">
                            <div className="card-name">{recentData.toAddress}</div>
                            <div className="card-dt-recent">Radius: {recentData.toRadius}</div>
                            <div className="card-dist-recent">{recentData.pickupDate}</div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>

            {(showButtons) ?
                <CardTabFooter footerOptions={footerOptions} particularCardDelete={particularCardDelete} />
                : null}
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
            selectedCardId: null,
            headerText: "Select a recent search to see matching loads."
        }
    }
    add() {
        console.log("HAIIIII");
    }
    cardClick = (selectedIndex: number) => {
        const index = selectedIndex !== this.state.selectedCardId ? selectedIndex : null;
        this.setState({ selectedCardId: index, headerText: "Select a Search Below to View Results, Delete from this list or Save to Favorites." });
    }
    Delete = (selectedIndex: number) => {
        const index = selectedIndex !== this.state.selectedCardId ? selectedIndex : null;
        this.setState({ selectedCardId: index, headerText: "Select a recent search to see matching loads." });
    }
    render() {
        const { headerText, selectedCardId, cardColor, whiteColor } = this.state;
        return (
            <IonContent className="ion-padding recent_container" class="background">
                <div className="header-text">{headerText}</div>
                <IonGrid class="recent-list">
                    {
                        recentData.map((detail: any, index: number) => (
                            <IonCard className={`ion-card  recent-card ${index === selectedCardId ? "searched-item" : ""}`} key={index}>
                                <RecentCard recentData={detail} particularCardDelete={() => this.Delete(index)} particularCardClick={() => this.cardClick(index)} add={this.add} showButtons={index === selectedCardId ? true : false} cardColor={index === selectedCardId ? cardColor : whiteColor} />
                            </IonCard>
                        ))
                    }
                </IonGrid>
            </IonContent>
        );
    }
}

export default RecentSearch;