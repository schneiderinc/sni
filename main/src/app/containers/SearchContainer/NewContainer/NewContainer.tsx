import React from 'react';
import NewPage from 'app/pages/Search/New/NewPage.page';
import { withRouter, RouteComponentProps } from 'react-router';


interface newProps extends RouteComponentProps {location:any};
const NewContainer: React.FC<newProps> = ({location}) => {

  return <NewPage data={location.state ? location.state.data : {}} />
}

export default withRouter(NewContainer)



