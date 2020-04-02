import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardContent } from '@ionic/react';
const TermsAndCondition = () =>{
    const [showTerms, setshowTerms]=useState(false);
    return(
        <IonCard class="ion-card" >
            <IonCardHeader class={`accordion-header ${showTerms ? '': 'changeColor'}`} onClick={()=>{setshowTerms(!showTerms)}}>
                <span>Terms &amp; Conditions </span>
                {
                    showTerms ?
                        <i className="up"></i>
                        :
                        <i className="down"></i>
                }
            </IonCardHeader>
            <IonCardContent class={`term-class ${showTerms ? 'fadein' : 'fadeout'}`}>
                <p className="terms_conditions_p">A shipment tender document will be sent to you once assigned within the Schneider Transportation Management System. The carrier must follow this shipment tender documentation, any changes to the shipment will cause an updated tender which would include updated payment information.</p>
                <p className="terms_conditions_p">This transaction is subject to and governed by the written agreement between you and Schneider Transportation Management, a division of Schneider National Carriers, Inc. and the terms of this site.</p>
            </IonCardContent>
        </IonCard>
    )
}
export default TermsAndCondition;