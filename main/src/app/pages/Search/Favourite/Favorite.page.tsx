import React from 'react';
import { IonContent, IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonItemOptions, IonItemOption, IonItemSliding, IonItem } from '@ionic/react';
import './favorite.scss';
import  moment from "moment"; 

const FovoriteTab = (props: any) => {
	return (
		<IonItemSliding>
			<IonItem lines="none">
				<IonCardContent className="card-content-favorite">
					<IonGrid>
						<IonRow class="recent_row">
							<IonCol className="card-col">
								<div className="card-name"><b>{props.favoriteData.origin_city}</b></div>
								<div className="card-dt-recent">Radius: {props.favoriteData.origin_deadhead}</div>
								<div className="card-dist-recent">{moment(props.favoriteData.origin_from_date).format("MMM DD")}</div>
							</IonCol>
							<IonCol size="3" className="loadCardArrow">
								<img alt="logo" className="card_arrow_img1" src="assets/icon/van.png" />
								<div className="vehicle_type">{props.favoriteData.trailer}</div>
								<img alt="logo" className="card-arrow" src="assets/icon/Path 100.png" />
							</IonCol>
							<IonCol className=" card-col right">
								<div className="card-name"><b>{props.favoriteData.destination_city}</b></div>
								<div className="card-dt-recent">Radius: {props.favoriteData.destination_deadhead}</div>
								<div className="card-dist-recent">{moment(props.favoriteData.destination_from_date).format("MMM DD")}</div>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonCardContent>
			</IonItem>
			<IonItemOptions side="end">
				<IonItemOption color="danger" expandable>
					<img alt="logo" className="delete_icon" src="assets/icon/delete icon.png" onClick={props.favoriteRemove} />
				</IonItemOption>
			</IonItemOptions>
		</IonItemSliding>

	);
}
class FavouritePage extends React.Component<any, any>{
	constructor(props: any) {
		super(props)
		this.state = {
			favoriteData: []

		}
	}

	componentDidMount() {
		this.setState({ favoriteData: this.props.data.Favorite.data })
	}

	favoriteRemove = (x: any) => {
	
	    this.state.favoriteData.splice(x,1)
	    this.setState({favoriteData:this.state.favoriteData})
		
	}
	render() {
    
		return (
			<IonContent className="ion-padding custom-padding" class="background">
				<div className="contianer">
					<div className="EnterLoad_recent">Select a favorite search to see matching loads.</div>
					{
						this.state.favoriteData && this.state.favoriteData.map((detail: any, index: any) => (
							<IonCard className="ion-card" key={index}>
								<FovoriteTab favoriteData={detail} favoriteRemove={() => this.favoriteRemove(index)} />
							</IonCard>
						))
					}
				</div>
			</IonContent>
		);
	}
}

export default FavouritePage;