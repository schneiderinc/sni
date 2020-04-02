import { IonContent, IonRow, IonCol, IonGrid, IonIcon, IonButton, IonLabel, IonCard, IonCardHeader, IonCardContent, IonFooter } from '@ionic/react';
import React, { PureComponent } from 'react';
import './NewPage.scss';
import { withRouter, RouteComponentProps } from 'react-router';
import { searchbarList } from 'app/utils/mock_Data';
import { Anywhere, PickUpdateError, dropUpdateError, CityError, DryVan, origin_Radius, destination_Radius, PickUpdate, Dropdate,Destination } from 'app/utils/constants';
import { NewDropDown } from 'app/components/shared/NewUIComponents/DropDown';
import SearchResultDesktop from 'app/components/shared/NewUIComponents/searchResultsDesktop';
import PickupData from 'app/components/app/Search/pickup-fields';
import DeliverypData from 'app/components/app/Search/destilation-fileds';

interface newProps extends RouteComponentProps { history: any, data: any, submitForm: any };
const currentDate = new Date().toISOString();
class NewPage extends PureComponent<newProps, any> {
  node: any = null;

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
    searchabarList: searchbarList,
    searchQuery: "",
    showSuggestions: false,
    originSearchResults: [],
    showSuggestions2: false,
    destinationSearchResults: [],
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
    origin_radious_change: false,
    destination_radious_change: false,
    rangeDisable: true,
    rangeOriginDisable: false,
    showResults: false
  }
  placeSearch = {};
  SelectedOriginVal = "";
  SelectedDestinationVal = "";

  constructor(props: any) {
    super(props);

    this.originHandle = this.originHandle.bind(this);
    this.originHandleOutside = this.originHandleOutside.bind(this);
    this.destinationHandle = this.destinationHandle.bind(this);
    this.destinationHandleOutside = this.destinationHandleOutside.bind(this);
  }

  handleChange = (event: any) => {
    const { value } = event.target;
    console.log(value);
    this.setState({
      [event.target.name]: value

    });
    if (event.target.name === origin_Radius && event.target.value !== 100) {
      this.setState({ origin_radious_change: true });
    }
    else if (event.target.name === origin_Radius && event.target.value === 100) {
      this.setState({ origin_radious_change: false });
    }
    else if (event.target.name === destination_Radius && event.target.value !== 100) {
      this.setState({ destination_radious_change: true });
    }
    else if (event.target.name === destination_Radius && event.target.value === 100) {
      this.setState({ destination_radious_change: false });
    }
    else if (event.target.name === PickUpdate && event.target.value < currentDate) {
      this.setState({ pickUpdateError: PickUpdateError });
    }
    else if (event.target.name === PickUpdate && event.target.value > currentDate) {
      this.setState({ pickUpdateError: "" });
    }
    else if (event.target.name === Dropdate && (event.target.value > currentDate || event.target.value === '')) {
      this.setState({ dropUpdateError: "" });
    } else if (event.target.name === Dropdate && event.target.value < currentDate) {
      this.setState({ dropUpdateError: dropUpdateError });
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

  ToggleChange = (event: any) => {
    event.preventDefault()
    this.setState({
      favorite: true
    });

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
    //this.props.submitForm(__searchParams);
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

  handleOrigin = (event: any) => {

    if (event.target.value !== this.state.origin) {
      if (event.target.value.length > 2) {
        var list = this.state.searchabarList.filter((item, index) => {
          if (item.city.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1) {
            return item;
          }
        });
        this.setState({ origin: event.target.value, originError: '' })
        list.length && this.setState({
          originSearchResults: list
        });
        this.originHandle('in', !!list.length);
      } else {
        this.setState({ showSuggestions: false, originError: CityError })
      }
    }
  }

  handleDestination = (event: any) => {

    if (event.target.value !== this.state.destination) {
      if (event.target.value.length > 2) {
        var list = this.state.searchabarList.filter((item, index) => {
          if (item.city.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1) {
            return item;
          }
        });
        this.setState({ destination: event.target.value, destinationError: '' })
        list.length && this.setState({
          destinationSearchResults: list
        });
        this.destinationHandle('in', !!list.length);
      } else {
        this.setState({ showSuggestions2: false, destinationError: CityError, rangeDisable: true })
      }
    }
  }

  SelectedOrigin = (originIndex: number) => {
    if (this.state.originSearchResults && this.state.originSearchResults.length > 0) {
      this.SelectedOriginVal = this.state.originSearchResults[originIndex]["city"]
      this.setState(() => (
        { origin: this.SelectedOriginVal }
      ))
    }

  }

  SelectedDestination = (destinationIndex: number) => {
    if (this.state.destinationSearchResults && this.state.destinationSearchResults.length > 0) {
      this.SelectedDestinationVal = this.state.destinationSearchResults[destinationIndex]["city"]
      this.setState(() => (
        { destination: this.SelectedDestinationVal }
      ))

    }
  }

  originHandle(flag: any, value: any) {
    flag === 'out' ? this.setState((prevState: any) => ({
      showSuggestions: !prevState.showSuggestions,
    })) : this.setState({ showSuggestions: value });

    if (this.state.showSuggestions) {
      document.addEventListener('click', this.originHandleOutside, false);
    } else {
      document.removeEventListener('click', this.originHandleOutside, false);
    }

  }

  destinationHandle(flag: any, value: any) {
    flag === 'out' ? this.setState((prevState: any) => ({
      showSuggestions2: !prevState.showSuggestions2,
    })) : this.setState({ showSuggestions2: value });
    if (this.state.showSuggestions2) {
      document.addEventListener('click', this.destinationHandleOutside, false);
    } else {
      document.removeEventListener('click', this.destinationHandleOutside, false);
    }
    if (this.state.destination) {
      this.setState({ rangeDisable: false })
    }
    if (this.state.destination.length < 0) {
      this.setState({ rangeDisable: true })
    }
  }

  originHandleOutside(event: any) {
    if ((event.target.className !== "suggestions_list" && this.node && this.node.contains(event.target)) || event.target.name === { origin }) {
      return;
    }
    this.originHandle('out', false);

  }

  destinationHandleOutside(event: any) {
    if ((event.target.className !== "suggestions_list" && this.node && this.node.contains(event.target)) || event.target.name === { Destination }) {
      return;
    }
    this.destinationHandle('out', false);
  }
  addToFavoriteClicked = ()=>{
    this.setState({
      favorite: !this.state.favorite
    });
  }
  render() {
    return (
      <>
        <IonContent className="ion-padding search_form_container" class="background">
           <form className="search-form"  >
            <IonGrid class="new_page_list search-mobile">
                <IonCard class="trailer-type-card">
                    <NewDropDown labelName="Trailer Type" TrailerType={this.state.TrailerType} dropDownChange={this.dropDownChange}/>
                </IonCard>
                <IonGrid class="search-form-mobile">
                    <IonRow class="pickup-row">
                        Pick-up
                    </IonRow>
                    <PickupData {...this.state} handleChange={this.handleChange} SelectedCity={this.SelectedOrigin} rangeDisabled={this.state.rangeOriginDisable} handleCityEvent={this.handleOrigin}/>
                    <IonCard class="delivery-type-card">
                      <IonCardHeader class={`${this.state.showDelivaryfields ? '': 'changeColor'}`} onClick={()=>{this.setState({showDelivaryfields: !this.state.showDelivaryfields})}}>
                        <span> Delivery</span>
                        {
                            this.state.showDelivaryfields ?
                                <IonIcon src="assets/icon/minus.svg"/>
                                :
                                <div className="desitnation-city">{this.state.destination}  <IonIcon src="assets/icon/plus.svg"/></div>
                        }
                      </IonCardHeader>
                      <IonCardContent class={`${this.state.showDelivaryfields ? 'fadein' : 'fadeout'}`}>
                        <DeliverypData {...this.state} handleChange={this.handleChange} SelectedCity={this.SelectedDestination} rangeDisabled={this.state.rangeDisable} handleCityEvent={this.handleDestination}/>
                      </IonCardContent>
                    </IonCard>
                </IonGrid>
                <IonCard class="fav-card">
                <IonLabel>Add as Favorite</IonLabel> <IonIcon src="assets/icon/star.svg" class={this.state.favorite? "fav-star":''} onClick={this.addToFavoriteClicked}/> 
                </IonCard>     
            </IonGrid>
            <IonGrid class="new_page_list search-desktop">
              <IonRow class="data-type">
                <IonCol>Pickup</IonCol>
                <IonCol>Delivery <NewDropDown labelName="Trailer Type" TrailerType={this.state.TrailerType} dropDownChange={this.dropDownChange}/></IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="pickup-data-feilds"><PickupData {...this.state} handleChange={this.handleChange} SelectedCity={this.SelectedOrigin} rangeDisabled={this.state.rangeOriginDisable} handleCityEvent={this.handleOrigin}/></IonCol>
                <IonCol class="delivery-data-feilds"><DeliverypData {...this.state} handleChange={this.handleChange} SelectedCity={this.SelectedDestination} rangeDisabled={this.state.rangeDisable} handleCityEvent={this.handleDestination}/></IonCol>
              </IonRow>
              <IonRow class="footer-row">
                  <IonCol><IonIcon src="assets/icon/star.svg" class={this.state.favorite? "fav-star":''} onClick={this.addToFavoriteClicked}/> <IonLabel>Add as Favorite</IonLabel></IonCol>
                  <IonCol><IonButton onClick={(event) => this.Apply(event,"desktop")}>See Results</IonButton></IonCol>
              </IonRow>
            </IonGrid>
          </form>
        </IonContent>
        <IonFooter class="searchPageFooter" >
            <IonButton expand="full" onClick={(event) => this.Apply(event,"mobile")}>See Results</IonButton>
        </IonFooter>
      </>
    );
  }
}

export default withRouter(NewPage);


