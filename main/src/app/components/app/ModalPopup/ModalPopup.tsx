import React, { useState } from 'react';
import { IonButton, IonModal, IonRow, IonCol } from '@ionic/react';
import { Redirect, Link } from 'react-router-dom'
import './ModalPopup.scss';
import { LoadTileHeader } from '../home/Load-Tile-Header';
interface modalProps {
    showModal: boolean,
   
    selectedLoad: any,
    
    closeShowModal:any
}



export const ModalPopUp: React.FC<any> = (props) => {

    const [redirectCarrier, setRedirect] = useState(false)
    const [isToaster, setToaster] = useState(false)
    
    const YesModal = () => {
        setRedirect(true)
        setToaster(true)
  
        props.history.push('/app/MyLoad/CarrierAssigned',{toaster:isToaster})
    }
   
    return (
        <>
            <IonModal isOpen={props.showModal}>
                <div className="modalPopUp">
                    <p className="modalPopUp_text">Are you sure you want to assign the Load #SNID12345 to Joanne?</p>
                    <div className="modalPopUp_div">
                        {/* <IonRow>
                            <IonCol className="card-col loadCardArrow-modal card-col-modal">
                                <div className="card-name card-name-modal">Dallas, TX</div>
                            </IonCol>
                            <IonCol className="loadCardArrow loadCardArrow-modal card-col-modal"><img className="card_arrow_img" /></IonCol>
                            <IonCol className=" card-col right loadCardArrow-modal card-col-modal">
                                <div className="card-name card-name-modal">Detroit, MI</div>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="card-col card-col-modal">
                                <div className="card-dt card-dt-modal">Nov 16, 10:00 AM-02:00 PM</div>
                                <div className="card-dist card-dist-modal">22 Mile Deadhead</div>
                                <div className="card-dist card-dist-modal">Unload</div>
                            </IonCol>
                            <IonCol className="card-col card-col-modal card-col-modalPopUp">
                                <div className="card-dt card-dt-modal">Nov 18, 02:00 PM-09:00 PM</div>
                                <div className="card-dist card-dist-modal">33 Mile Deadhead</div> 
                                <div className="card-dist card-dist-modal">Live Load</div>
                            </IonCol>
                        </IonRow> */}
                        <LoadTileHeader {...props.selectedLoad[0]} />
                    </div>
                    <div className="buttons_DIV">
                        <IonButton className="modalPopUp_buttons button_NO" onClick={props.closeShowModal}>No</IonButton>
                       <Link to="/app/MyLoad/CarrierAssigned"><IonButton className="modalPopUp_buttons button_YES" onClick={() =>YesModal}>Yes</IonButton></Link>
                       
                    </div>
                </div>
            </IonModal>


        </>
    )
}