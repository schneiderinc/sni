import React, { Component } from 'react';

import { IonContent, IonPage, IonLabel, IonCard, IonList, IonItem, IonInput, IonRow, IonCol } from '@ionic/react';
import AppHeader from 'app/components/app/Bars/Bar-header';
import './carrierProfile.scss';
import { CarrierInsuranceCard } from 'app/components/app/carrierInsuranceCard/carrierInsuranceCard';


class CarrierProfilePage extends Component<any, any> {
    constructor(props: any) {
        super(props);

    }
    render() {
        const { manageCarrierdata, manageInsuranceData, manageInsuranceData2 } = this.props;
        return (
            <IonPage className="desktop-page">
                <AppHeader title="Carrier Profile" backUrl={"/app/" + this.props.module} />
                <IonContent >
                    <div className="contact">Contact Schneider if any of the fields need to be updated</div>
                    <IonCard mode="md" className="carrier-card">
                        <IonList >
                            {manageCarrierdata.map((carrierData: any, index: number) => (
                                <IonItem mode="ios" key={index} className="carrier-profile-ionitem" lines={index === manageCarrierdata.length - 1 ? 'none' : 'inset'}>
                                    <IonLabel mode="ios" position="floating" className="carrier-profile-label">{carrierData.subHeading}</IonLabel>
                                    <IonInput type="text" className="profile-form-control" name="origin" value={carrierData.inputValue} readonly />
                                </IonItem>

                            ))}
                        </IonList>
                        <div></div>
                    </IonCard>
                    <div className="certification-header">QUALIFICATION STATUS</div>
                    <IonCard mode="md" className="certificate-card">
                        <IonRow>
                            <IonCol size='2'><img alt="logo" src="assets/images/Qualification.png" className="certificate-png" /></IonCol>
                            <IonCol size='6' className="Approved"><IonList className="Hazmat">Approved</IonList></IonCol>
                        </IonRow>
                    </IonCard>
                    <div className="certification-header">CERTIFICATION</div>
                    <IonCard mode="md" className="certificate-card">
                        <IonRow>
                            <IonCol size='2'><img alt="logo" src="assets/images/Certificate.png" className="certificate-png" /></IonCol>
                            <IonCol size='6'><IonList className="Hazmat Approved">HAZMAT</IonList></IonCol>
                            <IonCol size='4'><IonList className="HazmatDate Approved">06/30/2021</IonList></IonCol>
                        </IonRow>
                    </IonCard>
                    <div className="certification-header">CARRIER INSURANCE</div>
                    <CarrierInsuranceCard carrierInsurance={manageInsuranceData} />
                    <CarrierInsuranceCard carrierInsurance={manageInsuranceData2} />
                </IonContent>
            </IonPage>
        );
    }
}
export default CarrierProfilePage;