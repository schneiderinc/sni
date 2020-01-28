import * as React from "react";
import { IonHeader, IonRow, IonCol, IonImg, IonBackButton, IonSegment, IonSegmentButton } from "@ionic/react";
import { IonLabel} from '@ionic/react';
import './search-header.scss';
import { withRouter, RouteComponentProps } from 'react-router';
import arrowright from 'app/utils/icon-js/arrowright';
interface HeaderProps extends RouteComponentProps { title: any, getSegment?: any, segments?: any, activeSegment?: any, backUrl?:any, editData?: any, isMap?:any, isSearch?:any }
const AppHeader: React.FC<HeaderProps> = ({ title, getSegment, segments, activeSegment, backUrl, isMap, editData, isSearch }) => {

  return (<IonHeader className="page-header">

    <IonRow class="header-desc">
      <IonCol size="2">{backUrl && <IonBackButton icon={arrowright} text="" defaultHref={backUrl}  ></IonBackButton>}</IonCol>
      <IonCol size="8"><div id="header-title">{title}</div></IonCol>
      {isMap && <IonCol size="2"><div id="header-map-icon"><img src="assets/icon/map.svg" alt="icon" /></div></IonCol>}
      {editData && <IonCol size="2"><div id="header-edit-icon"><IonImg alt="logo" src="assets/icon/edit.svg" onClick={()=> editData()} /></div></IonCol>}
      {isSearch && <IonCol size="2"><div id="header-edit-icon"><IonImg alt="logo" src="assets/icon/search_icon.svg" onClick={()=> editData()} /></div></IonCol>}
    </IonRow>
    <IonRow>
      {segments && <IonSegment mode="ios" onIonChange={(e) => getSegment(e)} class="segment_control_tabs">
        {segments.map((name: any, index: number) => (
          <IonSegmentButton mode="ios" key={index} value={name} checked={activeSegment === name}><IonLabel>{name}</IonLabel></IonSegmentButton>
        ))}
      </IonSegment>}
    </IonRow>
  </IonHeader>
  )
}

export default withRouter(AppHeader);

