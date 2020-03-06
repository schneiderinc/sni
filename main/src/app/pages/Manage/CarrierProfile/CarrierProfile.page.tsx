import React, { Component } from 'react';
import { IonContent, IonPage, IonLabel, IonCard, IonList, IonItem, IonInput, IonRow, IonCol, IonCardHeader, IonCardContent, IonIcon } from '@ionic/react';
import AppHeader from 'app/components/app/Bars/Bar-header';
import './carrierProfile.scss';
import { CarrierInsuranceCard } from 'app/components/app/carrierInsuranceCard/carrierInsuranceCard';
import { CarrierInfoAccordian } from 'app/components/app/carrierInsuranceCard/CarrierInfoAccordian'
class CarrierProfilePage extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showCarrier: true,
            showContact: true,
            showCarrierInsurance: true,

        };
    }
    CarrierInfo = () => {
        this.setState({ showCarrier: !this.state.showCarrier });
    }
    ContactDetails = () => {
        this.setState({ showContact: !this.state.showContact });
    }
    carrierInsurance = () => {
        this.setState({ showCarrierInsurance: !this.state.showCarrierInsurance });
    }
    render() {
        const { showCarrier, showContact, showCarrierInsurance } = this.state;
        const { manageCarrierdata, manageInsuranceData, manageInsuranceData2, manageContactdata } = this.props;
        return (
            <IonPage className="desktop-page">
                <AppHeader title="Carrier Profile" backUrl={"/app/" + this.props.module} />
                <IonContent >
                    <div className="contact">Contact Schneider if any of the fields need to be updated</div>
                    <CarrierInfoAccordian showAccordian={showCarrier} accordianClick={this.CarrierInfo} carrierHeader="CARRIER INFO" data={manageCarrierdata} />
                    <CarrierInfoAccordian showAccordian={showContact} accordianClick={this.ContactDetails} carrierHeader="CONTACT DETAILS" data={manageContactdata} />
                    <IonCard class="carrier-card">
                        <IonCardHeader class={showCarrierInsurance ? 'card-header-pad carrier-accordion-header' : 'card-header-pad2 carrier-accordion-header'} onClick={this.carrierInsurance}>
                            <span>CARRIER INSURANCE</span>
                            {
                                showCarrierInsurance ?
                                    // <i className="down"></i>
                                    <IonIcon src="assets/icon/add.svg" className="addAccordian"></IonIcon>
                                    :
                                    <IonIcon src="assets/icon/Minus.svg" className="addAccordian"></IonIcon>
                            }
                        </IonCardHeader>
                        <IonCardContent class={showCarrierInsurance ? 'fadeout' : 'fadein' + " accordianCardContent"} >
                            <p className="insurance-item">New insurance certs will show starting at the effective date. If your cert is close to expiring, please send insurance cert to xxxxxx@rmis.com’
                                 </p>
                            <CarrierInsuranceCard carrierInsurance={manageInsuranceData} />
                            <CarrierInsuranceCard carrierInsurance={manageInsuranceData2} />

                        </IonCardContent>
                    </IonCard>
                    <div className="certification-header">CERTIFICATION</div>
                    <IonCard mode="md" className="certificate-card">
                        <IonRow>
                            <IonCol size='2'><img alt="logo" src="assets/images/Certificate.png" className="certificate-png" /></IonCol>
                            <IonCol size='6'><IonList className="Hazmat Approved">HAZMAT</IonList></IonCol>
                            <IonCol size='4'><IonList className="HazmatDate Approved ">06/30/2021</IonList></IonCol>
                        </IonRow>
                    </IonCard>
                    <div className="certification-header">QUALIFICATION STATUS</div>
                    <IonCard mode="md" className="certificate-card">
                        <IonRow>
                            <IonCol size='2'><img alt="logo" src="assets/images/Qualification.png" className="certificate-png" /></IonCol>
                            <IonCol size='6' className="Approved"><IonList className="Hazmat">Approved</IonList></IonCol>
                        </IonRow>
                    </IonCard>



                </IonContent>
            </IonPage>
        );
    }
}
export default CarrierProfilePage;

