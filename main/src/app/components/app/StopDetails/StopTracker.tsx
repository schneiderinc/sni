import React from 'react';
const StopTracker = (props: any) =>{
	let stop_tracker = [];
	for(let i=0; i < props.stopCount; i++ ){
		stop_tracker.push(
		<div key={i}>
			{props.pageName ==="loadPage" ? (<div className="stop_detail_pin" >{String.fromCharCode(65 + i)}</div>) : (
				<div className="stop_detail_pin_carrier" >
					{
					`${ i === 0 ? "PU" : (`${
						i === props.stopCount-1 ? "DL":""
					}`)
					}`
				}
				</div>
			)}
			{
				(i < props.stopCount - 1 ) ? <div className="stop_detail_connect"></div> :null
			}
		</div>)
	}
	return (
		<>{stop_tracker}</>	
	)
}

export default StopTracker;