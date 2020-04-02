import { IonCol, IonRow, IonImg } from '@ionic/react';
import * as React from "react";

class LoadTileHeader extends React.Component<any, any> {
  // eslint-disable-next-line
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (

<>
<div>
  <p className="origin_city">{this.props.origin_city}, {this.props.origin_state}</p>
  <p className="origin_milehead load_header_elements">Live load, {this.props.origin_deadhead} mi deadhead </p>
  <p className="origin_dateTime load_header_elements">{this.props.origin_from_date}  {this.props.origin_to_date_time}</p>
  
  <p className="origin_city">{this.props.destination_city}, {this.props.destination_state}</p>
  <p className="origin_milehead load_header_elements">Live unload, {this.props.destination_deadhead} Mile Deadhead</p>
  <p className="origin_dateTime load_header_elements">{this.props.destination_from_date}, {this.props.destination_to_date_time}</p>
</div>
      {/* <IonRow>
        <IonCol className="card-col loadCardArrow-modal card-col-modal">
          <div className="card-name">{this.props.origin_city}, {this.props.origin_state}</div>
        </IonCol>
        <IonCol className="loadCardArrow loadCardArrow-modal card-col-modal"><img className="card_arrow_img" /></IonCol>
        <IonCol className=" card-col right loadCardArrow-modal card-col-modal">
          <div className="card-name">{this.props.destination_city}, {this.props.destination_state}</div>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol className="card-col card-col-modal">
          <div className="card-dt card-dt-modal">{this.props.origin_from_date}, {this.props.origin_to_date_time}</div>
          <div className="card-dist card-dist-modal">{this.props.origin_deadhead} Mile Deadhead</div>
          <div className="card-load card-dist-modal">Unload</div>
        </IonCol>
        <IonCol className="card-col card-col-modal card-col-modalPopUp">
          <div className="card-dt card-dt-modal">{this.props.destination_from_date}, {this.props.destination_to_date_time}</div>
          <div className="card-dist card-dist-modal">{this.props.destination_deadhead} Mile Deadhead</div>
          <div className="card-dist card-dist-modal">Live Load</div>
        </IonCol>
      </IonRow> */}
      </>
      // <IonRow>
      //   <IonCol className="card-col">
      //     <div className="card-name">{this.props.origin_city}, {this.props.origin_state}</div>
      //     <div className="card-dt">{this.props.origin_from_date}, {this.props.origin_to_date_time}</div>
      //     <div className="card-dist">{this.props.origin_deadhead} Mile Deadhead</div>
      //   </IonCol>
      //   <IonCol className="loadCardArrow"><IonImg className="card_arrow_img" /></IonCol>
      //   <IonCol className=" card-col right">
      //     <div className="card-name">{this.props.destination_city}, {this.props.destination_state}</div>
      //     <div className="card-dt">{this.props.destination_from_date}, {this.props.destination_to_date_time}</div>
      //     <div className="card-dist">{this.props.destination_deadhead} Mile Deadhead</div>
      //   </IonCol>
      // </IonRow>
    );
  }
}

export { LoadTileHeader };
