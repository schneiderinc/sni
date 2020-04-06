import React from 'react';
import NewPage from 'app/pages/Search/New/NewPage.page';
import { withRouter, RouteComponentProps } from 'react-router';
import { fetchResults } from 'app/actions/Search/action';
import { connect } from "react-redux";
import { compose } from "redux";
import useInjectSaga from 'app/utils/injectSaga';
import saga from "app/saga/Search/Search.saga";
import { createStructuredSelector } from 'reselect';
import { getLoading } from 'app/selectors/selector';
import { makeSearch } from 'app/selectors/Search/selector';
import { SEARCH_DATA } from "app/actions/Search/action";
import useInjectReducer from "app/utils/injectReducer";
import reducer from "app/reducers/Search/reducer";

const key = "search";
interface newProps extends RouteComponentProps {searchData:any,data:any, loading:any,location:any,fectchData: any};
const NewContainer: React.FC<newProps> = ({location,fectchData,searchData,data,loading}) => {
  const submitForm = (searchdata: any) => {
    fectchData(searchdata);
  }
  if (data.length === 0 && !loading) {
    searchData(location.state.params);
  }
  return <NewPage data={location.state ? location.state.data : {}} submitForm={submitForm} results={data}/>
}

const mapStateToProps = createStructuredSelector({
  loading: getLoading(),
  data: makeSearch() 
});
const mapDispatchToProps = (dispatch: any) => ({
  fectchData: (searchdata: any ) => dispatch(fetchResults(searchdata)),
  searchData: (data: any) => dispatch(SEARCH_DATA(data))
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const __withReducer = useInjectReducer({ key, reducer });
const withSaga = useInjectSaga({ key, saga });
export default compose(
  withSaga,__withReducer,
  withConnect
)(withRouter(NewContainer));

