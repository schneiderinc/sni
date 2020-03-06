import React, { Component } from 'react';
import './dropdown.scss';
import { IonRow, IonCol, IonButton, IonModal, IonIcon } from '@ionic/react';

class Dropdown extends Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            selectedOption: this.props.options[0],
            clickedOption: this.props.options[0],
            asc: false,
            isDropdown: false,
            loadData: this.props.loadData,
            upArrow: "assets/icon/up_arrow.svg",
            downArrow: "assets/icon/down_arrow.svg"
        }
    }
    hideDropdownMenu = (option: any) => {
        this.setState({ clickedOption: option });
    }
    onConfrim=(value: any)=>{
         this.setState({selectedOption:this.state.clickedOption, upArrow:this.state.downArrow, downArrow: this.state.upArrow});
        this.sortBy(value);
    }
    dropdownClick = () => {
        this.setState({ isDropdown: true })
    }
    sortBy = (x: any) => {
      
        const {asc,loadData}= this.state;
        this.setState({ asc: !asc })
        if (asc) {
            let sortedList = [...loadData].sort((a: any, b: any) => (a[x] > b[x] ? 1 : -1));
           this.setState({ isDropdown:false})
            this.props.sortedData(sortedList);
        }

        else {
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
                    <IonButton type="button" onClick={this.dropdownClick} class="search_sort_button">{this.state.selectedOption.name.length <= 10 ? this.state.selectedOption.name : this.state.selectedOption.name.slice(0,7)+"..." }<i className="down"></i></IonButton>
                </div>
                <div className="search_sortby_select desktop-sort">
                    <IonButton type="button" onClick={this.dropdownClick} class="search_sort_button">{this.state.selectedOption.name}<i className="down"></i></IonButton>
                </div>
                <div className="sortArrows" onClick={()=>{

                     this.onConfrim(this.state.clickedOption.value)
                }
               }>
                  {/* <div className="line"></div>
                  <i className="downArrow"></i>
                  <div className="line1"></div>
                  <i className="upArrow"></i> */}
                  <IonIcon src={this.state.downArrow}></IonIcon>
                  <IonIcon src={this.state.upArrow}></IonIcon>
                </div>
                <IonModal isOpen={this.state.isDropdown} cssClass="dropdown-modal">
                    <div className="search_options">
                        <IonRow><IonCol> <b>Sort By</b> </IonCol></IonRow>
                        { sortByOptions.map((option: any, k: any) => (

                            <IonRow  key={k} onClick={()=>this.hideDropdownMenu(option)}>
                                <IonCol class={option.name === this.state.clickedOption.name ? 'checked' : ''}>{option.name} <i className="check"></i> </IonCol></IonRow>
                        ))}
                        <IonRow>
                            <IonCol size="6">
                                <span onClick={() => (this.setState({isDropdown:false,clickedOption: this.state.selectedOption}))}>Cancel</span>
                            </IonCol>
                            <IonCol size="6">
                                <span onClick={()=>this.onConfrim(this.state.clickedOption.value)}><b>OK</b></span>
                            </IonCol>
                        </IonRow>
                    </div>
                </IonModal>
            </>
        );
    }
}

 export default Dropdown;