import React, { useState } from 'react';
import { IonItem, IonSelect, IonSelectOption, IonLabel, IonButton, IonModal, IonRow, IonCol, IonGrid } from '@ionic/react';
import { Trailer } from 'app/utils/constants'
import 'app/pages/Search/New/NewPage.scss';
import {NewDropDownData} from 'app/utils/mock_Data';
interface dropDownProps{
    labelName:string,
    TrailerType:string,
    dropDownChange:any

}
export const NewDropDown: React.FC<dropDownProps> = ({labelName,TrailerType ,dropDownChange }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [clickedOption, setclickedOption] = useState(NewDropDownData[0]);
    const [selectedOption, setselectedOption] = useState(NewDropDownData[0]);
    const hideDropdownMenu = (option: any) => {
        setclickedOption(option);
    }
    const onConfrim = (option: any) => {
        setselectedOption(option);
        setShowOptions(false);
    }
     return (
        <>
            <IonGrid  class=" trailer-ion-item">
                <IonLabel mode="ios" position="floating" class="trailer_type_label">{labelName}</IonLabel>
                {/* <IonSelect mode="ios" okText="Ok" cancelText="Cancel" interface="alert" className="search_select" name={Trailer} value={TrailerType} onIonChange={dropDownChange}>
                    {NewDropDownData.map((select, index) => (
                        <IonSelectOption key={index} value={select.name}>{select.value}</IonSelectOption>
                    ))}
                </IonSelect> */}
                <IonButton type="button" class="dropdown-button trailer_type_dropdown" onClick={() => (setShowOptions(true))}>
                    <IonRow>
                        <IonCol>{selectedOption.value}</IonCol>
                        <IonCol> <i className="down"></i></IonCol>
                    </IonRow>
                    </IonButton>
            </IonGrid>
            <IonModal isOpen={showOptions} cssClass="dropdown-modal">
                <div className="search_options">
                    <IonRow class="dropdown-heading"><IonCol> <b>{labelName}</b> </IonCol></IonRow>
                    <div className="options_content">
                        {NewDropDownData.map((option: any, k: any) => (
                            <IonRow key={k} onClick={() => hideDropdownMenu(option)}>
                                <IonCol class={option.name === clickedOption.name ? 'checked' : ''}>{option.value} <i className="check"></i> </IonCol></IonRow>
                        ))}
                    </div>

                    <IonRow class="dropdown-handler">
                        <IonCol size="6">
                            <span onClick={() => { setShowOptions(false); setclickedOption(selectedOption) }}>Cancel</span>
                        </IonCol>
                        <IonCol size="6">
                            <span onClick={() => onConfrim(clickedOption)}><b>OK</b></span>
                        </IonCol>
                    </IonRow>
                </div>
            </IonModal>
        </>
    );
};