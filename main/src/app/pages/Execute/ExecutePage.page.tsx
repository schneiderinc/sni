import { IonContent, IonPage, IonCardContent, IonCard, IonGrid, IonRow, IonCol, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import React, { Component } from 'react';
import AppHeader from 'app/components/app/Bars/Bar-header';
import MapView from "app/components/shared/MapView";
import { Link } from 'react-router-dom'
import './ExecutePage.page.scss';
class ExecutePage extends Component<any, any> {
	constructor(props: any) {
		super(props);
	}
	render() {
		const { myLoadCard } = this.props;
		return (
             <IonPage className="desktop-page">
             <AppHeader title="MyLoad" />
             <IonContent>
                 <div style={{ padding: '20px' }}>
                     <IonGrid>
                         <IonRow >
                             <IonCol className="thumbnail-item-col">
                                 <IonCard class="myload-tab-card">
                                         <Link to="/app/MyLoad/CarrierAssigned">
                                             <div className="circle-div">
                                                 99
                                             </div>
                                             <IonGrid className="item-dev">
                                                 <img className="thumbnail-img" alt="assign" src="assets/icon/carrier.svg" />
                                                 <div className="itemlabel">Carrier Assigned</div>
                                             </IonGrid>
                                         </Link>
                                 </IonCard>

                             </IonCol>
                             <IonCol className="thumbnail-item-col">
                                 <IonCard class="myload-tab-card">
                                     <div className="thumbnail-item-card">
                                         <Link to="/app/MyLoad/CarrierAssigned">
                                             <div className="circle-div">5
                                             </div>
                                             <IonGrid className="item-dev">
                                                 <img className="thumbnail-img" alt="assign" src="assets/icon/assign.svg" />
                                                 <div className="itemlabel">Driver {"\n"}Assigned</div>
                                             </IonGrid>
                                         </Link>
                                     </div>
                                 </IonCard>
                             </IonCol>
                         </IonRow>
                         <IonRow >
                             <IonCol className="thumbnail-item-col">
                                 <IonCard class="myload-tab-card">
                                    
                                         <Link to="/app/MyLoad/CarrierAssigned">
                                             <div className="circle-div">8</div>
                                            
                                             <IonGrid className="item-dev">
                                                 <img className="thumbnail-img" alt="assign" src="assets/icon/tr.svg" />
                                                <div className="itemlabel">In-Transit</div>
                                             </IonGrid>
                                         </Link>
                                    </IonCard>
                             </IonCol>
                             <IonCol className="thumbnail-item-col">
                                 <IonCard class="myload-tab-card">
                                  
                                         <Link to="/app/MyLoad/CarrierAssigned">
                                             <div className="circle-div">99</div>
                                            
                                             <IonGrid className="item-dev">
                                                 <img className="thumbnail-img" alt="assign" src="assets/icon/invoice.svg" />
                                                 <div className="itemlabel">Delivered {"\n"}Needs PPWK</div>
                                             </IonGrid>
                                         </Link>

                                 </IonCard>
                             </IonCol>
                         </IonRow>
                         <IonRow >
                             <IonCol className="thumbnail-item-col">
                                 <IonCard class="myload-tab-card">
                                   
                                         <Link to="/app/MyLoad/CarrierAssigned">
                                             <div className="circle-div">99</div>
                                            
                                             <IonGrid className="item-dev">
                                                 <img className="thumbnail-img" alt="assign" src="assets/icon/delivered.svg" />
                                                 <div className="itemlabel">Recently{"\n"}Delivered Loads</div>
                                             </IonGrid>
                                         </Link>
                                    
                                 </IonCard>
                             </IonCol>
                             <IonCol className="thumbnail-item-col">
                                 <IonCard class="myload-tab-card"> 
                                         <Link to="/app/MyLoad/CarrierAssigned">
                                             <div className="circle-div">6</div>
                
                                             <IonGrid className="item-dev">
                                                 <img className="thumbnail-img" alt="assign" src="assets/icon/paid.svg" />
                                                 <div className="itemlabel">Manage{"\n"} Financials</div>
                                             </IonGrid>
                                         </Link>
                        
                                 </IonCard>
                             </IonCol>
                         </IonRow>
                     </IonGrid>
                 </div>
             </IonContent>
         </IonPage>
		);
	}
}

export default ExecutePage;