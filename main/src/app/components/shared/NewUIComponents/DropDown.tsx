import React, { useState } from 'react';
import { IonItem, IonSelect, IonSelectOption, IonLabel, IonButton, IonModal, IonRow, IonCol, IonGrid } from '@ionic/react';
import { Trailer } from 'app/utils/constants'
import 'app/pages/Search/New/NewPage.scss';
import {NewDropDownData} from 'app/utils/mock_Data';
interface dropDownProps{
    labelName:string,
    TrailerType:string,
    handleChange: any,

}
export const NewDropDown: React.FC<dropDownProps> = ({labelName,TrailerType ,handleChange }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [clickedOption, setclickedOption] = useState(NewDropDownData[0]);
    const [selectedOption, setselectedOption] = useState(NewDropDownData[0]);
    const hideDropdownMenu = (option: any) => {
        setclickedOption(option);
    }
    const onConfrim = (option: any) => {
        setselectedOption(option);
        setShowOptions(false);
        let event = {target:{name:'trailer_type', value: option.name}}
        handleChange(event);
    }
     return (
        <>
            <IonGrid  class=" trailer-ion-item">
                <IonLabel mode="ios" class="trailer_type_label">{labelName}</IonLabel>
                <IonButton type="button" class="dropdown-button trailer_type_dropdown" onClick={() => (setShowOptions(true))}>
                    By {selectedOption.value} <i className="down"></i>
                </IonButton>
            </IonGrid>
            <IonModal isOpen={showOptions} cssClass="dropdown-modal">
                <div className="search_options">
                    <IonRow class="dropdown-heading"><IonCol> <p className="sortBy_text">{labelName}</p> </IonCol></IonRow>
                    <div className="options_content">
                        {NewDropDownData.map((option: any, k: any) => (
                            <IonRow key={k} onClick={() => hideDropdownMenu(option)}>
                                <IonCol class={option.name === clickedOption.name ? 'checked' : ''}>{option.value} <i className="check"></i> </IonCol></IonRow>
                        ))}
                    </div>

                    <IonRow class="dropdown-handler">
                        <IonCol size="1"></IonCol>
                        <IonCol  className="dropdown_cancel" size="5">
                            <span onClick={() => { setShowOptions(false); setclickedOption(selectedOption) }}>Cancel</span>
                        </IonCol>
                        <IonCol  className="dropdown_cancel" size="5">
                            <span onClick={() => onConfrim(clickedOption)}><b>OK</b></span>
                        </IonCol>
                        <IonCol size="1"></IonCol>

                    </IonRow>
                </div>
            </IonModal>
        </>
    );
};