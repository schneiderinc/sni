import React, {Component} from 'react';
import LoadDetailsPage from 'app/pages/LoadDetails/LoadDetails.page';
import { StopDetails } from 'app/schemas/Loads/Loads.schema';
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter, RouteComponentProps } from 'react-router';
import { getLoad } from "../../selectors/Home/selector";

interface OwnProps extends RouteComponentProps { };
class LoadDetailsContainer extends Component<any, any> {

    constructor(props:any){
        super(props);
        this.state={};
    }
    render() {
		const stopData = [
			{
				"city":"SacramentoSan",
				"state":"CA",
				"from_date":"12/19/2019",
				"from_date_time":"12:00 - 14:00",
			},
			{
				"city":"Jose",
				"state":"CA",
				"from_date":"12/20/2019",
				"from_date_time":"18:00 - 20:00",
			},
			{
				"city":"Lincoln",
				"state":"NE",
				"from_date":"12/20/2019",
				"from_date_time":"18:00 - 20:00",
			},
			{
				"city":"Des Moines",
				"state":"IO",
				"from_date":"12/21/2019",
				"from_date_time":"10:00 - 12:00",
			},
			{
				"city":"Chicago",
				"state":"IL",
				"from_date":"12/22/2019",
				"from_date_time":"16:00 - 18:00",
			},
			{
				"city":"Springfield",
				"state":"MI",
				"from_date":"12/20/2019",
				"from_date_time":"14:00 - 16:00",
			}
		]
        const loadDetails = this.props.loadDetails;
		var stopCount = 0;
		var stop_details = [];
		var origin_details:StopDetails = {};
        var destination_details:StopDetails = {};
        if(loadDetails){
			stopCount =  2 + parseInt(loadDetails.total_stops);
			origin_details.city = loadDetails.origin_city;
			origin_details.state = loadDetails.origin_state;
			origin_details.from_date = loadDetails.origin_from_date;
			origin_details.from_date_time = loadDetails.origin_to_date_time;

			destination_details.city = loadDetails.destination_city;
			destination_details.state = loadDetails.destination_state;
			destination_details.from_date = loadDetails.destination_from_date;
			destination_details.from_date_time = loadDetails.destination_to_date_time;
			stop_details.push(origin_details);
			for(let i =0; i <= parseInt(loadDetails.total_stops); i++){
				stop_details.push(stopData[i]);
            }
		}
        return (<LoadDetailsPage {...this.props} loadDetails={loadDetails} stopDetails={stop_details} stopCount={stopCount}/>)
    }
}
;

  
const mapStateToProps = (state:any, OwnProps:any) => ({
	loadDetails: getLoad(state, OwnProps)
  })
  const withConnect = connect(
	mapStateToProps
  );
  export default compose(
	withConnect
  )(withRouter(LoadDetailsContainer));
  
