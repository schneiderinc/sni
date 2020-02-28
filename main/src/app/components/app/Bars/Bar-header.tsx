import * as React from "react";
import { IonHeader, IonRow, IonCol, IonImg, IonBackButton, IonSegment, IonSegmentButton, IonGrid, IonIcon } from "@ionic/react";
import { IonLabel } from '@ionic/react';
import './search-header.scss';
import { withRouter, RouteComponentProps } from 'react-router';
import arrowright from 'app/utils/icon-js/arrowright';
interface HeaderProps extends RouteComponentProps { title: any, getSegment?: any, segments?: any, activeSegment?: any, backUrl?: any, editData?: any, isMap?: any, isSearch?: any, tab?: any }
const AppHeader: React.FC<HeaderProps> = ({ title, getSegment, segments, activeSegment, backUrl, isMap, editData, isSearch, tab }) => {

  const tabs = tab && tab.split("/");
  return (<IonHeader className="page-header">

    <IonRow class="header-desc">
      <IonCol size="2">{backUrl && <IonBackButton icon={arrowright} text="" defaultHref={backUrl}  ></IonBackButton>}</IonCol>
      <IonCol size="8"><div id="header-title">{title}</div></IonCol>
      {isMap && <IonCol size="2"><div id="header-icon"><img src="assets/icon/map.svg" alt="icon" /></div></IonCol>}
      {editData && <IonCol size="2"><div id="header-icon"><IonImg alt="logo" src="assets/icon/edit.svg" onClick={() => editData()} /></div></IonCol>}
      {isSearch && <IonCol size="2"><div id="header-icon"><IonImg alt="logo" src="assets/icon/search_white.svg" /></div></IonCol>}
    </IonRow>
    <div className="desktop-header-desc">
      {backUrl && <IonGrid>
        {tabs && tabs.map((tab: string,index:number)=>(
          <div key={index}>
            <IonBackButton class="desktop-back-button" text={tab} defaultHref={backUrl}></IonBackButton>
            <span className="breadcrumb-devider">></span>
          </div>
        ))}
       <span className="desktop-title">{title}</span>
      </IonGrid>}
      <IonRow class="header-title">
        <IonCol size="11"> {title}</IonCol>
        <IonCol size="1" class="desktop-header-icon">
          {editData && <IonIcon src="assets/icon/search_edit_color.svg" onClick={() => editData()} />}
          {isSearch && <IonIcon src="assets/icon/search_white.svg" />}
        </IonCol>
      </IonRow>
     
    </div>
    {segments &&
      <IonRow class="segment-row">
        <IonSegment mode="ios" onIonChange={(e) => getSegment(e)} class="segment_control_tabs">
          {segments.map((name: any, index: number) => (
            <IonSegmentButton mode="ios" key={index} value={name} checked={activeSegment === name}><IonLabel>{name}</IonLabel></IonSegmentButton>
          ))}
        </IonSegment>
      </IonRow>}
  </IonHeader>
  )
}

export default withRouter(AppHeader);

