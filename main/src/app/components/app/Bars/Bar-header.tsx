import * as React from "react";
import { IonHeader, IonRow, IonCol, IonImg, IonBackButton, IonSegment, IonSegmentButton } from "@ionic/react";
import { IonLabel} from '@ionic/react';
import './search-header.scss';
import { withRouter, RouteComponentProps } from 'react-router';

interface HeaderProps extends RouteComponentProps { title: any, getSegment?: any, segments?: any, activeSegment?: any, backUrl?:any, editData?: any, isMap?:any, isSearch?:any }
const AppHeader: React.FC<HeaderProps> = ({ title, getSegment, segments, activeSegment, backUrl, isMap, editData, isSearch }) => {

  return (<IonHeader className="page-header">

    <IonRow class="header-desc">
      <IonCol size="2">{backUrl && <IonBackButton text="" defaultHref={backUrl}></IonBackButton>}</IonCol>
      <IonCol size="8"><div id="header-title">{title}</div></IonCol>
      {isMap && <IonCol size="2"><div id="header-map-icon"><img src="assets/icon/Map.png" alt="icon" /></div></IonCol>}
      {editData && <IonCol size="2"><div id="header-edit-icon"><IonImg alt="logo" src="assets/icon/Edit.png" onClick={()=> editData()} /></div></IonCol>}
      {isSearch && <IonCol size="2"><div id="header-edit-icon"><IonImg alt="logo" src="assets/icon/menu_search.svg" onClick={()=> editData()} /></div></IonCol>}
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

