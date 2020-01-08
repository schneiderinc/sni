import React, { Component } from 'react';
import { IonContent, IonPage, IonCard, IonCardContent, IonGrid, IonItemDivider, IonCardHeader, IonButton, IonRow, IonCol, IonImg } from '@ionic/react';
import { TabHeader } from 'app/components/app/Bars/Bar-header'
import { LoadTileHeader } from 'app/components/app/home/Load-Tile-Header';
import { LoadTileFooter } from 'app/components/app/home/Load-Tile-Footer';
import { StopDetails } from 'app/schemas/Loads/Loads.schema';
import StopDetailsCard from 'app/components/app/StopDetails/StopDetails';
import StopTracker from 'app/components/app/StopDetails/StopTracker';
import './LoadDetails.scss';
class LoadDetailsPage extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			tab: false,
			toggleBtn: false,
			show: false,
			showTerms: true,
			showDocument: true,
			showStops: true
		};
		this.loadTerms = this.loadTerms.bind(this);
		this.loadDocuments = this.loadDocuments.bind(this);
		this.loadStops = this.loadStops.bind(this);
	}
	loadTerms() {
		this.setState({ showTerms: !this.state.showTerms });
	}
	loadDocuments() {
		this.setState({ showDocument: !this.state.showDocument });
	}
	loadStops() {
		this.setState({ showStops: !this.state.showStops });
	}
	render() {
		const loadDetails = this.props.loadDetails;
		const stopCount =  this.props.stopCount;
		const stop_details = this.props.stopDetails;

		return (
			<>
				{loadDetails ?
						<IonPage >
							<TabHeader className="load_details_header" Title={"Load#" + (loadDetails ? loadDetails.schneider_loads_id : "")} loadDetailsTab={true} {...this.props} />
							<IonContent className="ion-padding">
								<IonCard className="ion-card">
									<IonCardContent className="card-content">
										<IonGrid>
											<LoadTileHeader {...loadDetails} />
											<IonItemDivider no-padding />
											<LoadTileFooter price={loadDetails.price} stops={loadDetails.total_stops} trailer={loadDetails.trailer} total_distance={loadDetails.total_distance} />
											<IonRow>
												<IonCol>
													<IonButton data-kind="primary" type="submit" class="call_btn"><IonImg alt="logo" src="../../assets/icon/call.png" className="load_btn_img" />CALL</IonButton>
												</IonCol>
												<IonCol>
													<IonButton data-kind="primary" type="submit" class="call_btn"><IonImg alt="logo" src="../../assets/icon/chat.png" className="load_btn_img" />CHAT</IonButton>
												</IonCol>
												<IonCol>
													<IonButton data-kind="primary" type="submit" class="call_btn"><IonImg alt="logo" src="../../assets/icon/watched.png" className="load_btn_img"/>WATCH</IonButton>
												</IonCol>
											</IonRow>
										</IonGrid>
									</IonCardContent>
								</IonCard>
									<IonCard class="ion-card">
										<IonCardHeader class="accordion-header" onClick={this.loadStops}>
											<span>Stop Details</span>
											{
												this.state.showStops ?
													<i className="down"></i>
													:
													<i className="up"></i>
											}
										</IonCardHeader>
										<IonCardContent class={`load_detail_card ${this.state.showStops ? 'fadeout' : 'fadein'}`}>
											<IonGrid class="load_details_grid">
												<IonRow>
													<IonCol size="1">
														<StopTracker stopCount={stopCount}/>
													</IonCol>
													<IonCol size="11" class="load_details_col">
														{
															stop_details.map((details: StopDetails, index:any) => (
																<div className={`load_stop_details ${index === 0 ? 'origin_details' : ''} ${index === stop_details.length - 1 ? 'destination_details' : ''}`} key={index}>
																	<StopDetailsCard stopDetails={details} place={index} stopCount={stopCount}/>
																</div>)
															)
														}
													</IonCol>
												</IonRow>
											</IonGrid>
                						</IonCardContent>
									</IonCard>
									<IonCard class="ion-card">
										<IonCardHeader class="accordion-header"  onClick={this.loadDocuments}>
											<span>Documents</span>

											{
												this.state.showDocument ?
													<i className="down"></i>
													:
													<i className="up"></i>
											}
										</IonCardHeader>
										<IonCardContent class={this.state.showDocument ? 'fadeout' : 'fadein'}>
                						</IonCardContent>
									</IonCard>
									<IonCard class="ion-card" >
										<IonCardHeader class="accordion-header" onClick={this.loadTerms}>
											<span>Terms &amp; Conditions </span>
											{
												this.state.showTerms ?
													<i className="down"></i>
													:
													<i className="up"></i>
											}
										</IonCardHeader>
										<IonCardContent class={this.state.showTerms ? 'fadeout' : 'fadein'}>
											<p>A shipment tender document will be sent to you once assigned within the Schneider Transportation Management System. The carrier must follow this shipment tender documentation, any changes to the shipment will cause an updated tender which would include updated payment information.</p>
											<p>This transaction is subject to and governed by the written agreement between you and Schneider Transportation Management, a division of Schneider National Carriers, Inc. and the terms of this site.</p>
                						</IonCardContent>
									</IonCard>
							</IonContent>
						</IonPage>
						: ""
				}
			</>



		);
	}
}
export default LoadDetailsPage;
