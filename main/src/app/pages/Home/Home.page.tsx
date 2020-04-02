import { IonContent, IonPage, IonRow, IonCol, IonLabel, IonFab, IonFabButton, IonIcon, IonModal, IonButton, IonItem, IonList, IonGrid, } from '@ionic/react';
import reducer from "app/reducers/Home/reducer";
import saga from "app/saga/Home/saga";
import { updateData } from "app/actions/Home/action";
import { getLoading } from "app/selectors/selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "redux";
import useInjectSaga from "app/utils/injectSaga";
import useInjectReducer from "app/utils/injectReducer";
import { makeSelectHome } from "app/selectors/Home/selector";
import React, { useState, useEffect, useRef } from 'react';
import './Home.page.scss';
import SegmentContent from 'app/pages/Home/Segment-content.page';
import Dropdown from 'app/components/core/Dropdown/dropdown';
import AppHeader from 'app/components/app/Bars/Bar-header';
import { add } from 'ionicons/icons';
import { getGPSDetails } from 'app/selectors/selector';
import { Recommended } from 'app/models/home/Loads.model';
import { watchedOfflineData } from 'app/utils/mock_Data';
import { useNetwork } from 'app/utils/useNetwork';


const key = "carrier";

interface HomeProps { data: [], loading: any, updateData: any, gpsData?: any }

const Home: React.FC<HomeProps> = ({ data, loading, updateData, gpsData }) => {

  const _model = new Recommended()

  const [segment, setSegment] = useState<any>({ name: 'Recommended', data: {} });
  const [RecommendedloadData, setRecommendedLoad] = useState<any>([]);
  const [WatchedLoad, setWatchedLoad] = useState<any>([{
    destination_city: "",
    destination_deadhead: "",
    destination_from_date: "",
    destination_state: "",
    destination_to_date_time: "",
    load_status: "",
    origin_city: "",
    origin_deadhead: "",
    origin_from_date: "",
    origin_state: "",
    origin_to_date_time: "",
    price: "",
    schneider_loads_id: "",
    total_distance: "",
    total_stops: "",
    total_weight: "",
    trailer: ""
  }]);
  const [showGpsModal, setShowGpsModal] = useState(false);
  const { getNetworkStatus, networkStatus } = useNetwork()
  if (data.length === 0 && !loading) {
    updateData();
  }

  const sortedData = (data: any) => {
    if (segment.name === "Recommended") {
      setRecommendedLoad(data)
    }
    else {
      setWatchedLoad(data)
    }
  }

  const _setOfflineWatched = (watchData: any) => {
    _model.setofflineWatchedLoads(watchData);

  }

  const _getOfflineWatched = () => {
    return _model.getofflineWatchedLoads();

  }

  useEffect(() => {
    getNetworkStatus();
    _setOfflineWatched(watchedOfflineData)
  }, [])

  useEffect(() => {
    (async () => {
      if (!networkStatus.connected && networkStatus.connected != undefined) {
        let offlineWatched = await _getOfflineWatched();
        setWatchedLoad(offlineWatched);
      } else {
        setRecommendedLoad(data);
        setWatchedLoad(data);
      }
    })()

  }, [data, networkStatus])




  const sortByOptions = [{ value: "origin_deadhead", name: "By origin deadhead" }, { value: "destination_deadhead", name: "By destination deadhead" }, { value: "price", name: "By price" }, { value: "origin_from_date", name: "By pickup date" }, { value: "total_distance", name: "By distance" }];



  return (
    <IonPage className="desktop-page">
      <AppHeader title={segment.name === "Recommended" ? "Recommended Loads" : "Watched Loads"} getSegment={(e: any) => setSegment({ name: e.detail.value as any, data: {} })} segments={['Recommended', 'Watched']} activeSegment={segment.name} />


      <IonContent className="ion-padding custom-padding load-page-content home-page">
        {data.length > 0 && <div className="short-div">
          {(segment.name === "Recommended" || segment.name === "Watched") &&
            <IonRow class="short-row">
              <IonCol size="5" class="rec_text">
                {/* <span className="recommendations_num">{RecommendedloadData&&RecommendedloadData.length | WatchedLoad && WatchedLoad.length } </span> */}
                {(segment.name === "Recommended") ? <span className="recommendations_num">{RecommendedloadData && RecommendedloadData.length} </span> : <span className="recommendations_num">{WatchedLoad && WatchedLoad.length} </span>}
                {segment.name === "Recommended" ? "Recommendations" : "Watched Loads"}
              </IonCol>
              <IonCol size="7" class="sort_select">
                <div className="select_div">
                  {/* <IonLabel className="sort_label">Sort:</IonLabel> */}
                  <Dropdown options={sortByOptions} loadData={data} sortedData={sortedData} />
                </div>
              </IonCol>
            </IonRow>}
        </div>}
        {/* <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => setShowGpsModal(true)}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        {gpsData.length >= 1 ? <IonModal isOpen={showGpsModal}>
          <IonList className="gps-list">
            {gpsData.map((_item: any, _index: number) =>
              <IonItem mode="ios" className="ion-item" key={_index}>

                <IonGrid>
                  <IonRow><IonLabel mode="ios">Latitude :{_item.latitude}</IonLabel></IonRow>
                  <IonRow><IonLabel mode="ios">Latitude :{_item.longitude}</IonLabel></IonRow>
                  <IonRow><IonLabel mode="ios">Latitude :{_item.timestamp}</IonLabel></IonRow>
                </IonGrid>
              </IonItem>
            )}
          </IonList>
          <IonButton onClick={() => setShowGpsModal(false)}>Close Modal</IonButton>
        </IonModal> : null} */}
        <SegmentContent type={segment.name} isloaded={loading} recommendedloads={RecommendedloadData} watchedLoad={WatchedLoad} load={segment.data} setView={(load: any) => { setSegment({ name: "View", data: load }) }} />
      </IonContent>
    </IonPage>
  );
}

const mapStateToProps = createStructuredSelector({

  loading: getLoading(),
  data: makeSelectHome(),
  gpsData: getGPSDetails()
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
)(Home);
