import { IonContent, IonPage, IonRow, IonCol, IonLabel, IonFab, IonFabButton, IonItem, IonIcon } from '@ionic/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AppHeader from 'app/components/app/Bars/Bar-header';
import './AssignDriverList.scss'
import { DriverList } from 'app/utils/mock_Data'
import { ModalPopUp } from 'app/components/app/ModalPopup/ModalPopup';
class DriverAssignList extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			showModal: false,
			
			selectedLoad: []
		}
	}
	showModalPopup = () => {
		console.log("hiii",this.state.showModal)
		this.setState({ showModal: true })
	}
	showModalPopup2=()=>{
		this.setState({ showModal: false })
	}
	componentDidMount() {
		this.setState({ selectedLoad: this.props.location.state.response })
	}
	render() {
	
		console.log(this.props, this.state.showModal, "this.state.redirectCarrier")
		return (

			//   <MapView />
			<IonPage className="desktop-page driverList-page">
				<AppHeader title="Select A Driver" backUrl={"/app/" + this.props.module} />
				<IonContent className="driverContent">


					{DriverList.map((driver: any, index: number) => (
						<IonItem key={index} className="driverCard" onClick={this.showModalPopup} >
							<IonRow className="driverRow">
								<IonCol size="2">
									<img src={driver.DriverImg} className="DriverImage" />
								</IonCol>
								<IonCol size="10" className="DriverCol">
									<IonLabel className="DriverName">{driver.DriverName}</IonLabel>
									<p className="DriverPara">{driver.DriverSubHeading}</p>
								</IonCol>
							</IonRow>

						</IonItem>
					))}

					<Link to="/app/MyLoad/AddDriver"><IonFab vertical="bottom" horizontal="end" slot="fixed">
						<IonFabButton className="add-driver-circle">
							<IonIcon src="/assets/icon/add-icon.svg" className="add-driver-icon" />
						</IonFabButton>
					</IonFab></Link>
					<ModalPopUp showModal={this.state.showModal}  closeShowModal={this.showModalPopup2} selectedLoad={this.state.selectedLoad}  {...this.props} />
				</IonContent>
			</IonPage>
		);
	}
}
export default DriverAssignList;