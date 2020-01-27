import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import useInjectSaga from "app/utils/injectSaga";
import useInjectReducer from "app/utils/injectReducer";
import { getLoading } from "../../../selectors/selector";
import { createStructuredSelector } from "reselect";
import { SearchResultPage } from "app/pages/Search/SearchResults";
import { makeSearch } from "app/selectors/Search/selector";
import reducer from "app/reducers/Search/reducer";
import saga from "app/saga/Search/Search.saga";
import { SEARCH_DATA } from "app/actions/Search/action";
import { withRouter, RouteComponentProps } from 'react-router';

const key = "search";
var params = {};
interface ResultProps extends RouteComponentProps {searchData:any,location:any,data:any, loading:any,history:any  };
const SearchResultContainer: React.FC<ResultProps> = ({searchData,location,data, loading, history}) => {
  
  if (data.length === 0 && !loading) {
    searchData(location.state.params);
  }
  if(location.state){
    if(location.state.params){
      params = location.state.params;
    }
  }
  return (<SearchResultPage results={data} params={params} history={history} />);
} 


const mapStateToProps = createStructuredSelector({
  loading: getLoading(),
  data: makeSearch() 
});

const mapDispatchToProps = (dispatch: Function) => ({
  searchData: (data: any) => dispatch(SEARCH_DATA(data))
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const __withReducer = useInjectReducer({ key, reducer });
const __withSaga = useInjectSaga({ key, saga });

export default compose(
  __withSaga,
  __withReducer,
  withConnect
)(withRouter(SearchResultContainer));
