// import { IonItemDivider, IonCard, IonCardContent, IonGrid } from '@ionic/react';
import * as React from "react";
import { ILoads } from "app/schemas/Loads/Loads.schema";

export interface child {
  children?:any,
  loads : ILoads[],
  segmentName: any,
}
class Loads extends React.Component<child, any> {
 // eslint-disable-next-line
  constructor(props : any){
    super(props);
  } 
  
  public render() {
    console.log(this.props.segmentName);  
      return (
        <div>
            {this.props.children({
                loads: this.props.loads,
                segmentName: this.props.segmentName
            })}
        </div>
    );
  }
}

export { Loads };
