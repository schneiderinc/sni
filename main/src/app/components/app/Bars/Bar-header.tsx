import * as React from "react";
import { IonHeader, IonRow, IonCol, IonImg, IonBackButton, IonSegment, IonSegmentButton, IonGrid } from "@ionic/react";
import { IonLabel } from '@ionic/react';
import './search-header.scss';
import { withRouter, RouteComponentProps } from 'react-router';
import arrowright from 'app/utils/icon-js/arrowright';
import cross from "app/utils/crossIcon-js/cross";
interface HeaderProps extends RouteComponentProps { title: any, getSegment?: any, segments?: any, activeSegment?: any, backUrl?: any, editData?: any, isMap?: any, isSearch?: any, tab?: any, isMyLoad?:any }
const AppHeader: React.FC<HeaderProps> = ({ title, getSegment, segments, activeSegment, backUrl, isMap, editData, isSearch, tab, isMyLoad }) => {

  return (<IonHeader class={ title === "Search Results" || title === "MyLoad" ? `page-header-searchResults` : `page-header`}>

    <IonRow class="header-desc">
     { title === "Select A Driver" ? <IonCol size="2">{backUrl && <IonBackButton class="cross_backbutton" icon={cross} text="" defaultHref={backUrl}  ></IonBackButton>}</IonCol>
      : <IonCol size="2">{backUrl && <IonBackButton icon={arrowright} text="" defaultHref={backUrl}  ></IonBackButton>}</IonCol>}
      <IonCol size="8"><div id="header-title">{title}</div></IonCol>
      {isMap && <IonCol size="2"><div id="header-icon"><img src="assets/icon/map.svg" alt="icon" /></div></IonCol>}
      {editData && <IonCol size="2"><div id="header-icon"><IonImg alt="logo" src="assets/icon/edit.svg" onClick={() => editData()} /></div></IonCol>}
      {isSearch && <IonCol size="2"><div id="header-icon"><IonImg alt="logo" src="assets/icon/search_white.svg" /></div></IonCol>}
    </IonRow>
    <div className="desktop-header-desc">
      {backUrl && <IonGrid>
        <IonBackButton class="desktop-back-button" text={tab} defaultHref={backUrl}></IonBackButton> <span className="desktop-title">  > {title}</span>
      </IonGrid>}
      <div className="header-title">{title}</div>
    </div>
    {isMyLoad?<IonRow class="segment-row">
        <IonSegment mode="ios"  class="segment_control_tabs">
        
            <IonSegmentButton mode="ios"  ><IonLabel>Carrier Assigned</IonLabel></IonSegmentButton>
         
        </IonSegment>
      </IonRow>:null}
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

