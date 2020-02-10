import { IonContent, IonPage, IonRow, IonCol, IonLabel, IonFab, IonFabButton, IonIcon, IonModal, IonButton, IonItem, IonList, IonGrid, } from '@ionic/react';
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
import AppHeader from 'app/components/app/Bars/Bar-header';
import { add } from 'ionicons/icons';
import { getGPSDetails } from 'app/selectors/selector';
const key = "carrier";
interface HomeProps { data: [], loading: any, updateData: any, gpsData?: any }

const Home: React.FC<HomeProps> = ({ data, loading, updateData, gpsData }) => {
  const [segment, setSegment] = useState<any>({ name: 'Recommended', data: {} });
  const [loadData, setSortedLoad] = useState<any>([])
  const sortedData = (data: any) => {
    setSortedLoad(data);
  }
  const [showGpsModal, setShowGpsModal] = React.useState(false);
  const sortByOptions = [{ value: "origin_deadhead", name: "Origin DeadHead" }, { value: "destination_deadhead", name: "Destination DeadHead" }, { value: "price", name: "Price" }, { value: "origin_from_date", name: "Pickup date" }, { value: "total_distance", name: "Distance" }];
  if (data.length === 0 && !loading) {
    updateData();
  }

  return (
    <IonPage>
      <AppHeader title={segment.name === "Recommended" ? "Recommended Loads" : "Watched Loads"} getSegment={(e: any) => setSegment({ name: e.detail.value as any, data: {} })} segments={['Recommended', 'Watched']} activeSegment={segment.name} />


      <IonContent className="ion-padding custom-padding load-page-content">
        {data.length > 0 && <div className="short-div">
          {(segment.name === "Recommended" || segment.name === "Watched") &&
            <IonRow class="short-row">
              <IonCol size="5" class="rec_text">
                <span className="recommendations_num">{data.length} </span>
                {segment.name === "Recommended" ? "Recommendations" : "Watched Loads"}
              </IonCol>
              <IonCol size="5.5" class="sort_select">
                <div className="select_div">
                  <IonLabel className="sort_label">Sort:</IonLabel>
                  <Dropdown options={sortByOptions} loadData={data} sortedData={sortedData} />
                </div>
              </IonCol>
              <IonCol size="1.5" className="sortArrowsCol">
                <div className="sortArrows">
                  <div className="line"></div>
                  <i className="downArrow"></i>
                  <div className="line1"></div>
                  <i className="upArrow"></i>
                </div>
              </IonCol>
            </IonRow>}
        </div>}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
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
        </IonModal> : null}
        <SegmentContent type={segment.name} isloaded={loading} loads={data} load={segment.data} setView={(load: any) => { setSegment({ name: "View", data: load }) }} />
      </IonContent>
    </IonPage>
  );
}

const mapStateToProps = createStructuredSelector({

  loading: getLoading(),
  data: makeSelectHome(),
  gpsData: getGPSDetails(),
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
