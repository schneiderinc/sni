import React, { Component } from 'react';
import './dropdown.scss';
import { IonRow, IonCol, IonButton, IonModal, IonIcon } from '@ionic/react';

class Dropdown extends Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            selectedOption: this.props.options[0],
            clickedOption: this.props.options[0],
            asc: true,
            isDropdown: false,
            loadData: this.props.loadData,
            upArrowActivate: "assets/icon/sortarrow_up_active.svg",
            downArrowActivate: "assets/icon/sortarrow_down_active.svg",
            upArrowDeactive: "assets/icon/sortarrow_up_deactive.svg",
            downArrowDeactive: "assets/icon/sortarrow_down_deactive.svg",
            slectedValue: this.props.options[0].value   
        }
    }
    hideDropdownMenu = (option: any) => {
        this.setState({ clickedOption: option });
        if(this.state.slectedValue !== option.value){
            this.setState({asc: true});
        }
    }
    onConfrim=(value: any)=>{
         this.setState({selectedOption:this.state.clickedOption, downArrowDeactive: this.state.downArrowActivate, downArrowActivate: this.state.downArrowDeactive, upArrowActivate: this.state.upArrowDeactive, upArrowDeactive: this.state.upArrowActivate, slectedValue: value});
        this.sortBy(value);

    }
    dropdownClick = () => {
        this.setState({ isDropdown: true })
    }
    sortBy = (x: any) => {
        const {asc,loadData}= this.state;
        this.setState({ asc: !asc })
        if (asc) {
            console.log("asc");
            let sortedList = [...loadData].sort((a: any, b: any) => (a[x] > b[x] ? 1 : -1));
           this.setState({ isDropdown:false})
            this.props.sortedData(sortedList);
        } else {
            let sortedList = [...loadData].sort((a: any, b: any) => (a[x] > b[x] ? -1 : 1));
            this.setState({isDropdown: false })
            this.props.sortedData(sortedList);
        }
    }
    render() {
        const sortByOptions = this.props.options;
        return (
            <>
                <div className="search_sortby_select">
                    
                    <IonButton type="button" expand="full" onClick={this.dropdownClick} class="search_sort_button">{this.state.selectedOption.name.length <= 18 ? this.state.selectedOption.name : this.state.selectedOption.name.slice(0, 20) + "..."}
                    </IonButton>
                   <i className="down"></i>
                </div>
                <div className="search_sortby_select desktop-sort">
                    <IonButton type="button" onClick={this.dropdownClick} class="search_sort_button">{this.state.selectedOption.name}<i className="down"></i></IonButton>
                </div>
                <div className="sortArrows" onClick={() => {

                    this.onConfrim(this.state.clickedOption.value)
                }
               }>
                  {/* <IonIcon src={this.state.downArrowDeactive}></IonIcon>
                  <IonIcon src={this.state.upArrowActivate}></IonIcon> */}
                  <IonIcon src="assets/icon/sort icon.svg"></IonIcon>
                </div>
                <IonModal isOpen={this.state.isDropdown} cssClass="dropdown-modal">
                    <div className="search_options">
                        <IonRow class="dropdown-heading"><IonCol> <p className="sortBy_text">Sort By</p> </IonCol></IonRow>
                        {sortByOptions.map((option: any, k: any) => (

                            <IonRow key={k} onClick={() => this.hideDropdownMenu(option)}>
                                <IonCol class={option.name === this.state.clickedOption.name ? 'checked' : ''}>{option.name} <i className="check"></i> </IonCol></IonRow>
                        ))}
                        <IonRow class="dropdown-handler">
                            <IonCol size="1"></IonCol>
                            <IonCol size="5" className="dropdown_cancel">
                                <span onClick={() => (this.setState({ isDropdown: false, clickedOption: this.state.selectedOption }))}>Cancel</span>
                            </IonCol>
                            <IonCol size="5" className="dropdown_cancel">
                                <span onClick={() => this.onConfrim(this.state.clickedOption.value)}><b>OK</b></span>
                            </IonCol>
                             <IonCol size="1"></IonCol>
                        </IonRow>
                    </div>
                </IonModal>
            </>
        );
    }
}

export default Dropdown;