import { IonContent, IonPage, IonCardContent, IonCard, IonGrid, IonRow, IonCol, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import React, { Component } from 'react';
import AppHeader from 'app/components/app/Bars/Bar-header';
import MapView from "app/components/shared/MapView";
import { Link } from 'react-router-dom'
import './ExecutePage.page.scss';
class ExecutePage extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        const { myLoadCard } = this.props;
        let cardDetails = [];
        for (let index = 0; index < myLoadCard.length; index += 2) {
            let cards = myLoadCard.slice(index, index + 2);
            cardDetails.push(cards);
        }
        return (
            <IonPage className="desktop-page">
                <AppHeader title="MyLoad" />
                <IonContent className="myload-content">
                    {cardDetails.map((cardData: any, index: number) => (
                        <IonRow key={index}>
                            {cardData.map((card: any, index: number) => (
                                <IonCol className="thumbnail-item-col" key={index}>
                                    <IonCard class="myload-tab-card">
                                        <Link to={card.myLoadRouting}>
                                           
                                            <IonGrid className="item-dev">
                                            <div className="circle-div">{card.count}</div>
                                                <img className="thumbnail-img" alt="assign" src={card.cradImg} />
                                                <div className="itemlabel">{card.title}</div>
                                            </IonGrid>
                                        </Link>
                                    </IonCard>
                                </IonCol>
                            ))}
                        </IonRow>
                    ))}
                </IonContent>
            </IonPage>
        );
    }
}

export default ExecutePage;