import React from 'react';
import { IonIcon, IonGrid, IonButton, IonImg } from '@ionic/react';
import './CardTabFooter.scss';

export const CardTabFooter = (props: any) => {
    console.log(props,"cardtab");
    const footer_buttons = props.footerOptions;
    const pageName = props.pageName;
    const buttonClicked = (name: string, index: number) => {
        console.log(index,'num')
        if (name === "ASSIGN DRIVER") {
            const filterAssignLoad = props.carrierAssignLoad.filter((v: any, k: any,arr:any) =>index===arr.indexOf(v))
            
            props.history.push('/app/MyLoad/driverAssign', {response:filterAssignLoad });
        }
    }
    return (
    
        <>
            {pageName === "loadPage" ?
                <>
                    <div className="callCol">
                        <IonButton data-kind="primary" type="submit" class="call_btn" onClick={() => { buttonClicked("CALL", 0) }}><IonImg alt="logo" src="assets/icon/call.svg" className="load_btn_img" />CALL</IonButton>
                        <IonButton data-kind="primary" type="submit" class="call_btn" onClick={() => { buttonClicked("CHAT", 0) }}><IonImg alt="logo" src="assets/icon/chat.svg" className="load_btn_img" />CHAT</IonButton>
                        <label className="switch"><input type="checkbox" id="togBtn" /><div className="slider round"></div></label>
                    </div>
                </>
                :
                <>
                    <IonGrid class={`card-footer-wraper ${footer_buttons.length === 2 ? 'wraper-for-two' : ''} ${pageName === "carrierAssign" ? 'wraper-for-carrierAssign' : ''}`}>
                        {footer_buttons.map((button: any, index: number) => (
                            <IonButton key={index} onClick={() => { buttonClicked(button.label,props.particularTileIndex) }}><IonIcon className="tabButtonImg" src={button.icon}></IonIcon>{button.label}</IonButton>
                        ))}
                    </IonGrid>
                </>
            }
        </>
    )
}