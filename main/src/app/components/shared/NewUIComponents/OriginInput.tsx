import React from 'react';
import { IonItem, IonLabel, IonInput, IonImg } from '@ionic/react';

import 'app/pages/Search/New/NewPage.scss';
interface NewInputProps {
    Error: any,
    labelClassName: any, 
    labelValue: any,
    InputValue: any,
    handleCityEvent: any,
    SelectedCity: any,
    SearchResults: any,
    showSuggestions: any,
    InputName:any
}
export const NewInput: React.FC<NewInputProps> = ({ Error, labelClassName, labelValue, InputValue, handleCityEvent, SelectedCity, SearchResults, showSuggestions,InputName }) => {
    return (
        <>
            <IonItem mode="ios" className={`ion-item origin-ion-item ${Error ? "ion-error-field-validation" : "ion-field-validation"}`}>
                <IonLabel mode="ios" position="floating" className={labelClassName}>{labelValue}</IonLabel>
                <IonInput type="text" className="cts-form-control" name={InputName} value={InputValue} onIonChange={(event) => handleCityEvent(event)}>
                    <IonImg slot="end" alt="logo" src="/assets/icon/search_icon.svg" className="origin-input_icon" />
                </IonInput>
            </IonItem>
            <p className={`pickupdate-error  ${Error ? "pick-error" : "pick-without-error"}`} >{Error}</p>

            {showSuggestions ? <div className="suggestions_div" ref={node => { node = node; }}>
                <IonItem className="suggestions_input_item">
                    <IonLabel position="floating"> <IonImg slot="end" alt="logo" src="/assets/icon/position.svg" item-right className="position_icon" />Current Location</IonLabel>
                    <IonInput className="cts-form-control " type="text" value={InputValue} />
                </IonItem>
                <ul className="suggestions">
                    {SearchResults.map((SearchCity: any, index: number) => (<IonItem className="suggestions_item" key={index}>
                        <li className="suggestions_list" onClick={() => SelectedCity(index)}>{SearchCity.city}</li> </IonItem>
                    ))}
                </ul>
            </div> : null}
        </>
    );
};

