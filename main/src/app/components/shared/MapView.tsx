import React from 'react';
import Map from "app/components/shared/Map"
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonPage } from '@ionic/react';
import { Location } from "app/schemas/schema";
import { createStructuredSelector } from "reselect";
import './MapView.scss';import { connect } from "react-redux";
import { getLoading } from "../../selectors/selector";
import { compose } from "redux";


interface OwnProps { }

interface StateProps {
  locations: Location[];
  mapCenter: Location;
}

interface DispatchProps { }

interface MapViewProps extends OwnProps, StateProps, DispatchProps { };

const MapView: React.FC<MapViewProps> = ({ locations, mapCenter }) => {
  return (
  <IonPage id="map-view">
    <IonContent class="map-page">
      <Map locations={locations} mapCenter={mapCenter} />
    </IonContent>
  </IonPage>
)};

const mapStateToProps = createStructuredSelector({
  locations: ()=>([
    {
      "id": 1,
      "name": "Woodbridge, New Jersey",
      "lat": 40.5499632,
      "lng": -74.3534314
    }, {
      "id": 2,
      "name": "Newark, New Jersey",
      "lat": 40.7313924,
      "lng": -74.2520958
    }
  ]),
  mapCenter: ()=>({id: 1, name: 'Woodbridge, NJ', lat: 40.5499632, lng: -74.3534314})
});

const withConnect = connect(
  mapStateToProps
);

export default compose(
  withConnect
)(React.memo(MapView));


