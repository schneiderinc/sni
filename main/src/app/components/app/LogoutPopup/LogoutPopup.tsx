import React from 'react';
import { IonButton, IonModal, IonGrid, IonRow, IonCol, IonTabBar, IonTabButton } from '@ionic/react';
import './LogoutPopup.scss';

export const LogoutPopUp: React.FC<any> = (props) => {

    const logoutModal = () => {
        props.logout();
        props.history.push('/login');
    }

    return (
        <IonModal isOpen={props.showLogoutModal}>
            <div className="logout_modalPopUp">
                <p className="modalPopUp_text">Are you sure you want to Logout?</p>
                {/* <div className="buttons_DIV">
                    <IonButton className="logoutModalButtons cancelModalButton" onClick={props.closeShowModal}>Cancel</IonButton>
                    <IonButton className="logoutModalButtons logoutButton" onClick={() => logoutModal()}>Logout</IonButton>
                </div> */}
                {/* <IonGrid className="modal_grid">
                    <IonRow>
                        <IonCol size="6">
                            <IonButton onClick={props.closeShowModal}>Cancel</IonButton>
                        </IonCol>
                        <IonCol size="6">
                            <IonButton onClick={() => logoutModal()}>Logout</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid> */}
                <IonTabBar>
                    <IonTabButton className="cancelButton" onClick={props.closeShowModal}>Cancel</IonTabButton>
                    <IonTabButton className="logoutButton" onClick={() => logoutModal()}>Logout</IonTabButton>
                    </IonTabBar>
            </div>
        </IonModal>
    )
}