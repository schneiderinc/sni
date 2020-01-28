import React, { Component } from 'react';

import { IonContent, IonPage, IonLabel, IonCard, IonList, IonItem, IonInput, IonRow, IonCol } from '@ionic/react';
import AppHeader from 'app/components/app/Bars/Bar-header';
import { carrierProfile, carrierProfileInsurance, carrierProfileInsurance2 } from 'app/utils/mock_Data';
import './carrierProfile.scss';
import { CarrierInsuranceCard } from 'app/components/app/carrierInsuranceCard/carrierInsuranceCard';


class CarrierProfilePage extends Component<any, any> {
    constructor(props: any) {
        super(props);

    }
    render() {
        return (
            <IonPage >
                <AppHeader title="Carrier Profile" backUrl={"/app/" + this.props.module} />
                <IonContent >
                    <div className="contact">Contact Schneider if any of the fields need to be updated</div>
                    <IonCard mode="md" className="carrier-card">
                        <IonList >
                            {carrierProfile.map((v, k) => (
                                <IonItem mode="ios" key={k} className="carrier-profile-ionitem" lines={k === carrierProfile.length - 1 ? 'none' : 'inset'}>
                                    <IonLabel mode="ios" position="floating" className="carrier-profile-label">{v.subHeading}</IonLabel>
                                    <IonInput type="text" className="profile-form-control" name="origin" value={v.inputValue} readonly />
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
                    <CarrierInsuranceCard carrierInsurance={carrierProfileInsurance} />
                    <CarrierInsuranceCard carrierInsurance={carrierProfileInsurance2} />
                </IonContent>
            </IonPage>
        );
    }
}
export default CarrierProfilePage;