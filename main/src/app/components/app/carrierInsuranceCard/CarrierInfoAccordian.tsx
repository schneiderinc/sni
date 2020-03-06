import React from 'react';
import {  IonLabel, IonCard, IonItem, IonInput, IonCardHeader, IonCardContent,IonIcon } from '@ionic/react';
interface accordianProps {
    showAccordian: any,
    accordianClick: any,
    carrierHeader: any,
    data: any
}
export const CarrierInfoAccordian: React.FC<accordianProps> = ({ showAccordian, accordianClick, carrierHeader, data }) => {

    return (
        <IonCard class="carrier-card">
            <IonCardHeader class={showAccordian ? 'card-header-pad carrier-accordion-header' : 'card-header-pad2 carrier-accordion-header'} onClick={accordianClick}>
                <IonLabel>{carrierHeader}</IonLabel>
                {
                    showAccordian ?
                    <IonIcon  src="assets/icon/add.svg" className="addAccordian"></IonIcon>
                    :
                    <IonIcon src="assets/icon/Minus.svg" className="addAccordian"></IonIcon>
                }
            </IonCardHeader>
            <IonCardContent class={showAccordian ? 'fadeout' : 'fadein' + " accordianCardContent"} >
                {data.map((carrierData: any, index: number) => (
                    <IonItem mode="ios" key={index} className="carrier-profile-ionitem" lines={index === data.length - 1 ? 'none' : 'inset'}>
                        <IonLabel mode="ios" position="floating" className="carrier-profile-label">{carrierData.subHeading}</IonLabel>
                        <IonInput type="text" className="profile-form-control" name="origin" value={carrierData.inputValue} readonly />
                    </IonItem>

                ))}
           </IonCardContent>
        </IonCard>
    )
}