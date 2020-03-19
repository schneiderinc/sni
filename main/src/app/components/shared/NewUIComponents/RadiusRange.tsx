import React from 'react';
import { IonLabel, IonRange } from '@ionic/react';

import 'app/pages/Search/New/NewPage.scss';
interface RadiusProps {
    labelName: any,
    InputValue: any,
    radious_change: any,
    name: any,
    handleChange: any,
    divClassName:string,
    rangeDisabled:any
}
export const RadiusRange: React.FC<RadiusProps> = ({labelName,InputValue ,radious_change,handleChange ,name ,divClassName,rangeDisabled}) => {
    return (
        <>
            <div className="ion-item1">
                <IonLabel mode="ios" position="floating" className="ion-label-radius">{labelName}</IonLabel>
                <div className={divClassName} >{InputValue} mi</div>
                <IonRange min={25} max={300} step={25} snaps={true} ticks={false} name={name} color={radious_change ? "primary" : "medium"} value={InputValue}
                 disabled={rangeDisabled}  className={`search_range ${radious_change ? "search_range_active" : "search_range_inactive"}`}
                    onIonChange={handleChange} />
            </div>
        </>
    );
};
