import React, { useState } from 'react';
import { IonItem, IonLabel, IonInput, IonImg } from '@ionic/react';

import 'app/pages/Search/New/NewPage.scss';
interface NewInputProps {
    Error: any,
    labelValue: any,
    InputValue: any,
    handleChange: any,
    InputName: any
}
export const NewInput: React.FC<NewInputProps> = ({ Error, labelValue, InputValue, handleChange, InputName }) => {

    const [options, setOptions] = useState([]);
    const [selectedCity, setSelectedCity] = useState(InputValue);
    const [showSuggention, setShowSuggention] = useState(false);

    const handleValueChange = (event: any) => {
        if (selectedCity !== event.target.value) {
            setSelectedCity(event.target.value);
            fetchCityList(event.target.value);
        }
        handleChange({ target: { name: InputName, value: event.target.value } });
    }
    const fetchCityList = (value: any) => {
        if (value.length > 2) {
            fetch(
                `https://atlas.microsoft.com/search/address/json?subscription-key=OAUdAUzYkM1bjzVQCdc5I1vOFSpCtf7TZcl_9DnrDpE%20&api-version=1.0&query=${value}`
            )
            .then(resp => resp.json())
            .then(json => {
                    const options = json.results.map((v: any, k: any) => {
                        return ((v.address.municipality? v.address.municipality : '')+(v.address.countrySubdivision? ', '+v.address.countrySubdivision :'')  + (v.address.countryCode ? ', '+v.address.countryCode : "")+ (v.address.postalCode ? ', '+v.address.postalCode : ""))
                    })
                    let filteredValues = options.filter(Boolean);
                    setOptions(filteredValues);
                    setShowSuggention(true);
                }
            );
        }else{
            setShowSuggention(false);
        }
    }
    const selectCity = (SearchCity: any) => {
        setSelectedCity(SearchCity);
        setShowSuggention(false);
    }
    return (
        <>
            <IonItem mode="ios" className={`typeahead-item ${Error ? "ion-error-field-validation" : "ion-field-validation"}`}>
                <IonLabel mode="ios" position="floating">{labelValue}</IonLabel>
                <IonInput type="text" className="cts-form-control" name={InputName} onIonChange={(event) => handleValueChange(event)} value={selectedCity}>
                    <IonImg slot="end" alt="logo" src="/assets/icon/search_icon.svg" className="origin-input_icon" />
                </IonInput>
            </IonItem>
            <div className="pickupdate-error">
                <p>{Error}</p>
            </div>
            {showSuggention ? <div className="suggestions_div">
                <IonItem className="suggestions_input_item">
                    <IonLabel position="floating"> <IonImg slot="end" alt="logo" src="/assets/icon/position.svg" item-right className="position_icon" />Current Location</IonLabel>
                    <IonInput className="cts-form-control " type="text" value={selectedCity} />
                </IonItem>
                <ul className="suggestions">
                    {options.map((SearchCity: any, index: number) => (<IonItem className="suggestions_item" key={index}>
                        <li className="suggestions_list" onClick={() => selectCity(SearchCity)}>{SearchCity}</li> </IonItem>
                    ))}
                </ul>
            </div> : null}
        </>
    );
};