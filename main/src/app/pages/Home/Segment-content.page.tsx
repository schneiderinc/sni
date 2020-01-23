import React, {Component} from 'react';
import { IonList } from '@ionic/react';
import {RecommendedError} from './RecommendedError';
import { LoadTile } from "app/components/app/home/Load-Tile";
import { Loads } from "app/components/app/home/Loads";
import { ILoads } from "app/schemas/Loads/Loads.schema";
import { LoadDetailsContainer } from "app/containers/LoadDetailsContainer";

interface SegmentProps {type:any, loads:any, setView:any, load:any, isloaded:any}
function newSearch(){
    //this.props.history && this.props.history.push("/app/search/new", { data: values });
}
const SegmentContent: React.FC<SegmentProps> = ({type, loads, setView, load, isloaded}) => {
    function getDetails(data:any){
        setView(data);
    }
    return (<div>{type === "Recommended" && (<div>
        {loads.length ? <Loads loads={loads} >{
          ({ loads }: { loads?: any }) => {
            return <IonList  className="loadTilePad">
              {loads.map((load: ILoads, index:number) => <LoadTile key={index} {...load} details={()=>{getDetails(load)}} />)}
            </IonList>
          }
        }
        </Loads>:!isloaded?(<RecommendedError loads={newSearch()} />):""}
    </div>)}
        {type === "WatchList" && (<div>
            { loads.length ? <Loads loads={loads} >{
            ({ loads }: { loads?: any }) => {
              return <IonList className="loadTilePad">              
            {loads
            .filter((load: any) => load.price !== "TBD")
            .map((load: any, index:number) => <LoadTile key={index} {...load} />)}
              </IonList>
            }
          }
          </Loads>:""}
        </div>)}
        </div>)

}

export default React.memo(SegmentContent);