import React, { Component } from 'react';

import { IonContent, IonPage, IonLabel, IonCard, IonList, IonItem, IonInput, IonRow, IonCol } from '@ionic/react';
import { TabHeader } from 'app/components/app/Bars/Bar-header';
import './carrierProfile.scss';
const carrierProfile = [
    {
        subHeading: "Carrier Name",
        inputValue: "IGOR TRANSPORT INC"
    },
    {
        subHeading: "Carrier ID",
        inputValue: "123569"
    },
    {
        subHeading: "Carrier SCAC Code",
        inputValue: "525689"
    },
    {
        subHeading: "Carrier Primary Business Email Address",
        inputValue: "email@schneider.com"
    },
    {
        subHeading: "Carrier single Line Address",
        inputValue: "Green Bay, Wisconsin, USA"
    },
    {
        subHeading: "Carrier Phone Number",
        inputValue: "+158 963 5260"
    },
    {
        subHeading: "Carrier Contact",
        inputValue: "John Smith"
    },
    {
        subHeading: "Email",
        inputValue: "Igor.Smith@schneider.com"
    },
    {
        subHeading: "contact",
        inputValue: "+158 963 5260"
    }
];
const carrierProfileInsurance = [
    {
        subHeading: "Type",
        inputValue: "AUTO"
    },
    {
        subHeading: "Expiry",
        inputValue: "12/31/2020"
    },
    {
        subHeading: "Coverage Amount",
        inputValue: "$30,000"
    }
];
const carrierProfileInsurance2 = [
    {
        subHeading: "Type",
        inputValue: "CARGO"
    },
    {
        subHeading: "Expiry",
        inputValue: "12/31/2020"
    },
    {
        subHeading: "Coverage Amount",
        inputValue: "$1,000,000.00"
    }
]
class CarrierProfilePage extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <IonPage className="menu_page">
                <TabHeader Title="Carrier Profile"  toggleBtn={this.state.toggleBtn}  tab={this.state.tab} {...this.props}/>
                <IonContent >
                    <IonCard mode="md" className="carrier-card">
                        <IonList >
                            {carrierProfile.map((v, k) => (
                                <IonItem mode="ios" key={k} className="carrier-profile-ionitem">
                                    <IonLabel mode="ios" position="floating">{v.subHeading}</IonLabel>  
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
                            <IonCol size='6'><IonList className="Hazmat">Approved</IonList></IonCol>
                        </IonRow>
                    </IonCard>
                    <div className="certification-header">CERTIFICATION</div>
                    <IonCard mode="md" className="certificate-card">
                        <IonRow>
                            <IonCol size='2'><img alt="logo" src="assets/images/Certificate.png" className="certificate-png" /></IonCol>
                            <IonCol size='6'><IonList className="Hazmat">HAZMAT</IonList></IonCol>
                            <IonCol size='4'><IonList className="HazmatDate">06/30/2021</IonList></IonCol>
                        </IonRow>
                    </IonCard>
                    <div className="certification-header">CARRIER INSURANCE</div>
                    <IonCard mode="md" className="insurance-carrier-card">
                        <IonList >
                            <IonItem mode="ios" className="carrier-profile-ionitem carrier-ionitem2">
                                <IonRow className="InsuranceRow">
                                    <IonCol size='4'> <img alt="logo" src="assets/images/insurance_icon.png" className="Insurance-png" /></IonCol>
                                    <IonCol size='8'><IonList className="Hazmat insuranceText">Insurance</IonList></IonCol>
                                </IonRow>
                            </IonItem>
                            {carrierProfileInsurance.map((v, k) => (
                                <IonItem mode="ios" key={k} className="carrier-profile-ionitem">
                                    <IonLabel mode="ios" position="floating">{v.subHeading}</IonLabel>
                                    <IonInput type="text" className="profile-form-control" name="origin" value={v.inputValue} readonly />
                                </IonItem>
                            )
                            )}
                        </IonList>
                    </IonCard>
                    <IonCard mode="md" className="insurance-carrier-card">
                        <IonList >
                            <IonItem mode="ios" className="carrier-profile-ionitem carrier-ionitem2">

                                <IonRow className="InsuranceRow">
                                    <IonCol size='4'> <img alt="logo" src="assets/images/insurance_icon.png" className="Insurance-png " /></IonCol>
                                    <IonCol size='8'><IonList className="Hazmat insuranceText">Insurance</IonList></IonCol>
                                </IonRow>
                                </IonItem>
                            {carrierProfileInsurance2.map((v, k) => (
                                <IonItem mode="ios" key={k} className="carrier-profile-ionitem">
                                    <IonLabel mode="ios" position="floating">{v.subHeading}</IonLabel>
                                    <IonInput type="text" className="profile-form-control" name="origin" value={v.inputValue} readonly />
                                </IonItem>
                            )
                            )}
                        </IonList>
                    </IonCard>
                </IonContent>
            </IonPage>
        );
    }
}
export default CarrierProfilePage;