import React from 'react';
import { IonButton, IonModal } from '@ionic/react';
import './ModalPopup.scss';
import { LoadTileHeader } from '../home/Load-Tile-Header';

export const ModalPopUp: React.FC<any> = (props) => {

    const YesModal = () => {
        props.getShowToasterValue();
        props.history.push('/app/MyLoad/CarrierAssigned');
}

    return (
        <IonModal isOpen={props.showModal}>
            <div className="modalPopUp">
                <p className="modalPopUp_text">Are you sure you want to assign the Load <b>SNI_0000001</b> to Joanne?</p>
                <div className="modalPopUp_div">
                    <LoadTileHeader {...props.selectedLoad} />
                </div>
                <div className="buttons_DIV">
                    <IonButton className="modalPopUp_buttons button_NO" onClick={props.closeShowModal}>No</IonButton>
                    <IonButton className="modalPopUp_buttons button_YES" onClick={() => YesModal()}>Yes</IonButton>
                </div>
            </div>
        </IonModal>
    )
}