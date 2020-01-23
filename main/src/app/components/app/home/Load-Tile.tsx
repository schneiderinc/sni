import { IonItemDivider, IonCard, IonCardContent, IonGrid } from '@ionic/react';
import * as React from "react";

import {LoadTileHeader} from "app/components/app/home/Load-Tile-Header";
import {LoadTileFooter} from "app/components/app/home/Load-Tile-Footer";
import {DomainConverter} from "app/utils/common";
import { Recommended } from 'app/models/home/Loads.model';
import { Link } from 'react-router-dom';

class LoadTile extends React.Component<any, any> {

  __updatedLoads:any;
  constructor(props : any){
    super(props);
    this.__updatedLoads = DomainConverter.dataToDomain<Recommended>(Recommended, this.props);
  }
  
  public render() {
    return (
      <>
      <IonCard className="ion-card" routerLink={`/app/home/${this.props.schneider_loads_id}`} >
              <IonCardContent className="card-content">
                {/* <IonGrid>
                <LoadTileHeader origin_city = {this.__updatedLoads.origin_city} origin_from_date = {this.__updatedLoads.origin_from_date} destination_city = {this.__updatedLoads.destination_city} destination_from_date = {this.__updatedLoads.destination_from_date} />
                <IonItemDivider no-padding />
                <LoadTileFooter price = {this.__updatedLoads.price} />
                </IonGrid> */}
                <IonGrid>
                <LoadTileHeader {...this.props} />
                <IonItemDivider no-padding />
                <LoadTileFooter price = {this.props.price}  stops={this.props.total_stops}  trailer={this.props.trailer}  total_distance={this.props.total_distance} />
                </IonGrid>
              </IonCardContent>
            </IonCard>
          </>
    );
  }
}

export { LoadTile };
