import { IonItemDivider, IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import * as React from "react";

import { LoadTileHeader } from "app/components/app/home/Load-Tile-Header";
import { LoadTileFooter } from "app/components/app/home/Load-Tile-Footer";
import { DomainConverter } from "app/utils/common";
import { Recommended } from 'app/models/home/Loads.model';
import { CardTabFooter } from '../CardTabFooter/CardTabFooter';
import StopTracker from '../StopDetails/StopTracker';

class LoadTile extends React.Component<any, any> {
  __updatedLoads: any;
  constructor(props: any) {
    super(props);
    this.state={
      stopCount: this.props.stopCount,
      pageName: "loadPage",
    }
    this.__updatedLoads = DomainConverter.dataToDomain<Recommended>(Recommended, this.props);
  }
  // const stopCount = this.props.stopCount;
  public render() {
    console.log(this.props.module);
    return (
      <>
        {/* <IonCard className="ion-card"> */}
        <IonCard routerLink={`/app/${this.props.module}/${this.props.schneider_loads_id}`} className="ion-card-updated"> 
          <IonCardContent className="card-content">
            <IonGrid>
              <IonRow>
                <IonCol className="card-price-col" size="4">
                  <LoadTileFooter price={this.props.price} stops={this.props.total_stops} trailer={this.props.trailer} total_distance={this.props.total_distance} />
                </IonCol>
                <IonCol className="card-city-col">
                  <IonRow className="ellipse-row">
                    <IonCol className="ellipse-col">
                      <IonImg className="ellipse_icon" src="assets/icon/Ellipse 10.svg"/>
                    </IonCol>
                    <IonCol>
                      <div className="stops_border"></div>
                    </IonCol>
                    <IonCol>
                      <IonImg className="path_icon" src="assets/icon/Path 287.svg"/>
                    </IonCol>
                  </IonRow>
                  {/* <IonRow>
                    <IonCol>
                    <StopTracker stopCount={this.state.stopCount} pageName={this.state.pageName}/>
                    </IonCol>
                  </IonRow> */}
                  <LoadTileHeader {...this.props}/>
                </IonCol>
                {this.props.module ==="home/watched" ? <IonCol size="0.5" className="star_icon_col">
                  <IonImg className="star_icon" src="assets/icon/star-color.svg" />
                </IonCol>: null}
              </IonRow>
              {/* <LoadTileHeader {...this.props} />
              <IonItemDivider no-padding />
              <LoadTileFooter price={this.props.price} stops={this.props.total_stops} trailer={this.props.trailer} total_distance={this.props.total_distance} /> */}
            </IonGrid>
          </IonCardContent>
        </IonCard>
        {this.props.showFooter &&
          <CardTabFooter footerOptions={this.props.footerOptions} pageName={this.props.pageName} {...this.props}></CardTabFooter > 
        }
        {/* </IonCard> */}
        
      </>
    );
  }
}

export { LoadTile };
