import { connect } from "react-redux";
import { compose } from "redux";
import useInjectSaga from "app/utils/injectSaga";
import useInjectReducer from "app/utils/injectReducer";
import { makeSearch } from "app/selectors/Search/selector";
import reducer from "app/reducers/Search/reducer";
import saga from "app/saga/Search/Search.saga";
import { SEARCH_DATA } from "app/actions/Search/action";
import { createStructuredSelector } from "reselect";
import React, { PureComponent } from 'react';
import { Isearch } from 'app/schemas/Search/Search.schema';
import NewPage from 'app/pages/Search/New/NewPage.page';
import { getLoading } from "app/selectors/selector";
import { Search } from 'app/models/home/Search.model';
import { DomainConverter } from 'app/utils/common';
import { RECENT_LOADS } from "app/actions/Search/action";
import { FAVORITE_LOADS } from "app/actions/Search/action";
import { Redirect } from "react-router";
import {LOAD_DATA} from 'app/utils/mock_Data'

const key = "search";
class NewContainer extends PureComponent<any, any> {
  __model:Search;
  constructor(props: any) {
    super(props)
    this.__model = new Search();
    this.state = {
      favoriteData: []
    }
  }
  __params: Isearch = {};
  __onSearch: any = false;
  async __recentOfflineData(__props:any){
    await this.__model.recentLoads(__props);
    return __props;
  }
  async __favoriteOfflineData2(__props:any){
    await this.__model.favoriteLoads(__props);
    return __props;
  }
  onsubmit(data: any) {
    this.__onSearch = true;
    var __model = DomainConverter.dataToDomain<Search>(Search, data);
    this.__params = DomainConverter.domainToData(__model) as Isearch;
    this.props.searchData(this.__params);
     this.props.Recentdata()
     this.props.favoriteData()
     this.__recentOfflineData(LOAD_DATA)
     this.__favoriteOfflineData2(LOAD_DATA)
   
    if (data.favorite) {
      this.setState({ favoriteData: this.state.favoriteData.push(data) })
    }
  }




  render() {

    return (this.props.data.length !== 0 && this.__onSearch) ? (this.__onSearch = false, <Redirect to={{ pathname: "/app/results", state: { data: this.props.data, params: this.__params } }} />) : (<NewPage data={this.props.location.state ? this.props.location.state.data : {}} search_Submit={(data: any) => { this.onsubmit(data) }} />)
  }
}

const mapStateToProps = createStructuredSelector({
  loading: getLoading(),
  data: makeSearch() 
});

const mapDispatchToProps = (dispatch: Function) => ({
  searchData: (data: any) => dispatch(SEARCH_DATA(data)),
  Recentdata: () => dispatch(RECENT_LOADS()),
  favoriteData:()=>dispatch(FAVORITE_LOADS())
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
)(NewContainer);



