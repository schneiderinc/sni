import React from 'react';
import { IonContent, IonCard, IonGrid, IonCardContent, IonRow, IonCol, IonItemSliding, IonItem, IonItemOptions, IonItemOption } from '@ionic/react';
import './Recent.scss';
import recentData from './recentData.json';

const RecentTab = (props: any) => {
	return (
<IonItemSliding>
			<IonItem lines="none">
		<IonCardContent className="card-content-favorite">
			<IonGrid>
				<IonRow class="recent_row">
					<IonCol className="card-col">
						<div className="card-name"><b>{props.recentData.fromAddress}</b></div>
						<div className="card-dt">Radius: {props.recentData.fromRadius}</div>
						<div className="card-dist">{props.recentData.pickupDate}</div>
					</IonCol>
					<IonCol size="3" className="loadCardArrow">
						<img alt="logo" className="card_arrow_img1" src="assets/icon/van.png" />
						<div className="vehicle_type">{props.recentData.vehicleType}</div>
						<img alt="logo" className="card-arrow" src="assets/icon/Path 100.png"/>
					</IonCol>
					<IonCol className=" card-col right">
						<div className="card-name"><b>{props.recentData.toAddress}</b></div>
						<div className="card-dt">Radius: {props.recentData.toRadius}</div>
						<div className="card-dist">{props.recentData.pickupDate}</div>
					</IonCol>
				</IonRow>
			</IonGrid>
		</IonCardContent>
		</IonItem>
			<IonItemOptions side="start">
				<IonItemOption color="medium" expandable>
					<img alt="logo" className="delete_icon" src="assets/icon/heart.png"/>
				</IonItemOption>
			</IonItemOptions>
		</IonItemSliding>
	);
}

class RecentSearch extends React.Component<any, any>{
	render() {

		return (
			<IonContent className="ion-padding" class="background">
				<div className="contianer">
					<div className="EnterLoad_recent">Select one of your recent searches to see matching loads.</div>
					{
						recentData.map((detail, index) => (
							<IonCard className="ion-card" key={index}>
								<RecentTab recentData={detail} />
							</IonCard>
						))
					}
				</div>
			</IonContent>
		);
	}
}

export default RecentSearch;