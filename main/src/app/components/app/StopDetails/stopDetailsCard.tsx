import React, { useState } from 'react';
import { IonRow, IonCol, IonGrid, IonCard, IonCardHeader, IonCardContent } from '@ionic/react';
import { StopDetails } from 'app/schemas/Loads/Loads.schema';
import StopDetailsCard from 'app/components/app/StopDetails/StopDetails';
import StopTracker from 'app/components/app/StopDetails/StopTracker';

export const StopDetailContent = (props: any) => {
    const stopCount = props.stopCount;
    const stop_details = props.stopDetails;
    const [showStops, setshowStops]=useState(false);
    return (
        <IonCard class="ion-card">
            <IonCardHeader class={`accordion-header ${showStops ? '': 'changeColor'}`} onClick={()=>{setshowStops(!showStops)}}>
                <span>Stop Details</span>
                {
                    showStops ?
                        <i className="up"></i>
                        :
                        <i className="down"></i>
                }
            </IonCardHeader>
            <IonCardContent class={`load_detail_card ${showStops ? 'fadein' : 'fadeout'}`}>
                <IonGrid class="load_details_grid">
                    <IonRow>
                        <IonCol size="1">
                            <StopTracker stopCount={stopCount} pageName={props.pageName}/>
                        </IonCol>
                        <IonCol size="11" class="load_details_col">
                            {
                                stop_details.map((details: StopDetails, index: any) => (
                                    <div className={`load_stop_details ${index === 0 ? 'origin_details' : ''} ${index === stop_details.length - 1 ? 'destination_details' : ''}`} key={index}>
                                        <StopDetailsCard stopDetails={details} place={index} stopCount={stopCount} />
                                    </div>)
                                )
                            }
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    )
    
}
export default StopDetailContent;