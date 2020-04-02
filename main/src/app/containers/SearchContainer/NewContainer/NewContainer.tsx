import React from 'react';
import NewPage from 'app/pages/Search/New/NewPage.page';
import { withRouter, RouteComponentProps } from 'react-router';
import { fetchResults } from 'app/actions/Search/action';
import { connect } from "react-redux";
import { compose } from "redux";
import useInjectSaga from 'app/utils/injectSaga';
import saga from "app/saga/Search/Search.saga";

const key = "search";
interface newProps extends RouteComponentProps {location:any,fectchData: any};
const NewContainer: React.FC<newProps> = ({location,fectchData}) => {
  const submitForm = (searchData: any) => {
    fectchData(searchData);
  }
  return <NewPage data={location.state ? location.state.data : {}} submitForm={submitForm}/>
}

const mapDispatchToProps = (dispatch: any) => ({
  fectchData: (searchData: any ) => dispatch(fetchResults(searchData)),
});
const withConnect = connect(
  null,
  mapDispatchToProps
);
const withSaga = useInjectSaga({ key, saga });
export default compose(
  withSaga,
  withConnect
)(withRouter(NewContainer));

