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
            <IonItem mode="ios" className={`date-picker-item ${Error ? "ion-error-field-validation" : "ion-field-validation"}`}>
                <IonLabel mode="ios" className="date-picker-label">{labelName}</IonLabel>
                <IonDatetime displayFormat="MMM DD , YYYY" name={name} value={InputValue} onIonChange={handleChange} mode="ios" placeholder={placeholder}></IonDatetime> 
            </IonItem>
            <div className="pickupdate-error">
                <p>{Error}</p>
            </div>
        </>
    );
};
