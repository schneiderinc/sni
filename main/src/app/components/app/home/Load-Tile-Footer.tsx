import { IonRow, IonCol, IonBadge, IonImg } from '@ionic/react';
import * as React from "react";
import './Load-Tile.scss';

class LoadTileFooter extends React.Component<any, any> {
 // eslint-disable-next-line
  constructor(props: any) {
    super(props);
  }
  
  public render() {

    return (
      <div>
        <p className="card-price">{this.props.price ? '$'+this.props.price:<p className="card_p-elements card-contact_for_price">Contact for Price</p>}</p>
        <p className="card_p-elements card-distance">{this.props.total_distance} miles</p>
        <p className="card_p-elements card-stopOffs">{this.props.stops} stop offs</p>
        <p className="card_p-elements card-trailerType">{this.props.trailer}</p>
        <p className="card_p-elements card-lbs">15,000 lbs</p>
        <p className="card_p-elements card-hazmat">Hazmat</p>
        <p className="card_p-elements card-value">High Value</p>
      </div>
      // <IonRow className="loadCardFooter">
      //   <IonCol size="9" >
        
      //   {this.props.stops > 0 ? <IonBadge class="card_filter_badge">{this.props.stops} stop-offs </IonBadge>:null} 
      //     <IonBadge class="card_filter_badge">{this.props.trailer} </IonBadge>
      //     <IonBadge class="card_filter_badge">{this.props.total_distance} miles</IonBadge>
      //   </IonCol>
      //   <IonCol size="3" className="card_price">{this.props.price ? '$'+this.props.price:<IonImg className="priceLogo" src="assets/icon/phones.svg"/>}</IonCol>
      // </IonRow>
    );
  }
}

export { LoadTileFooter };
