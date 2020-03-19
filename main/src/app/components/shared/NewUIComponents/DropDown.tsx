import React from 'react';
import { IonItem, IonSelect, IonSelectOption, IonLabel } from '@ionic/react';
import { Trailer } from 'app/utils/constants'
import 'app/pages/Search/New/NewPage.scss';
import {NewDropDownData} from 'app/utils/mock_Data';
interface dropDownProps{
    labelName:string,
    TrailerType:string,
    dropDownChange:any

}
export const NewDropDown: React.FC<dropDownProps> = ({labelName,TrailerType ,dropDownChange }) => {
     return (
        <>
            <IonItem mode="ios" class="ion-item trailer-ion-item">
                <IonLabel mode="ios" position="floating" class="trailer_type_label">{labelName}</IonLabel>
                <IonSelect mode="ios" okText="Ok" cancelText="Cancel" interface="alert" className="search_select" name={Trailer} value={TrailerType} onIonChange={dropDownChange}>
                    {NewDropDownData.map((select, index) => (
                        <IonSelectOption key={index} value={select.name}>{select.value}</IonSelectOption>
                    ))}
                </IonSelect>
            </IonItem>
        </>
    );
};