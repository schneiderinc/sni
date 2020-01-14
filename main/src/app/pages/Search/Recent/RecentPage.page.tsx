import React from 'react';
import { IonContent, IonCard, IonGrid, IonCardContent, IonRow, IonCol, IonItemSliding, IonItem, IonItemOptions, IonItemOption } from '@ionic/react';
import './Recent.scss';
import  moment from "moment"; 
const RecentTab = (props: any) => {
	return (
<IonItemSliding>
			<IonItem lines="none">
		<IonCardContent className="card-content-favorite">
			<IonGrid>
				<IonRow class="recent_row">
					<IonCol className="card-col">
						<div className="card-name"><b>{props.recentData.origin_city}</b></div>
						<div className="card-dt-recent">Radius: {props.recentData.origin_deadhead}</div>
						<div className="card-dist-recent">{moment(props.recentData.origin_from_date).format("MMM DD")}</div>
					</IonCol>
					<IonCol size="3" className="loadCardArrow">
						<img alt="logo" className="card_arrow_img1" src="assets/icon/van.png" />
						<div className="vehicle_type">{props.recentData.trailer}</div>
						<img alt="logo" className="card-arrow" src="assets/icon/Path 100.png"/>
					</IonCol>
					<IonCol className=" card-col right">
						<div className="card-name"><b>{props.recentData.destination_city}</b></div>
						<div className="card-dt-recent">Radius: {props.recentData.destination_deadhead}</div>
						<div className="card-dist-recent" >{moment(props.recentData.destination_from_date).format("MMM DD")}</div>
					</IonCol>
				</IonRow>
			</IonGrid>
		</IonCardContent>
		</IonItem>
			<IonItemOptions side="start">
				<IonItemOption color="medium" expandable>
					<img alt="logo" className="delete_icon" src="assets/icon/heart.png" onClick={props.recentLiked}/>
				</IonItemOption>
			</IonItemOptions>
		</IonItemSliding>
	);
}

class RecentSearch extends React.Component<any, any>{


	recentLiked=(k:any)=>{
     console.log(k)
	}
	render() {

		return (
			<IonContent className="ion-padding custom-padding" class="background">
				<div className="contianer">
					<div className="EnterLoad_recent">Select a recent search to see matching loads.</div>
					{
						this.props.data.data &&this.props.data.data.map((detail:any, index:number) => (
							<IonCard className="ion-card" key={index}>
								<RecentTab recentData={detail} recentLiked={() => this.recentLiked(index)} />
							</IonCard>
						))
					}
				</div>
			</IonContent>
		);
	}
}

export default RecentSearch;