import { IonContent, IonPage, IonList, IonToast } from '@ionic/react';
import React, { Component } from 'react';
import AppHeader from 'app/components/app/Bars/Bar-header';
import { Loads } from 'app/components/app/home/Loads';
import { LoadTile } from 'app/components/app/home/Load-Tile';
import './CarrierAssigned.scss'
const footerOptions = [{
	"icon": "assets/icon/assign_icon.svg",
	"label": "ASSIGN DRIVER"
},
{
	"icon": "assets/icon/call-black.svg",
	"label": "CALL"
}, {
	"icon": "assets/icon/chat-black.svg",
	"label": "CHAT"
}
]

class CarrierAssignedPage extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			isMyLoad: true
			
		}
	}

	render() {
		console.log(this.props, "carrier Assigned")
		return (
			<IonPage className="desktop-page">
				<AppHeader title="MyLoads" isMyLoad={this.state.isMyLoad} backUrl={"/app/" + this.props.module} />
				<IonContent className="carrierContent">
					<Loads loads={this.props.carrierAssignLoad} >{
						({ loads }: { loads?: any }) => {
							return <IonList className="loadTilePad">
								{loads.map((load: any, index: number) =>
									<LoadTile key={index} {...load} module="MyLoad/CarrierAssigned" footerOptions={footerOptions} showFooter={true} pageName="carrierAssign" {...this.props} particularTileIndex={index} />)
								}
							</IonList>
						}
					}
					</Loads>
					<IonToast
						isOpen={this.props.isToaster}
						message="Driver Assigned."
						duration={200}
					/>
				</IonContent>
			</IonPage>
		);
	}
}
export default CarrierAssignedPage;