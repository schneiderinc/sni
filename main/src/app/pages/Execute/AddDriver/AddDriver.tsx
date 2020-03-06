import { IonContent, IonPage, IonCard, IonList, IonLabel, IonItem, IonInput, IonCardHeader, IonCardContent, IonButton } from '@ionic/react';
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import AppHeader from 'app/components/app/Bars/Bar-header';
import { AddDriverForm } from 'app/utils/mock_Data'
import './AddDriver.scss'
class AddDriver extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <IonPage className="desktop-page adduser-page">
                <AppHeader title="Add Driver" backUrl={"/app/" + this.props.module} />
                <IonContent className="driverContent">
                    <p className="Role-para">Role :<span className="Role-driver">Driver</span></p>
                    <IonCard mode="md" className="carrier-card">
                        <p className="driver-header">Carry and update the status of loads</p>
                        <IonList class="driver-form">
                            {AddDriverForm.map((AddDriverData: any, index: number) => (
                                <IonItem mode="ios" key={index} className="add-driver-ionitem " lines={index === AddDriverForm.length - 1 ? 'none' : 'inset'}>
                                    <IonLabel mode="ios" position="floating" >{AddDriverData.subHeading}</IonLabel>
                                    <IonInput type="text" className="driver-form-control" name="origin" value={AddDriverData.inputValue} />
                                </IonItem>
                            ))}
                        </IonList>
                    </IonCard>
                    <Link to="/app/MyLoad/driverAssign"><IonButton id="save" class='add-save-btn' data-kind="primary" type="submit"  expand="block">SAVE</IonButton></Link>
                   
                </IonContent>
            </IonPage>
        );
    }
}
export default AddDriver;