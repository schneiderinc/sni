import { IonRow, IonCol, IonGrid} from '@ionic/react';
import React from 'react';
import { origin_Radius, PickUpdate, Origin } from 'app/utils/constants';
import { NewInput } from 'app/components/shared/NewUIComponents/OriginInput';
import { RadiusRange } from 'app/components/shared/NewUIComponents/RadiusRange';
import { DatePicker } from 'app/components/shared/NewUIComponents/DatePicker';

const PickupData = (props: any) => {
  const { originError, origin, originRadius, pickUpdateError, pickUpdate } = props;

  return(
    <IonGrid className="pickup-data">
    <IonRow>
      <IonCol>
        <NewInput Error={originError}  labelValue="Origin" InputValue={origin} InputName={Origin} handleChange={props.handleChange}/>
      </IonCol>
    </IonRow>
    <IonRow>
      <IonCol>
        <RadiusRange labelName="Origin Radius" rangeDisabled={props.rangeOriginDisable} InputValue={originRadius} divClassName="pickRadius" name={origin_Radius} handleChange={props.handleChange} />
      </IonCol>
    </IonRow>
    <IonRow>
      <IonCol>
        <DatePicker Error={pickUpdateError} labelName="Pickup Date" name={PickUpdate} InputValue={pickUpdate} handleChange={props.handleChange} placeholder="Choose Pickup Date" platform=""/>
      </IonCol>
    </IonRow>
  </IonGrid>
  )
  
}
export default PickupData;