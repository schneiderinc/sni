import React, { Component } from 'react';
import './dropdown.scss';
import { IonLabel, IonSelect, IonSelectOption, IonItem, IonRow, IonCol } from '@ionic/react';

class Dropdown extends Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            selectedValue: this.props.options[0].value
        }
    }
    hideDropdownMenu = (e: any) => {
       
        this.setState({ selectedValue: e.detail.value });
      
        this.props.sortBy(this.state.selectedValue);
    }
    render() {
        const options = this.props.options;
        const showLabel = this.props.lable;
        return (
            <IonItem lines="none" class="header_select_div">
                <IonLabel>Sort by</IonLabel>
                <IonRow>
                    <IonCol >
                        <IonSelect mode="ios" name="Sort by" class= { showLabel ? "select_with_label" : "select_without_label"} onIonChange={this.hideDropdownMenu}>
                            {
                                options.map((option:any, index:any)=>(
                                    <IonSelectOption key={index} value={option.value} selected = {this.state.selectedValue === option.value ? true : false}>{option.name}</IonSelectOption>
                                ))
                            }
                        </IonSelect>
                    </IonCol>
                </IonRow>
            </IonItem>
        );
    }

    
    
}

 export default Dropdown;