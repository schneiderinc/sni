import { IonRow, IonCol, IonList, IonItem, IonLabel, IonInput } from '@ionic/react';
import * as React from "react";
class CarrierInsuranceCard extends React.Component<any, any> {
  // eslint-disable-next-line
  constructor(props: any) {
    super(props);
  }

  public render() {

    return (

      <IonList >
        <IonItem mode="ios" className="carrier-profile-ionitem carrier-ionitem2">

          <IonRow className="InsuranceRow">
            <IonCol size='2'> <img alt="logo" src="assets/images/insurance_icon.png" className="Insurance-png" /></IonCol>
            <IonCol size='8' className="InsuranceCol"><IonList className="Hazmat">Insurance</IonList></IonCol>

          </IonRow>
        </IonItem>
        {this.props.carrierInsurance.map((v: any, k: number) => (
          <IonItem mode="ios" key={k} className="carrier-profile-ionitem" lines={k === this.props.carrierInsurance.length - 1 ? 'none' : 'inset'}>
            <IonLabel mode="ios" position="floating">{v.subHeading}</IonLabel>
            <IonInput type="text" className="profile-form-control" name="origin" value={v.inputValue} readonly />
          </IonItem>
        )
        )}
      </IonList>

    );
  }
}

export { CarrierInsuranceCard };