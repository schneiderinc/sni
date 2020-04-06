import { IonContent, IonRow, IonCol, IonGrid, IonIcon, IonButton, IonLabel, IonCard, IonCardHeader, IonCardContent, IonFooter } from '@ionic/react';
import React, { PureComponent } from 'react';
import './NewPage.scss';
import { withRouter, RouteComponentProps } from 'react-router';
import { Anywhere, PickUpdateError, dropUpdateError, CityError, DryVan, PickUpdate, Dropdate,Destination, Origin } from 'app/utils/constants';
import { NewDropDown } from 'app/components/shared/NewUIComponents/DropDown';
import SearchResultDesktop from 'app/components/shared/NewUIComponents/searchResultsDesktop';
import PickupData from 'app/components/app/Search/pickup-fields';
import DeliverypData from 'app/components/app/Search/destilation-fileds';
interface newProps extends RouteComponentProps { history: any, data: any, submitForm: any, results: any };
const currentDate = new Date().toISOString();
class NewPage extends PureComponent<newProps, any> {
  state = {
    showDelivaryfields:false,
    origin: Anywhere,
    destination: Anywhere,
    originRadius: 100,
    pickUpdate: currentDate,
    dropdate: '',
    TrailerType: DryVan,
    Destination_Radius: 100,
    favorite: false,
    searchResultPage: false,
    pickUpdateError: "",
    dropUpdateError: '',
    destinationError: '',
    originError: '',
    newSearch: {
      origin: Anywhere,
      destination: Anywhere,
      originRadius: 100,
      pickUpdate: currentDate,
      dropdate: '',
      TrailerType: DryVan,
      Destination_Radius: 100,
      favorite: false,
    },
    rangeDisable: true,
    rangeOriginDisable: false,
    showResults: false
  }
  placeSearch = {};
  SelectedOriginVal = "";
  SelectedDestinationVal = "";

  constructor(props: any) {
    super(props);
  }

  handleChange = (event: any) => {
    const { value } = event.target;
    this.setState({
      [event.target.name]: value
    });
   if (event.target.name === PickUpdate && event.target.value < currentDate) {
      this.setState({ pickUpdateError: PickUpdateError });
    } else if (event.target.name === PickUpdate && event.target.value > currentDate) {
      this.setState({ pickUpdateError: "" });
    } else if (event.target.name === Dropdate && (event.target.value > currentDate || event.target.value === '')) {
      this.setState({ dropUpdateError: "" });
    } else if (event.target.name === Dropdate && event.target.value < currentDate) {
      this.setState({ dropUpdateError: dropUpdateError });
    } else if (event.target.name === Origin && event.target.value.length === 0) {
      this.setState({ originError: CityError });
    } else if (event.target.name === Origin && event.target.value.length) {
      this.setState({ originError: "" });
    } else if (event.target.name === Destination && event.target.value.length === 0) {
      this.setState({ destinationError: CityError });
    } else if (event.target.name === Destination && event.target.value.length) {
      this.setState({ destinationError: "" ,rangeDisable: false});
    }
  }

  componentDidMount() {
    this.setState(this.props.data);
  }

  dropDownChange = (event: any) => {
    this.setState(() => ({
      [event.name]: event.value
    }));
  }
  Apply = (event: any,platform: string) => {
    
    const { origin, originRadius, pickUpdate, TrailerType, dropdate, Destination_Radius, favorite, destination } = this.state;
    event.preventDefault();
    const __searchParams = {
      origin: origin,
      originRadius: originRadius,
      destination: destination,
      pickUpdate: pickUpdate,
      TrailerType: TrailerType,
      dropdate: dropdate,
      Destination_Radius: Destination_Radius,
      favorite: favorite
    }
    // this.props.submitForm(__searchParams);
    this.setState({ newSearch: Object.assign(__searchParams), searchResultPage: true })
    if (this.state.destinationError === ""
      && this.state.originError === ""
      && this.state.dropUpdateError === ""
      && this.state.pickUpdateError === "") {
      if (platform === "mobile") {
        this.props.history.push("/app/search/results", { params: __searchParams });
      }
      if (platform === "desktop") {
        this.setState({ showResults: true });
      }
    }
  };
  render() {
    return (
      <>
        <IonContent className="ion-padding search_form_container" class="background">
           <form className="search-form"  >
            <IonGrid class="new_page_list search-mobile">
                <IonCard class="trailer-type-card">
                    <NewDropDown labelName="Trailer Type" TrailerType={this.state.TrailerType} handleChange={this.handleChange}/>
                </IonCard>
                <IonGrid class="search-form-mobile">
                    <IonRow class="pickup-row">
                        Pick-up
                    </IonRow>
                    <PickupData {...this.state} handleChange={this.handleChange} rangeDisabled={this.state.rangeOriginDisable}/>
                    <IonCard class="delivery-type-card">
                      <IonCardHeader class={`${this.state.showDelivaryfields ? '': 'changeColor'}`} onClick={()=>{this.setState({showDelivaryfields: !this.state.showDelivaryfields})}}>
                        <span> Delivery</span>
                        {
                            this.state.showDelivaryfields ?
                                <IonIcon src="assets/icon/minus-icon.svg"/>
                                :
                                <div className="desitnation-city">{this.state.destination}  <IonIcon src="assets/icon/plus.svg"/></div>
                        }
                      </IonCardHeader>
                      <IonCardContent class={`${this.state.showDelivaryfields ? 'fadein' : 'fadeout'}`}>
                        <DeliverypData {...this.state} handleChange={this.handleChange}rangeDisabled={this.state.rangeDisable} platform="mobile"/>
                      </IonCardContent>
                    </IonCard>
                </IonGrid>
                <IonCard class="fav-card">
                <IonLabel>Add as Favorite</IonLabel> <IonIcon src="assets/icon/star.svg" class={this.state.favorite? "fav-star":''} onClick={()=>this.setState({favorite: !this.state.favorite})}/> 
                </IonCard>     
            </IonGrid>
            <IonGrid class="new_page_list search-desktop">
              <IonRow class="data-type">
                <IonCol>Pickup</IonCol>
                <IonCol>Delivery <NewDropDown labelName="Trailer Type" TrailerType={this.state.TrailerType} handleChange={this.handleChange}/></IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="pickup-data-feilds"><PickupData {...this.state} handleChange={this.handleChange} rangeDisabled={this.state.rangeOriginDisable}/></IonCol>
                <IonCol class="delivery-data-feilds"><DeliverypData {...this.state} handleChange={this.handleChange} rangeDisabled={this.state.rangeDisable} platform="desktop"/></IonCol>
              </IonRow>
              <IonRow class="footer-row">
                  <IonCol><IonIcon src="assets/icon/star.svg" class={this.state.favorite? "fav-star":''} onClick={()=>this.setState({favorite: !this.state.favorite})}/> <IonLabel>Add as Favorite</IonLabel></IonCol>
                  <IonCol><IonButton onClick={(event) => this.Apply(event,"desktop")}>See Results</IonButton></IonCol>
              </IonRow>
            </IonGrid>
          </form>
          { this.state.showResults ? <SearchResultDesktop  data ={this.props.results} {...this.props.history}/> : null}
        </IonContent>
        <IonFooter class="searchPageFooter" >
            <IonButton expand="full" onClick={(event) => this.Apply(event,"mobile")}>See Results</IonButton>
        </IonFooter>
        
      </>
    );
  }
}

export default withRouter(NewPage);


