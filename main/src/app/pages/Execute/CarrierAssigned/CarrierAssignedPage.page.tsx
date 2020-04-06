import { IonContent, IonPage, IonList, IonToast } from '@ionic/react';
import { toastController } from '@ionic/core';
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
	changeValue = () => {
		this.props.chnageValue();
	}
	showToaster = async () => {
		const toast = await toastController.create({
			color: 'dark',
			duration: 300,
			message: 'Driver Assigned.',
			mode: "md",
			cssClass: "driver-assign-confrim",
		});
		await toast.present();
		await toast.dismiss(this.changeValue());
	}
	render() {
		if (this.props.getToasterValue) {
			this.showToaster();
		}
		return (
			<IonPage className="desktop-page">
				<AppHeader title="My Loads" isMyLoad={this.state.isMyLoad} backUrl={"/app/" + this.props.module} />
				<IonContent className="carrierContent">
					<Loads segmentName={""} loads={this.props.data} >{
						({ loads }: { loads?: any }) => {
							return <IonList className="loadTilePad">
								{loads.map((load: any, index: number) =>
									<LoadTile key={index} {...load} module="MyLoad/CarrierAssigned" footerOptions={footerOptions} showFooter={true} pageName="carrierAssign" {...this.props} particularTileIndex={index} />)
								}
							</IonList>
						}
					}
					</Loads>
				</IonContent>
			</IonPage>
		);
	}
}
export default CarrierAssignedPage;