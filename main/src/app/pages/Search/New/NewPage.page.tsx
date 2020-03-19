import { IonContent, IonLabel, IonSelect, IonSelectOption, IonRow, IonCol, IonDatetime, IonInput, IonItem, IonRange, IonToggle, IonList, IonImg, IonFooter, IonBadge } from '@ionic/react';
import React, { PureComponent } from 'react';
import './NewPage.scss';
import { withRouter, RouteComponentProps } from 'react-router';
import { searchbarList } from 'app/utils/mock_Data';
import { Anywhere, PickUpdateError, dropUpdateError, CityError, DryVan, origin_Radius, destination_Radius, PickUpdate, Dropdate, Origin, Destination, NewHeader } from 'app/utils/constants';
import { NewInput } from 'app/components/shared/NewUIComponents/OriginInput';
import { RadiusRange } from 'app/components/shared/NewUIComponents/RadiusRange';
import { DatePicker } from 'app/components/shared/NewUIComponents/DatePicker';
import { NewFooter } from 'app/components/shared/NewUIComponents/Footer';
import { NewDropDown } from 'app/components/shared/NewUIComponents/DropDown';

interface newProps extends RouteComponentProps { history: any, data: any };
const currentDate = new Date().toISOString();
class NewPage extends PureComponent<newProps, any> {
  node: any = null;

  state = {
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
    this.setState({
      [event.target.name]: value

    });
    if (event.target.name === origin_Radius && event.target.value !== 100) {
      this.setState({ origin_radious_change: true });
    }
    if (event.target.name === origin_Radius && event.target.value === 100) {
      this.setState({ origin_radious_change: false });
    }
    if (event.target.name === destination_Radius && event.target.value !== 100) {
      this.setState({ destination_radious_change: true });
    }
    if (event.target.name === destination_Radius && event.target.value === 100) {
      this.setState({ destination_radious_change: false });
    }
    if (event.target.name === PickUpdate && event.target.value < currentDate) {
      this.setState({ pickUpdateError: PickUpdateError });
    }
    if (event.target.name === PickUpdate && event.target.value > currentDate) {
      this.setState({ pickUpdateError: "" });
    }
    if (event.target.name === Dropdate && event.target.value < currentDate) {
      this.setState({ dropUpdateError: dropUpdateError });
    }
    if (event.target.name === Dropdate && event.target.value > currentDate) {
      this.setState({ dropUpdateError: "" });
    }
  }

  componentDidMount() {
    this.setState(this.props.data);
  }

  dropDownChange = (event: any) => {
    this.setState(() => ({
      [event.target.name]: event.target.value
    }));

  }

  ToggleChange = (event: any) => {
    event.preventDefault()
    this.setState({
      favorite: true
    });

  }

  Apply = (event: any) => {
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
    //this.props.search_Submit(__searchParams);
    this.setState({ newSearch: Object.assign(__searchParams), searchResultPage: true })

    this.props.history.push("/app/search/results", { params: __searchParams });

  };

  Reset = () => {
    this.setState({
      destinationError: "",
      originError: "",
      pickUpdateError: '',
      dropUpdateError: '',
      origin: Anywhere,
      destination: Anywhere,
      originRadius: 100,
      pickUpdate: currentDate,
      dropdate: '',
      TrailerType: DryVan,
      Destination_Radius: 100,
      favorite: false


    })
  }

  CancelForm = () => {
    this.setState({
      origin: this.state.newSearch.origin,
      destination: this.state.newSearch.destination,
      originRadius: this.state.newSearch.originRadius,
      pickUpdate: this.state.newSearch.pickUpdate,
      dropdate: this.state.newSearch.dropdate,
      TrailerType: this.state.newSearch.TrailerType,
      Destination_Radius: this.state.newSearch.Destination_Radius,
      favorite: this.state.newSearch.favorite,
    })
  }

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
    if (this.state.destination.length<0) {
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
  render() {
    const { originError, origin, showSuggestions, originSearchResults, originRadius, origin_radious_change, pickUpdateError, pickUpdate,
      destinationError, destination, showSuggestions2, destinationSearchResults, Destination_Radius, destination_radious_change, dropUpdateError, dropdate, TrailerType, favorite } = this.state;

    return (
      <>
        <IonContent className="ion-padding search_form_container" class="background">
          <div className="EnterLoad">{NewHeader}</div>
          <form className="search-form"  >
            <IonList className="new_page_list">
              {/* <IonItem mode="ios" className={`ion-item origin-ion-item ${this.state.originError ? "ion-error-field-validation" : "ion-field-validation"}`}>
                <IonLabel mode="ios" position="floating" className="originLabel">Origin</IonLabel>
                <IonInput type="text" className="cts-form-control" name={origin} value={this.state.origin} onIonChange={(event) => this.handleOrigin(event)} />
                <IonImg slot="end" alt="logo" src="/assets/icon/search_icon.svg" className="input_icon" />
              </IonItem>
              <p className={`pickupdate-error  ${this.state.originError ? "pick-error" : "pick-without-error"}`} >{this.state.originError}</p>
            
              {this.state.showSuggestions ? <div className="suggestions_div" ref={node => { this.node = node; }}>
                <IonItem className="suggestions_input_item">
                  <IonLabel position="floating"> <IonImg slot="end" alt="logo" src="/assets/icon/position.svg" item-right className="position_icon" />Current Location</IonLabel>
                  <IonInput className="cts-form-control suggestions_input" type="text" value={this.state.origin} />
                </IonItem>
                <ul className="suggestions">
                  {this.state.originSearchResults.map((SearchCity: any, index: number) => (<IonItem className="suggestions_item" key={index}>
                    <li className="suggestions_list" onClick={() => this.SelectedOrigin(index)}>{SearchCity.city}</li> </IonItem>
                  ))}
                </ul>
              </div> : null} */}

              <NewInput Error={originError} labelClassName="originLabel" labelValue="Origin" InputValue={origin} InputName={Origin} handleCityEvent={(event: any) => this.handleOrigin(event)}
                showSuggestions={showSuggestions} SearchResults={originSearchResults} SelectedCity={this.SelectedOrigin}
              />
             <RadiusRange labelName="Origin Radius" rangeDisabled ={this.state.rangeOriginDisable} InputValue={originRadius} divClassName="pickRadius" name={origin_Radius} radious_change={origin_radious_change} handleChange={this.handleChange} />

              <DatePicker Error={pickUpdateError} labelName="Pickup Date" name={PickUpdate} InputValue={pickUpdate} handleChange={this.handleChange}
                placeholder="Choose Pickup Date" />

              <NewInput Error={destinationError} labelClassName="destinationLabel" labelValue="Destination" InputValue={destination} InputName={Destination} handleCityEvent={(event: any) => this.handleDestination(event)}
                showSuggestions={showSuggestions2} SearchResults={destinationSearchResults} SelectedCity={this.SelectedDestination}
              />
              <RadiusRange labelName="Destination Radius" rangeDisabled={this.state.rangeDisable} InputValue={Destination_Radius} divClassName="pickRadius" name={destination_Radius} radious_change={destination_radious_change} handleChange={this.handleChange} />
              <DatePicker Error={dropUpdateError} labelName="Delivery Date" name={Dropdate} InputValue={dropdate} handleChange={this.handleChange}
                placeholder="Choose Delivery Date" />
              <NewDropDown dropDownChange={this.dropDownChange} TrailerType={TrailerType} labelName="Trailer Type" />
            </IonList>
          </form>
        </IonContent>
        <NewFooter favorite={favorite} ToggleChange={(event: any) => this.ToggleChange(event)} CancelForm={this.CancelForm} Apply={(event: any) => this.Apply(event)} Reset={this.Reset} />
      </>
    );
  }
}

export default withRouter(NewPage);


