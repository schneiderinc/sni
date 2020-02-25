import { IonContent, IonLabel, IonSelect, IonSelectOption, IonRow, IonCol, IonDatetime, IonInput, IonItem, IonRange, IonToggle, IonList, IonImg, IonFooter, IonBadge } from '@ionic/react';
import React, { PureComponent } from 'react';
import './NewPage.scss';
import { withRouter, RouteComponentProps } from 'react-router';
import { searchbarList } from 'app/utils/mock_Data'
interface newProps extends RouteComponentProps { history: any, data: any };
class NewPage extends PureComponent<newProps, any> {
  node: any = null;
  state = {
    origin: 'Dallas, TX',
    destination: '',
    distance: 100,
    pickUpdate: '',
    dropdate: '',
    TrailerType: 'dry_van',
    Destination_Radius: 100,
    favorite: false,
    searchResultPage: false,
    searchabarList: searchbarList,
    searchQuery: "",
    showSuggestions: false,
    originSearchResults: [],
    showSuggestions2: false,
    destinationSearchResults: [],
    newSearch: {},
    origin_radious_change: false,
    destination_radious_change: false
  }
  placeSearch = {};
  SelectedOriginVal = "";
  SelectedDestinationVal=  "";

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
      [event.target.name]: value,
    });
    if (event.target.name === "distance" && event.target.value !== 100) {
      this.setState({ origin_radious_change: true });
    }
    if (event.target.name === "distance" && event.target.value === 100) {
      this.setState({ origin_radious_change: false });
    }
    if (event.target.name === "Destination_Radius" && event.target.value !== 100) {
      this.setState({ destination_radious_change: true });
    } 
    if (event.target.name === "Destination_Radius" && event.target.value === 100) {
      this.setState({ destination_radious_change: false });
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
    const { origin, distance, pickUpdate, TrailerType, dropdate, Destination_Radius, favorite, destination } = this.state;
    event.preventDefault();
    const __searchParams = {
      origin: origin,
      distance: distance,
      destination: destination,
      pickUpdate: pickUpdate,
      TrailerType: TrailerType,
      dropdate: dropdate,
      Destination_Radius: Destination_Radius,
      favorite: favorite
    }
    //this.props.search_Submit(__searchParams);

    this.props.history.push("/app/search/results", { params: __searchParams });
    this.setState({ newSearch: Object.assign(__searchParams), searchResultPage: true })
  };
  Reset = () => {
    this.setState({
      origin: 'Dallas, TX',
      destination: 'Anywhere',
      distance: 100,
      pickUpdate: '',
      dropdate: '',
      TrailerType: 'dry_van',
      Destination_Radius: 100,
      favorite: false,
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
        this.setState({ origin: event.target.value })
        list.length && this.setState({
          originSearchResults: list
        });
        this.originHandle('in', !!list.length);
      } else {
        this.setState({ showSuggestions: false })
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
        this.setState({ destination: event.target.value })
        list.length && this.setState({
          destinationSearchResults: list
        });
        this.destinationHandle('in', !!list.length);
      } else {
        this.setState({ showSuggestions2: false })
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
  }
  originHandleOutside(event: any) {
    if ((event.target.className !== "suggestions_list" && this.node && this.node.contains(event.target)) || event.target.name === "origin") {
      return;
    }
    this.originHandle('out', false);

  }
  destinationHandleOutside(event: any) {
    if ((event.target.className !== "suggestions_list" && this.node && this.node.contains(event.target)) || event.target.name === "destination") {
      return;
    }
    this.destinationHandle('out', false);

  }
  render() {

    return (
      <>
        <IonContent className="ion-padding search_form_container" class="background">
          <div className="EnterLoad">Enter criteria and click apply to see matching loads.</div>

          <form className="search-form"  >
            <IonList className="new_page_list">

              <IonItem mode="ios" className="ion-item">
                <IonLabel mode="ios" position="floating">Origin</IonLabel>
                <IonInput type="text" className="cts-form-control" name="origin" value={this.state.origin} onIonChange={(event) => this.handleOrigin(event)} />
                <IonImg slot="end" alt="logo" src="/assets/icon/search_icon.svg" className="input_icon" />
              </IonItem>


              {this.state.showSuggestions ? <div className="suggestions_div" ref={node => { this.node = node; }}>
                <IonItem className="suggestions_input_item">

                  <IonLabel position="floating"> <IonImg slot="end" alt="logo" src="/assets/icon/position.svg" item-right className="position_icon" />Your Location</IonLabel>
                  <IonInput className="cts-form-control suggestions_input" type="text" value={this.state.origin} />
                </IonItem>
                <ul className="suggestions">
                  {this.state.originSearchResults.map((SearchCity: any, index: number) => (<IonItem className="suggestions_item" key={index}>
                    <li className="suggestions_list" onClick={() => this.SelectedOrigin(index)}>{SearchCity.city}</li> </IonItem>
                  ))}

                </ul>
              </div> : null}

              <div className="ion-item1">
                <IonLabel mode="ios" position="floating" className="ion-label-radius">Origin Radius</IonLabel>
                <div className="pickRadius" >{this.state.distance} mi</div>
                <IonRange min={25} max={250} step={25} snaps={true} ticks={false} name="distance" color={this.state.origin_radious_change ? "primary" : "medium"} value={this.state.distance} className={`search_range ${this.state.origin_radious_change ? "search_range_active" : "search_range_inactive"}`} onIonChange={this.handleChange} />
              </div>

              <IonItem mode="ios" class="ion-item">
                <IonLabel mode="ios" position="floating" className="new_page_label">Pickup Date</IonLabel>
                <IonDatetime displayFormat="MMM DD,YYYY" name="pickUpdate" value={this.state.pickUpdate}
                  onIonChange={this.handleChange} mode="ios" placeholder="Choose Pickup Date"></IonDatetime>
                <IonImg slot="end" alt="logo" src="/assets/icon/calender.svg" item-right className="input_icon" />
              </IonItem>

              <IonItem mode="ios" class="ion-item">
                <IonLabel mode="ios" position="floating">Destination</IonLabel>
                <IonInput type="text" className="cts-form-control" value={this.state.destination} name="destination" onIonChange={(event) => this.handleDestination(event)} placeholder="Anywhere" />
                <IonImg slot="end" alt="logo" src="/assets/icon/search_icon.svg" className="input_icon" />
              </IonItem>

              {this.state.showSuggestions2 ? <div className="suggestions_div" ref={node => { this.node = node; }}>
                <IonItem className="suggestions_input_item">
                  <IonLabel position="floating"> <IonImg slot="end" alt="logo" src="/assets/icon/position.svg" item-right className="position_icon" />Your Location</IonLabel>
                  <IonInput className="cts-form-control" type="text" value={this.state.destination} />

                </IonItem>
                <ul className="suggestions">
                  {this.state.destinationSearchResults.map((selectCity: any, index: number) => (<IonItem className="suggestions_item">
                    <li className="suggestions_list" key={index} onClick={() => this.SelectedDestination(index)}>{selectCity.city}</li> </IonItem>
                  ))}

                </ul>
              </div> : null}

              <div className="ion-item1">
                <IonLabel mode="ios" position="floating" className="ion-label-radius">Destination Radius</IonLabel>
                <div className="pickRadius">{this.state.Destination_Radius} mi</div>
                <IonRange min={25} max={250} step={25} snaps={true} ticks={false} name="Destination_Radius" color={this.state.destination_radious_change ? "primary" : "medium"} value={this.state.Destination_Radius}
                  className={`search_range ${this.state.destination_radious_change ? "search_range_active" : "search_range_inactive"}`} onIonChange={this.handleChange} />
              </div>

              <IonItem mode="ios" class="ion-item">
                <IonLabel mode="ios" position="floating" className="new_page_label">Delivery Date</IonLabel>
                <IonDatetime displayFormat="MMM DD,YYYY" name="dropdate" value={this.state.dropdate} onIonChange={this.handleChange} mode="ios" placeholder="Choose Delivery Date"></IonDatetime>
                <IonImg slot="end" alt="logo" src="/assets/icon/calender.svg" item-right className="input_icon" />
              </IonItem>

              <IonItem mode="ios" class="ion-item">
                <IonLabel mode="ios" position="floating" class="trailer_type_label">Trailer Type</IonLabel>
                <IonSelect mode="ios" okText="Ok" cancelText="Cancel" interface="alert" className="search_select" name="TrailerType" value={this.state.TrailerType} onIonChange={this.dropDownChange}>
                  <IonSelectOption value="dry_van">Dry Van</IonSelectOption>
                  <IonSelectOption value="refrigerated">Refrigerated</IonSelectOption>
                  <IonSelectOption value="flat_bed">Flat Bed</IonSelectOption>
                  <IonSelectOption value="specialty">Specialty</IonSelectOption>
                  <IonSelectOption value="power_only">Power Only</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
          </form>
        </IonContent>
        <IonFooter class="serach-page-footer">
          {/* <div className="search_alternate"> */}
            <IonRow className="save_as_favorite">
              <IonCol size="6">
                <div className="toggle-div">
                  <IonToggle mode="ios" className="favorite-toggle" name="favorite" checked={this.state.favorite} onIonChange={(event) => this.ToggleChange(event)}> </IonToggle>
                  <div className="save_as_favorite_text"><span>Add as Favorite</span></div>
                </div>
              </IonCol>
              {/* <IonCol size="4" className="save_as_favorite_text"><span>Add To Favorite</span></IonCol> */}
              <IonCol size="6" className="footer-col">
                <IonBadge onClick={this.Reset} class="new_badges new_badges_cancel"><IonImg className="cancel_img" src="/assets/icon/cancel.svg" /></IonBadge>
                <IonBadge class="new_badges new_badge_reset" onClick={this.Reset}><IonImg className="reset_img" src="/assets/icon/reset.svg" /></IonBadge>
                <IonBadge class="new_badges new_badge_apply" onClick={(event) => this.Apply(event)}><IonImg className="apply_img" alt="logo" src="/assets/icon/tick.svg" /></IonBadge>
              </IonCol>
            </IonRow>
          {/* </div> */}
        </IonFooter>
      </>
    );
  }
}

export default withRouter(NewPage);

