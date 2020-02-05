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
    destination: 'Anywhere',
    distance: 100,
    pickUpdate: '',
    dropdate: '',
    TrailerType: 'Dry Van',
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
    form_modified: false
  }
  placeSearch = {};
  SelectedOriginVal = "";
  reset = false;
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
      form_modified: true
    });
    if (this.reset) {
      this.setState({ form_modified: false });
      this.reset = false
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
  ToggleChange = (e: any) => {
    e.preventDefault()

    this.setState({
      favorite: true
    });

  }
  Apply = (e: any) => {
    const { origin, distance, pickUpdate, TrailerType, dropdate, Destination_Radius, favorite, destination } = this.state;
    e.preventDefault();

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

    this.reset = true;
    this.setState({
      origin: 'Dallas, TX',
      destination: 'Anywhere',
      distance: 100,
      pickUpdate: '',
      dropdate: '',
      TrailerType: 'Dry Van',
      Destination_Radius: 100,
      favorite: false,
      form_modified: false
    })
  }

  handleOrigin = (e: any) => {

    if (e.target.value !== this.state.origin) {
      if (e.target.value.length > 2) {
        var list = this.state.searchabarList.filter((item, index) => {
          if (item.city.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
            return item;
          }
        });
        this.setState({ origin: e.target.value })
        list.length && this.setState({
          originSearchResults: list
        });
        this.originHandle('in', !!list.length);
      } else {
        this.setState({ showSuggestions: false })
      }
    }
  }
  handleDestination = (e: any) => {

    if (e.target.value !== this.state.destination) {
      if (e.target.value.length > 2) {
        var list = this.state.searchabarList.filter((item, index) => {
          if (item.city.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
            return item;
          }
        });
        this.setState({ destination: e.target.value })
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
      this.setState(() => (
        { destination: this.state.destinationSearchResults[destinationIndex]["city"] }
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
  originHandleOutside(e: any) {
    if ((e.target.className !== "suggestions_list" && this.node && this.node.contains(e.target)) || e.target.name === "origin") {
      return;
    }
    this.originHandle('out', false);

  }
  destinationHandleOutside(e: any) {
    if ((e.target.className !== "suggestions_list" && this.node && this.node.contains(e.target)) || e.target.name === "destination") {
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
                <IonInput type="text" className="cts-form-control" name="origin" value={this.state.origin} onIonChange={(e) => this.handleOrigin(e)} />
                <IonImg slot="end" alt="logo" src="../../assets/icon/Search icon color.png" className="input_icon" />
              </IonItem>


              {this.state.showSuggestions ? <div className="suggestions_div" ref={node => { this.node = node; }}>
                <IonItem className="suggestions_input_item">

                  <IonLabel position="floating"> <IonImg slot="end" alt="logo" src="../../assets/icon/position.png" item-right className="position_icon" />Your Location</IonLabel>
                  <IonInput className="cts-form-control suggestions_input" type="text" value={this.state.origin} />
                </IonItem>
                <ul className="suggestions">
                  {this.state.originSearchResults.map((v: any, k: number) => (<IonItem className="suggestions_item" key={k}>
                    <li className="suggestions_list" onClick={() => this.SelectedOrigin(k)}>{v.city}</li> </IonItem>
                  ))}

                </ul>
              </div> : null}

              <div className="ion-item1">
                <IonLabel mode="ios" position="floating" className="ion-label-radius">Origin Radius</IonLabel>
                <div className="pickRadius" >{this.state.distance} mi</div>
                <IonRange min={25} max={250} step={25} snaps={true} ticks={false} name="distance" color={this.state.form_modified ? "primary" : "medium"} value={this.state.distance} className="search_range" onIonChange={this.handleChange} />
              </div>

              <IonItem mode="ios" class="ion-item">
                <IonLabel mode="ios" position="floating" className="new_page_label">Pickup Date</IonLabel>
                <IonDatetime displayFormat="MMM DD,YYYY" name="pickUpdate" value={this.state.pickUpdate}
                  onIonChange={this.handleChange} mode="ios" placeholder="Choose Pickup Date"></IonDatetime>
                <IonImg slot="end" alt="logo" src="../../assets/icon/calender.png" item-right className="input_icon" />
              </IonItem>

              <IonItem mode="ios" class="ion-item">
                <IonLabel mode="ios" position="floating">Destination</IonLabel>
                <IonInput type="text" className="cts-form-control" value={this.state.destination} name="destination" onIonChange={(e) => this.handleDestination(e)} />
                <IonImg slot="end" alt="logo" src="../../assets/icon/Search icon color.png" className="input_icon" />
              </IonItem>

              {this.state.showSuggestions2 ? <div className="suggestions_div" ref={node => { this.node = node; }}>
                <IonItem className="suggestions_input_item">
                  <IonLabel position="floating"> <IonImg slot="end" alt="logo" src="../../assets/icon/position.png" item-right className="position_icon" />Your Location</IonLabel>
                  <IonInput className="cts-form-control" type="text" value={this.state.destination} />

                </IonItem>
                <ul className="suggestions">
                  {this.state.destinationSearchResults.map((v: any, k: number) => (<IonItem className="suggestions_item">
                    <li className="suggestions_list" key={k} onClick={() => this.SelectedDestination(k)}>{v.city}</li> </IonItem>
                  ))}

                </ul>
              </div> : null}

              <div className="ion-item1">
                <IonLabel mode="ios" position="floating" className="ion-label-radius">Destination Radius</IonLabel>
                <div className="pickRadius">{this.state.Destination_Radius} mi</div>
                <IonRange min={25} max={250} step={25} snaps={true} ticks={false} name="Destination_Radius" color={this.state.form_modified ? "primary" : "medium"} value={this.state.Destination_Radius}
                  className={`search_range ${this.state.form_modified ? "search_range_active" : "search_range_inactive"}`} onIonChange={this.handleChange} />
              </div>

              <IonItem mode="ios" class="ion-item">
                <IonLabel mode="ios" position="floating" className="new_page_label">Delivery Date</IonLabel>
                <IonDatetime displayFormat="MMM DD,YYYY" name="dropdate" value={this.state.dropdate} onIonChange={this.handleChange} mode="ios" placeholder="Choose Delivery Date"></IonDatetime>
                <IonImg slot="end" alt="logo" src="../../assets/icon/calender.png" item-right className="input_icon" />
              </IonItem>

              <IonItem mode="ios" class="ion-item">
                <IonLabel mode="ios" position="floating" class="trailer_type_label">Trailer Type</IonLabel>
                <IonSelect okText="Okay" cancelText="Dismiss" interface="popover" className="search_select" name="TrailerType" value={this.state.TrailerType} onIonChange={this.dropDownChange}>
                  <IonSelectOption value="Dry Van">Dry Van</IonSelectOption>
                  <IonSelectOption value="Wet Van">Refeer</IonSelectOption>
                  {/* <IonSelectOption value="Lorry">Lorry</IonSelectOption>
                    <IonSelectOption value="Container Lorry">Container Lorry</IonSelectOption> */}
                </IonSelect>
              </IonItem>

            </IonList>
          </form>
        </IonContent>
        <IonFooter >
          <div className="search_alternate">
            <IonRow className="save_as_favorite">
              <IonCol size="2"> <IonToggle mode="ios" name="favorite" checked={this.state.favorite} onIonChange={(e) => this.ToggleChange(e)}> </IonToggle> </IonCol>
              <IonCol size="4" className="save_as_favorite_text"><span>Add To Favorite</span></IonCol>
              <IonCol size="6">
                <IonBadge onClick={this.Reset} class="new_badges new_badges_cancel"><IonImg className="cancel_img" alt="logo" src="../../assets/icon/cancel.png" /></IonBadge>
                <IonBadge class="new_badges new_badge_reset" onClick={this.Reset}><IonImg className="reset_img" alt="logo" src="../../assets/icon/reset.png" /></IonBadge>
                <IonBadge class="new_badges new_badge_apply" onClick={(e) => this.Apply(e)}><IonImg className="apply_img" alt="logo" src="../../assets/icon/tick.png" /></IonBadge>
              </IonCol>
            </IonRow>
            {/* <IonRow>
              <IonCol>
                <IonButton class="search_buttons reset_btn" data-kind="primary" type="submit" expand="block" onClick={this.Reset}>RESET</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class="cts-btn search_buttons" data-kind="primary" type="submit" expand="block" disabled={!this.state.origin || !this.state.destination} onClick={(e) => this.Apply(e)}>APPLY</IonButton>
              </IonCol>
            </IonRow> */}

          </div>
        </IonFooter>
      </>
    );
  }
}

export default withRouter(NewPage);

