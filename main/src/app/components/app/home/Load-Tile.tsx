import { IonItemDivider, IonCard, IonCardContent, IonGrid } from '@ionic/react';
import * as React from "react";

import { LoadTileHeader } from "app/components/app/home/Load-Tile-Header";
import { LoadTileFooter } from "app/components/app/home/Load-Tile-Footer";
import { DomainConverter } from "app/utils/common";
import { Recommended } from 'app/models/home/Loads.model';
import { CardTabFooter } from '../CardTabFooter/CardTabFooter';

class LoadTile extends React.Component<any, any> {

  __updatedLoads: any;
  constructor(props: any) {
    super(props);
    this.__updatedLoads = DomainConverter.dataToDomain<Recommended>(Recommended, this.props);
  }
  public render() {
    return (
      <>
        <IonCard className="ion-card">
        <IonCard routerLink={`/app/${this.props.module}/${this.props.schneider_loads_id}`} >
          <IonCardContent className="card-content">
            <IonGrid>
              <LoadTileHeader {...this.props} />
              <IonItemDivider no-padding />
              <LoadTileFooter price={this.props.price} stops={this.props.total_stops} trailer={this.props.trailer} total_distance={this.props.total_distance} />
            </IonGrid>
          </IonCardContent>
        </IonCard>
        {this.props.showFooter &&
          <CardTabFooter footerOptions={this.props.footerOptions} pageName={this.props.pageName} {...this.props}></CardTabFooter >
        }
        </IonCard>
        
      </>
    );
  }
}

export { LoadTile };
