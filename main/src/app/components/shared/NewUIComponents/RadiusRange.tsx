import React, { useState } from 'react';
import { IonLabel, IonRange, IonButton, IonGrid, IonModal, IonRow, IonCol } from '@ionic/react';

import 'app/pages/Search/New/NewPage.scss';
interface RadiusProps {
    labelName: any,
    InputValue: any,
    radious_change: any,
    name: any,
    handleChange: any,
    divClassName: string,
    rangeDisabled: any
}
export const RadiusRange: React.FC<RadiusProps> = ({ labelName, InputValue, radious_change, handleChange, name, divClassName, rangeDisabled }) => {
    const options = ["25 mi", "50 mi", "75 mi", "100 mi", "125 mi", "150 mi", "175 mi", "200 mi", "225 mi", "250 mi"];
    const [showOptions, setShowOptions] = useState(false);
    const [clickedOption, setclickedOption] = useState("100 mi");
    const [selectedOption, setselectedOption] = useState("100 mi");
    const hideDropdownMenu = (option: string) => {
        setclickedOption(option);
    }
    const onConfrim = (option: string) => {
        setselectedOption(option);
        setShowOptions(false);
        // handleChange();
    }
    return (
        <>
            <div className="ion-item1">
                <IonLabel mode="ios" position="floating" className="ion-label-radius">{labelName}</IonLabel>
                <div className={divClassName} >{InputValue} mi</div>
                <IonRange min={25} max={300} step={25} snaps={true} ticks={false} name={name} color={radious_change ? "primary" : "medium"} value={InputValue}
                    disabled={rangeDisabled} className={`search_range ${radious_change ? "search_range_active" : "search_range_inactive"}`}
                    onIonChange={handleChange} />
            </div>
            <IonGrid class="radious-dropdown">
                <IonLabel mode="ios" position="floating" className="ion-label-radius">{labelName}</IonLabel>
                <IonButton  type="button" class="dropdown-button" onClick={() => (setShowOptions(true))} >
                    <IonRow>
                        <IonCol>{selectedOption}</IonCol>
                        <IonCol> <i className="down"></i></IonCol>
                    </IonRow>
                    </IonButton>
            </IonGrid>
            <IonModal isOpen={showOptions} cssClass="dropdown-modal">
                <div className="search_options">
                    <IonRow class="dropdown-heading"><IonCol> <b>{labelName}</b> </IonCol></IonRow>
                    <div className="options_content">
                        {options.map((option: any, k: any) => (
                            <IonRow key={k} onClick={() => hideDropdownMenu(option)}>
                                <IonCol class={option === clickedOption ? 'checked' : ''}>{option} <i className="check"></i> </IonCol></IonRow>
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
