import {IonCol, IonRow, IonIcon } from '@ionic/react';
import * as React from "react";

class LoadTileHeader extends React.Component<any, any> {
// eslint-disable-next-line
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <IonRow>
        <IonCol className="card-col">
          <div className="card-name"><b>{this.props.origin_city}, {this.props.origin_state}</b></div>
          <div className="card-dt">{this.props.origin_from_date}, {this.props.origin_to_date_time}</div>
          <div className="card-dist">{this.props.origin_deadhead} Mile Deadhead</div>
        </IonCol>
        <IonCol size="2" className="loadCardArrow"><img alt="logo" className="card_arrow_img" src="assets/icon/arrow.svg"/></IonCol>
        <IonCol className=" card-col right">
          <div className="card-name"><b>{this.props.destination_city}, {this.props.destination_state}</b></div>
          <div className="card-dt">{this.props.destination_from_date}, {this.props.destination_to_date_time}</div>
          <div className="card-dist">{this.props.destination_deadhead} Mile Deadhead</div>
        </IonCol>
      </IonRow>
    );
  }
}

export { LoadTileHeader };
