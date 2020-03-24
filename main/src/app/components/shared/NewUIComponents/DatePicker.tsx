import React from 'react';
import { IonLabel, IonItem, IonDatetime, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';

import 'app/pages/Search/New/NewPage.scss';
interface DatePickerProps{
    labelName:any,
    InputValue:any ,
    placeholder:any,
    handleChange :any ,
    Error:any,
    name:any
}
export const DatePicker: React.FC<DatePickerProps> = ({labelName,InputValue ,placeholder,handleChange ,Error,name }) => {
return (
        <>
            <IonItem mode="ios" className={`ion-item  ${Error ? "ion-error-field-validation" : "ion-field-validation"}`}>
                <IonLabel mode="ios" position="floating" className="new_page_label">{labelName}</IonLabel>
                <IonGrid class="date-feild">
                    <IonRow>
                        <IonCol size="10">
                            <IonDatetime displayFormat="MMM DD,YYYY" name={name} value={InputValue} onIonChange={handleChange} mode="ios" placeholder={placeholder}></IonDatetime>
                        </IonCol>
                        <IonCol size="2">
                            <IonImg alt="logo" src="/assets/icon/calender.svg" item-right className="input_icon" />
                        </IonCol>
                    </IonRow> 
                </IonGrid>
            </IonItem>
            <p className={`pickupdate-error  ${Error ? "pick-error" : "pick-without-error"}`} >{Error}</p>
        </>
    );
};
