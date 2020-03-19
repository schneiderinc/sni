import React from 'react';
import { IonIcon, IonGrid, IonButton, IonImg } from '@ionic/react';
import './CardTabFooter.scss';

export const CardTabFooter = (props: any) => {
    const footer_buttons = props.footerOptions;
    const pageName = props.pageName;
    const cardProps = {
        destination_city: props.destination_city,
        destination_deadhead: props.destination_deadhead,
        destination_from_date: props.destination_from_date,
        destination_state: props.destination_state,
        destination_to_date_time: props.destination_to_date_time,
        origin_city: props.origin_city,
        origin_deadhead: props.origin_deadhead,
        origin_from_date: props.origin_from_date,
        origin_state: props.origin_state,
        origin_to_date_time: props.origin_to_date_time,
        price: props.price,
        schneider_loads_id: props.schneider_loads_id,
        showFooter: props.showFooter,
        total_distance: props.total_distance,
        total_stops: props.total_stops,
        total_weight: props.total_weight,
        trailer: props.trailer
    };
    const buttonClicked = (name: string) => {
       
        if (name === "ASSIGN DRIVER") {
            props.history.push('/app/MyLoad/driverAssign', { response: cardProps });
        }
        if(name=== "DELETE"){
         props.particularCardDelete()
        }
    }
    return (

        <>
            {pageName === "loadPage" ?
                <>
                    <div className="callCol">
                        <IonButton data-kind="primary" type="submit" class="call_btn" onClick={() => { buttonClicked("CALL") }}><IonImg alt="logo" src="assets/icon/call.svg" className="load_btn_img" />CALL</IonButton>
                        <IonButton data-kind="primary" type="submit" class="call_btn" onClick={() => { buttonClicked("CHAT") }}><IonImg alt="logo" src="assets/icon/chat.svg" className="load_btn_img" />CHAT</IonButton>
                        <label className="switch"><input type="checkbox" id="togBtn" /><div className="slider round"></div></label>
                    </div>
                </>
                :
                <>
                    <IonGrid class={`card-footer-wraper ${footer_buttons.length === 2 ? 'wraper-for-two' : ''} ${pageName === "carrierAssign" ? 'wraper-for-carrierAssign' : ''}`}>
                        {footer_buttons.map((button: any, index: number) => (
                            <IonButton key={index} onClick={() => buttonClicked(button.label)} ><IonIcon className="tabButtonImg" src={button.icon}></IonIcon>{button.label}</IonButton>
                        ))}
                    </IonGrid>
                </>
            }
        </>
    )
}