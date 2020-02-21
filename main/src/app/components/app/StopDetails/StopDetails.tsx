import React from 'react';
import { IonRow, IonCol } from '@ionic/react';
const StopDetailsCard = (props: any) =>{
	const stopDetails = props.stopDetails;
	const stopType = (pos:Number, last:Number) => {
		if(pos === 0 ){
			return "Origin";
		}else if(pos === last){
			return "Destination";
		}else{
			return "Stop-off " + pos;
		}
	  }
	return (
		<>
			<div className="mobile-view">
				<div className="stop_details_name">{stopDetails.city}, {stopDetails.state}</div>
				<div className="stop_details_data">{stopType(props.place,props.stopCount-1)}</div>
				<div className="stop_details_data">Appointment</div>
				<div className="stop_details_date">{stopDetails.from_date} | {stopDetails.from_date_time}</div>
			</div>
			<div className="desktop-view">
				<IonRow>
					<IonCol class="stop_details_name">{stopDetails.city}, {stopDetails.state}</IonCol>
					<IonCol class="stop_details_data">Appointment </IonCol>
				</IonRow>
				<IonRow>
					<IonCol class="stop_details_data">{stopType(props.place,props.stopCount-1)}</IonCol>
					<IonCol class="stop_details_date">{stopDetails.from_date} </IonCol>
				</IonRow>
				<IonRow>
					<IonCol></IonCol>
					<IonCol class="stop_details_date">{stopDetails.from_date_time}</IonCol>
				</IonRow>	
			</div>
		</>	
	)
}
export default StopDetailsCard;
