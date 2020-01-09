import React from 'react';
import { IonContent, IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonItemOptions, IonItemOption, IonItemSliding, IonItem } from '@ionic/react';
import './favorite.scss';


const FovoriteTab = (props: any) => {
	return (
		<IonItemSliding>
			<IonItem lines="none">
				<IonCardContent className="card-content-favorite">
					<IonGrid>
						<IonRow class="recent_row">
							<IonCol className="card-col">
								<div className="card-name"><b>{props.favoriteData.fromAddress}</b></div>
								<div className="card-dt">Radius: {props.favoriteData.fromRadius}</div>
								<div className="card-dist">{props.favoriteData.pickupDate}</div>
							</IonCol>
							<IonCol size="3" className="loadCardArrow">
								<img alt="logo" className="card_arrow_img1" src="assets/icon/van.png" />
								<div className="vehicle_type">{props.favoriteData.vehicleType}</div>
								<img alt="logo" className="card-arrow" src="assets/icon/Path 100.png" />
							</IonCol>
							<IonCol className=" card-col right">
								<div className="card-name"><b>{props.favoriteData.toAddress}</b></div>
								<div className="card-dt">Radius: {props.favoriteData.toRadius}</div>
								<div className="card-dist">{props.favoriteData.pickupDate}</div>
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
		this.setState({ favoriteData: this.props.data.Favorite })
	}

	favoriteRemove = (x: any) => {
	
	    this.state.favoriteData.splice(x,1)
	    this.setState({favoriteData:this.state.favoriteData})
		
	}
	render() {

		return (
			<IonContent className="ion-padding" class="background">
				<div className="contianer">
					<div className="EnterLoad_recent">Select one of your saved favorite searches to see matching loads.</div>
					{
						this.state.favoriteData.map((detail: any, index: any) => (
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