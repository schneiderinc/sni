import { IonContent, IonPage, IonCard, IonList, IonLabel, IonItem, IonInput, IonButton } from '@ionic/react';
import React, { Component } from 'react';

import AppHeader from 'app/components/app/Bars/Bar-header';
import {addDriverHeader} from 'app/utils/constants';
import './AddDriver.scss'
class AddDriver extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            primaryEmailAddress: "",
            mobileNumber: "",
            parkLocationAddress: '',
            trackNo: "",
            carrierID: "",
            showError: false
        }
    }
    driverHandler = (event: any) => {
        this.setState({ [event.target.name]: event.target.value })
        if (event.target.name === "firstName") {
            const value = event.target.value.replace(/[^A-Za-z]/ig, '')
            this.setState({
                firstName: value,
            })
        }
        if (event.target.name === "lastName") {
            const value = event.target.value.replace(/[^A-Za-z]/ig, '')
            this.setState({
                lastName: value,
            })
        }
        if (event.target.name === "primaryEmailAddress") {
            const regexvalue = new RegExp("^[a-zA-Z0-9.!#$%&amp;’'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
            if(!regexvalue.test(event.target.value)){
               this.setState({showError: true});
            } else{
                this.setState({showError: false});
            }

        }
    }
    handleSubmit = (event: any) => {
        this.props.history.push("/app/MyLoad/driverAssign")
    }

    render() {
        return (
            <IonPage className="desktop-page adduser-page">
                <AppHeader title="Add Driver" backUrl={"/app/" + this.props.module} />
                <IonContent className="driverContent">
                    <p className="Role-para">Role :<span className="Role-driver">Driver</span></p>
                    <IonCard mode="md" className="carrier-card">
                        <p className="driver-header">{addDriverHeader}</p>
                        <form className="login-form" >
                            <IonList class="driver-form">

                                <IonItem mode="ios" className="add-driver-ionitem " >
                                    <IonLabel mode="ios" position="floating" className="add-driver_Label" >FirstName</IonLabel>
                                    <IonInput type="text" className="driver-form-control" name="firstName" value={this.state.firstName}
                                        pattern="[A-Za-z]" onIonChange={(e) => this.driverHandler(e)} placeholder="Type Your First Name" />
                                </IonItem>
                                <IonItem mode="ios" className="add-driver-ionitem " >
                                    <IonLabel mode="ios" position="floating" className="add-driver_Label">LastName</IonLabel>
                                    <IonInput type="text" className="driver-form-control" name="lastName" value={this.state.lastName} onIonChange={(e) => this.driverHandler(e)} placeholder="Type Your Last Name" />
                                </IonItem>
                                <IonItem mode="ios" className="add-driver-ionitem " >
                                    <IonLabel mode="ios" position="floating" className="add-driver_Label">Primary Email Address</IonLabel>
                                    <IonInput type="email" className="driver-form-control" name="primaryEmailAddress" value={this.state.primaryEmailAddress} onIonBlur={(e) => this.driverHandler(e)} placeholder="Type Your Primary Email Address" />
                                </IonItem>
                                <p className={`feild-level-error ${this.state.showError ? 'show-error' :null}`}>Please Enter an Valid Email</p>
                                <IonItem mode="ios" className="add-driver-ionitem " >
                                    <IonLabel mode="ios" position="floating" className="add-driver_Label">Mobile Number</IonLabel>
                                    <IonInput type="number" className="driver-form-control" name="mobileNumber" value={this.state.mobileNumber} onIonChange={(e) => this.driverHandler(e)} placeholder="Type Your Mobile Number" />
                                </IonItem>
                                <IonItem mode="ios" className="add-driver-ionitem " >
                                    <IonLabel mode="ios" position="floating" className="add-driver_Label" >Park Location Address (Optional)</IonLabel>
                                    <IonInput type="text" className="driver-form-control" name="parkLocationAddress" value={this.state.parkLocationAddress} onIonChange={(e) => this.driverHandler(e)} placeholder="Type Your Park Location Address" />
                                </IonItem>
                                <IonItem mode="ios" className="add-driver-ionitem " >
                                    <IonLabel mode="ios" position="floating" className="add-driver_Label" >Tractor No (Optional)</IonLabel>
                                    <IonInput type="number" className="driver-form-control" name="trackNo" value={this.state.trackNo} onIonChange={(e) => this.driverHandler(e)} placeholder="Type Your Tractor No" />
                                </IonItem>
                                <IonItem mode="ios" className="add-driver-ionitem " lines='none'>
                                    <IonLabel mode="ios" position="floating" className="add-driver_Label" >Carrier ID</IonLabel>
                                    <IonInput type="number" className="driver-form-control" name="carrierID" value="123569" readonly />
                                </IonItem>

                            </IonList>
                        </form>
                    </IonCard>
                    <IonButton id="save" class={`${this.state.firstName.length > 0 && this.state.lastName.length > 0 && this.state.primaryEmailAddress.length > 0 && this.state.mobileNumber.length > 0 ? `add-save-btn` : `disabled-save`}`}
                        data-kind="primary" type="submit" expand="block" onClick={(event) => this.handleSubmit(event)}>SAVE</IonButton>
                </IonContent>
            </IonPage>
        );
    }
}
export default AddDriver;