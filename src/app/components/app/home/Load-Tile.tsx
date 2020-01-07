import { IonItemDivider, IonCard, IonCardContent, IonGrid } from '@ionic/react';
import * as React from "react";
import { ILoads } from "app/schemas/Loads/Loads.schema";
import {LoadTileHeader} from "app/components/app/home/Load-Tile-Header";
import {LoadTileFooter} from "app/components/app/home/Load-Tile-Footer";
import {DomainConverter} from "app/utils/common";
import { Recommended } from 'app/models/home/Loads.model';
import { Link } from 'react-router-dom';

class LoadTile extends React.Component<ILoads, any> {

  __updatedLoads:any;
  constructor(props : ILoads){
    super(props);
    this.__updatedLoads = DomainConverter.dataToDomain<Recommended>(Recommended, this.props);
  }
  
  public render() {
    return (
      <>
      <Link to={{ pathname: '/app/loaddetails', state: this.props }}>
      <IonCard className="ion-card">
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
            </Link>
          </>
    );
  }
}

export { LoadTile };
