import React from 'react';
import { IonContent, IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonItemSliding } from '@ionic/react';
import favoriteData from './favoriteData.json';
import './favorite.scss';
import { CardTabFooter } from 'app/components/app/CardTabFooter/CardTabFooter';

const footerOptions = [{
    "icon": "assets/icon/view.svg",
    "label": "VIEW"
}, {
    "icon": "assets/icon/delete.svg",
    "label": "DELETE"
}
]
interface favoriteProps { particularCardClick: any, cardColor: any, favoriteData: any, showButtons: any, particularCardDelete: any, add: any };

const FovoriteTab: React.FC<favoriteProps> = ({ particularCardClick, cardColor, favoriteData, showButtons, particularCardDelete, add }) => {
    return (
        <IonItemSliding class="favorite_card">
            <IonCardContent onClick={particularCardClick} className="card-content" style={{ background: cardColor }}>
                <IonGrid>
                    <IonRow class="recent_row">
                        <IonCol className="card-col">
                            <div className="card-name">{favoriteData.fromAddress}</div>
                            <div className="card-dt-recent">Radius: {favoriteData.fromRadius}</div>
                            <div className="card-dist-recent">{favoriteData.pickupDate}</div>
                        </IonCol>
                        <IonCol size="3" className="loadCardArrow">
                            <img alt="logo" className="card_arrow_img1" src="assets/icon/van.svg" />
                            <div className="vehicle_type">{favoriteData.vehicleType}</div>
                            <img alt="logo" className="card-arrow" src="assets/icon/arrow_search.svg" />
                        </IonCol>
                        <IonCol className=" card-col right">
                            <div className="card-name">{favoriteData.toAddress}</div>
                            <div className="card-dt-recent">Radius: {favoriteData.toRadius}</div>
                            <div className="card-dist-recent">{favoriteData.pickupDate}</div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
            {showButtons ?
                <CardTabFooter footerOptions={footerOptions} particularCardDelete={particularCardDelete} />
                : null}
        </IonItemSliding>

    );
}
class FavouritePage extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            whiteColor: "#FFFFFF",
            cardColor: "#FFF9F099",
            selectedCardId: null,
            headerText: "Select a favorite search to see matching loads."
        }
    }
    add() {
        console.log("HAIIIII");
    }
    cardClick = (selectedIndex: number) => {
        const index = selectedIndex !== this.state.selectedCardId ? selectedIndex : null;
        this.setState({ selectedCardId: index, headerText: "Select a Search below to View Results or Delete from Favorites." });
    }
    Delete = (selectedIndex: number) => {
        const index = selectedIndex !== this.state.selectedCardId ? selectedIndex : null;
        this.setState({ headerText: "Select a favorite search to see matching loads.", selectedCardId: index });
    }
    render() {
        const { headerText, selectedCardId, cardColor, whiteColor } = this.state;
        return (
            <IonContent className="ion-padding recent_container" class="background">
                <div className="header-text">{headerText}</div>
                <IonGrid class="recent-list">
                    {
                        favoriteData.map((detail, index) => (
                            <IonCard className={`ion-card  recent-card ${index === selectedCardId ? "searched-item" : ""}`} key={index}>
                                <FovoriteTab favoriteData={detail} particularCardDelete={() => this.Delete(index)} particularCardClick={() => this.cardClick(index)} add={this.add} showButtons={index === selectedCardId ? true : false} cardColor={index === selectedCardId ? cardColor : whiteColor} />
                            </IonCard>
                        ))
                    }
                </IonGrid>
            </IonContent>
        );
    }
}

export default FavouritePage;