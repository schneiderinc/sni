
import React, { useEffect, useState } from 'react';
import { IonList } from '@ionic/react';
import { RecommendedError } from './RecommendedError';
import { LoadTile } from "app/components/app/home/Load-Tile";
import { Loads } from "app/components/app/home/Loads";
import { ILoads } from "app/schemas/Loads/Loads.schema";


interface SegmentProps { type: any, recommendedloads: any, setView: any, watchedLoad: any, load: any, isloaded: any }
function newSearch() {
  //this.props.history && this.props.history.push("/app/search/new", { data: values });
}

const SegmentContent: React.FC<SegmentProps> = ({ type, recommendedloads, setView, watchedLoad, load, isloaded }) => {


  function getDetails(data: any) {
    setView(data);
  }


  return (<div>{type === "Recommended" && (<div>
    {recommendedloads.length ? <Loads loads={recommendedloads} >{
      ({ loads }: { loads?: any }) => {
        return <IonList className="loadTilePad">
          {loads.map((load: ILoads, index: number) => <LoadTile key={index} {...load} details={() => { getDetails(load) }} module="home" />)}
        </IonList>
      }
    }
    </Loads> : !isloaded ? (<RecommendedError loads={newSearch()} />) : ""}
  </div>)}
    {type === "Watched" && (<div>
      {watchedLoad.length ? <Loads loads={watchedLoad} >{
       
        ({ loads }: { loads?: any }) => {
          return <IonList className="loadTilePad">
            {loads
              .filter((load: any) => load.price !== "TBD")
              .map((load: any, index: number) => <LoadTile key={index} {...load} details={() => { getDetails(load) }} module="home" />)}
          </IonList>
        }
      }
      </Loads> : ""}
    </div>)}
  </div>)

}

export default React.memo(SegmentContent);