import { IonRow, IonCol, IonBadge } from '@ionic/react';
import * as React from "react";



class LoadTileFooter extends React.Component<any, any> {
 // eslint-disable-next-line
  constructor(props: any) {
    super(props);
  }
  
  public render() {

    return (
      <IonRow className="loadCardFooter">
        <IonCol size="9" >
        
          <IonBadge class="card_filter_badge">{this.props.stops} stop-offs </IonBadge>
          <IonBadge class="card_filter_badge">{this.props.trailer} </IonBadge>
          <IonBadge class="card_filter_badge">{this.props.total_distance} miles</IonBadge>
        </IonCol>
        <IonCol size="3" className="card_price">{this.props.price ? '$'+this.props.price:""}</IonCol>
      </IonRow>
    );
  }
}

export { LoadTileFooter };
