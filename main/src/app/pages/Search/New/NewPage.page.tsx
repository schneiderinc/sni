import { IonContent, IonLabel, IonSelect, IonSelectOption, IonRow, IonCol, IonButton, IonDatetime, IonInput, IonItem, IonRange, IonToggle, IonList, IonImg, IonFooter } from '@ionic/react';
import React, { PureComponent } from 'react';
import './NewPage.scss';



class NewPage extends PureComponent<any, any> {
  state = {
    origin: '',
    destination: '',
    distance: 100,
    pickUpdate: '',
    dropdate: '',
    TrailerType: 'VIJ',
    Destination_Radius: 100,
    favorite: false,
    searchResultPage: false,
    searchabarList: [{
      city: "Hyderabad"
    },
    {
      city: "Hydernagar"
    },
    {
      city: "Delhi"
    },
    {
      city: "Kashmir"
    },
    {
      city: "Vijayarai"
    },
    {
      city: "Vijayawada"
    },
    {
      city: "Vijaya"
    },
    {
      city: "Kurnool"
    }],
    searchQuery: "",
    showSuggestions: false,
    originSearchResults: [],
    showSuggestions2: false,
    destinationSearchResults: [],

    newSearch: {}
  }

  handleChange = (event: any) => {
    const { value } = event.target;
    this.setState({
      [event.target.name]: value
    });
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
    this.props.search_Submit(__searchParams);
    this.setState({ newSearch: Object.assign(__searchParams), searchResultPage: true })
  };
  Reset = () => {


    this.setState({
      origin: '',
      destination: '',
      distance: 100,
      pickUpdate: '',
      dropdate: '',
      TrailerType: 'VIJ',
      Destination_Radius: 100,
      favorite: false


    })
  }
  handleOrigin = (e: any) => {

    this.setState({ origin: e.target.value })

    if (this.state.origin.length > 2) {
      this.setState({ showSuggestions: true })
      this.setState({
        originSearchResults: this.state.searchabarList.filter((item, index) => {
          if (item.city.toLowerCase().indexOf(this.state.origin) !== -1) {
            return item;
          }
        })
      })


    }


  }
  handleDestination = (e: any) => {

    this.setState({ destination: e.target.value })

    if (this.state.destination.length > 2) {
      this.setState({ showSuggestions2: true })
      this.setState({
        destinationSearchResults: this.state.searchabarList.filter((item, index) => {
          if (item.city.toLowerCase().indexOf(this.state.destination) !== -1) {
            return item;
          }
        })
      })


    }
  }
  SelectedOrigin = (k: any) => {

    if (this.state.originSearchResults && this.state.originSearchResults.length > 0) {
      this.setState(() => (
        { origin: this.state.originSearchResults[k]["city"] }
      ))
      this.setState({ showSuggestions: false })
    }
  }
  SelectedDestination = (k: any) => {

    if (this.state.destinationSearchResults && this.state.destinationSearchResults.length > 0) {
      this.setState(() => (
        { destination: this.state.destinationSearchResults[k]["city"] }
      ))
      this.setState({ showSuggestions2: false })
    }
  }

  render() {

    return (
      <>
        <IonContent className="ion-padding search_form_container" class="background">
          <div className="contianer">
            <div className="EnterLoad"> Enter new Search criteria and apply search to see matching loads</div>

            <form className="search-form"  >
              <IonList className="new_page_list">

                <IonItem className="ion-item">
                  <IonLabel position="floating">Origin</IonLabel>
                  <IonInput type="text" className="cts-form-control" name="origin" value={this.state.origin} onIonChange={(e) => this.handleOrigin(e)} />
                  <IonImg slot="end" alt="logo" src="../../assets/icon/Search icon color.png" className="input_icon" />
                </IonItem>
                {/* {this.state.showSuggestions ? <div className="suggestions_div">
                <IonItem className="suggestions_input_item">
                  <IonLabel position="floating"> <IonImg slot ="end" alt="logo" src="../../assets/icon/position.png" item-right className="position_icon" />Your Location</IonLabel>
                  <IonInput className="cts-form-control" type="text"/>
                
                </IonItem>
                <ul className="suggestions">
                  {this.state.originSearchResults.map((v: any, k: number) => (<IonItem className="suggestions_item">
                    <li className="suggestions_list" key={k} onClick={() => this.SelectedOrigin(k)}>{v.city}</li> </IonItem>
                  ))}

                </ul>
              </div> : null} */}

                <div className="ion-item1">
                  <IonLabel position="floating" className="ion-label-radius">Origin Radius</IonLabel>
                  <div className="pickRadius" >{this.state.distance} mi</div>
                  <IonRange min={1} max={300} step={1} snaps={true} ticks={false} name="distance" color="primary" value={this.state.distance} className="search_range" onIonChange={this.handleChange} />
                </div>

                <IonItem class="ion-item">
                  <IonLabel position="floating" className="new_page_label">Pickup Date</IonLabel>
                  <IonDatetime displayFormat="DD/MM/YYYY" name="pickUpdate" value={this.state.pickUpdate}
                    onIonChange={this.handleChange}></IonDatetime>
                  <IonImg slot="end" alt="logo" src="../../assets/icon/calender.png" item-right className="input_icon" />
                </IonItem>

                <IonItem class="ion-item">
                  <IonLabel position="floating">Destination</IonLabel>
                  <IonInput type="text" className="cts-form-control" value={this.state.destination} name="destination" onIonChange={(e) => this.handleDestination(e)} />
                  <IonImg slot="end" alt="logo" src="../../assets/icon/Search icon color.png" className="input_icon" />
                </IonItem>
                {this.state.showSuggestions2 ? <ul className="suggestions">
                  {this.state.destinationSearchResults.map((v: any, k: number) => (
                    <li key={k} onClick={() => this.SelectedDestination(k)}>{v.city}</li>
                  ))}

                </ul> : null}

                <div className="ion-item1">
                  <IonLabel position="floating" className="ion-label-radius">Destination Radius</IonLabel>
                  <div className="pickRadius">{this.state.Destination_Radius} mi</div>
                  <IonRange min={1} max={300} step={1} snaps={true} ticks={false} name="Destination_Radius" color="primary" value={this.state.Destination_Radius} className="search_range" onIonChange={this.handleChange} />
                </div>

                <IonItem class="ion-item">
                  <IonLabel position="floating" className="new_page_label">Delivery Date</IonLabel>
                  <IonDatetime displayFormat="DD/MM/YYYY" name="dropdate" value={this.state.dropdate} onIonChange={this.handleChange}></IonDatetime>
                  <IonImg slot="end" alt="logo" src="../../assets/icon/calender.png" item-right className="input_icon" />
                </IonItem>

                <IonItem class="ion-item">
                  <IonLabel position="floating" class="trailer_type_label">Trailer Type</IonLabel>
                  <IonSelect okText="Okay" cancelText="Dismiss" interface="popover" className="ion-select" name="TrailerType" value={this.state.TrailerType} onIonChange={this.dropDownChange}>
                    <IonSelectOption value="Dry Van">Dry Van</IonSelectOption>
                    <IonSelectOption value="Wet Van">Wet Van</IonSelectOption>
                    <IonSelectOption value="Lorry">Lorry</IonSelectOption>
                    <IonSelectOption value="Container Lorry">Container Lorry</IonSelectOption>
                  </IonSelect>
                </IonItem>

              </IonList>
            </form>
          </div>
        </IonContent>
        <IonFooter>
          <div className="search_alternate">
            <IonRow className="save_as_favorite">
              <IonCol size="2"> <IonToggle mode="ios" name="favorite" checked={this.state.favorite} onIonChange={(e) => this.ToggleChange(e)}> </IonToggle> </IonCol>
              <IonCol size="10" className="save_as_favorite_text"><span>Add To Favorite</span></IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton class="search_buttons reset_btn" data-kind="primary" type="submit" expand="block" onClick={this.Reset}>RESET</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class="cts-btn search_buttons" data-kind="primary" type="submit" expand="block" disabled={!this.state.origin || !this.state.destination} onClick={(e) => this.Apply(e)}>APPLY</IonButton>
              </IonCol>
            </IonRow>

          </div>
        </IonFooter>
      </>
    );
  }
}

export default NewPage;

