import { IonRow, IonCol, IonGrid} from '@ionic/react';
import React from 'react';
import { destination_Radius, Dropdate, Destination } from 'app/utils/constants';
import { NewInput } from 'app/components/shared/NewUIComponents/OriginInput';
import { RadiusRange } from 'app/components/shared/NewUIComponents/RadiusRange';
import { DatePicker } from 'app/components/shared/NewUIComponents/DatePicker';
const DeliverypData = (props: any) => {
  const { destinationError, destination, Destination_Radius, dropUpdateError, dropdate, platform } = props;

  return (
    <IonGrid className="delivery-data">
    <IonRow>
      <IonCol>
        <NewInput Error={destinationError} labelValue="Destination" InputValue={destination} InputName={Destination} handleChange={props.handleChange}/>
      </IonCol>
    </IonRow>
    <IonRow>
      <IonCol>
        <RadiusRange labelName="Destination Radius" rangeDisabled={props.rangeDisable} InputValue={Destination_Radius} divClassName="pickRadius" name={destination_Radius} handleChange={props.handleChange} />
      </IonCol>
    </IonRow>
    <IonRow>
      <IonCol>
        <DatePicker Error={dropUpdateError} labelName="Delivery Date" name={Dropdate} InputValue={dropdate} handleChange={props.handleChange} placeholder="Choose Delivery Date" platform={platform}/>
      </IonCol>
    </IonRow>
  </IonGrid>
  )
  
}
export default DeliverypData;