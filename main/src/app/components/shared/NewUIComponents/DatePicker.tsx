import React from 'react';
import { IonLabel, IonItem, IonDatetime} from '@ionic/react';

import 'app/pages/Search/New/NewPage.scss';
import { platform } from 'os';
interface DatePickerProps{
    labelName:any,
    InputValue:any ,
    placeholder:any,
    handleChange :any ,
    Error:any,
    name:any,
    platform:string
}
export const DatePicker: React.FC<DatePickerProps> = ({labelName,InputValue ,placeholder,handleChange ,Error,name,platform }) => {
    const minDate = new Date().toISOString().slice(0,10);
return (
        <>
            <IonItem mode="ios" className={`date-picker-item ${Error ? "ion-error-field-validation" : "ion-field-validation"}`} lines={name === "dropdate" && platform === "mobile" ? 'none' : 'full'}>
                <IonLabel mode="ios" className="date-picker-label">{labelName}</IonLabel>
                <IonDatetime displayFormat="MMM DD , YYYY" min={minDate} yearValues={[2020,2021,2022]} name={name} value={InputValue} onIonChange={handleChange} mode="ios" placeholder={placeholder}></IonDatetime> 
            </IonItem>
            <div className="pickupdate-error">
                <p>{Error}</p>
            </div>
        </>
    );
};
