import React from 'react';
const StopDetailsCard = (props: any) =>{
	const stopDetails = props.stopDetails;
	const stopType = (pos:Number, last:Number) => {
		if(pos === 0 ){
			return "Origin";
		}else if(pos === last){
			return "Destination";
		}else{
			return "Stop off " + pos;
		}
	  }
	return (
		<>
			<div className="stop_details_name"><b>{stopDetails.city}, {stopDetails.state}</b></div>
			<div className="stop_details_data">{stopType(props.place,props.stopCount-1)}</div>
			<div className="stop_details_data">Appointment</div>
			<div className="stop_details_name">{stopDetails.from_date} | {stopDetails.from_date_time}</div>
		</>	
	)
}
export default StopDetailsCard;
