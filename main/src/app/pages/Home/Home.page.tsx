import { IonContent, IonPage, IonRow, IonSegment, IonSegmentButton, IonCol, IonLabel, IonHeader } from '@ionic/react';
import reducer from "../../reducers/Home/reducer";
import saga from "../../saga/Home/saga";
import { updateData } from "app/actions/Home/action";
import { getLoading } from "../../selectors/selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "redux";
import useInjectSaga from "app/utils/injectSaga";
import useInjectReducer from "app/utils/injectReducer";
import { makeSelectHome } from "../../selectors/Home/selector";
import React, { useState } from 'react';
import './Home.page.scss';
import SegmentContent from 'app/pages/Home/Segment-content.page';
import Dropdown from 'app/components/core/Dropdown/dropdown';

const key = "carrier";
interface HomeProps { data: [], loading: any, updateData: any }

const Home: React.FC<HomeProps> = ({ data, loading, updateData}) => {
  const [segment, setSegment] = useState<any>({name:'Recommended', data:{}});
  const [loadData,setSortedLoad]=useState<any>([])
  var __prevState:any ="";
  const sortedData=(data: any)=> {
  console.log(data,"data")
    setSortedLoad(data);
    console.log(loadData,"data")
  }
 
  const sortByOptions = [{ value: "origin_deadhead", name: "Origin DeadHead" }, { value: "destination_deadhead", name: "Destination DeadHead" }, { value: "price", name: "Price" }, { value: "origin_from_date", name: "Pickup date" }, { value: "total_distance", name: "Distance" }];
  if (data.length === 0 && !loading) {
    updateData();
  }
  return (
    <IonPage>
      <IonHeader className="page-header">
        <div id="header-title">{segment.name === "Recommended" ? "Recommended Loads" : "Watched Loads"}</div>
        
        <IonSegment mode="ios" onIonChange={(e) => setSegment({name:e.detail.value as any, data:{}})} class="segment_control_tabs">
          <IonSegmentButton mode="ios" value="Recommended" checked={segment.name === 'Recommended'} class="segment_recommended">
          <IonLabel>Recommended</IonLabel>
            </IonSegmentButton>
          <IonSegmentButton mode="ios" value="WatchList" checked={segment.name === 'WatchList'}>
          <IonLabel>WatchList</IonLabel> 
            </IonSegmentButton>
        </IonSegment>
      </IonHeader>
      {data.length > 0 && <div className="short-div">
        {segment.name === "Recommended" &&
          <IonRow class="short-row">
            <IonCol size="5" class="rec_text">
              <b>{data.length}</b>   
            </IonCol>
            <IonCol size="7" class="sort_select">
              <div className="select_div">
                <IonLabel className="sort_label">Sort:</IonLabel>
                <Dropdown options={sortByOptions} loadData={data} sortedData={sortedData} />
              </div>
            </IonCol>
          </IonRow>}
      </div>}
     
      <IonContent className="ion-padding custom-padding load-page-content">
        <SegmentContent type={segment.name} isloaded={loading} loads={data} load={segment.data} setView={(load:any) =>{ setSegment({name:"View", data:load})}} />
      </IonContent>
    </IonPage>
  );
}

const mapStateToProps = createStructuredSelector({
  loading: getLoading(),
  data: makeSelectHome()
});

const mapDispatchToProps = (dispatch: Function) => ({
  updateData: () => dispatch(updateData())
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = useInjectReducer({ key, reducer });
const withSaga = useInjectSaga({ key, saga });

export default compose(
  withSaga,
  withReducer,
  withConnect
)(React.memo(Home));
