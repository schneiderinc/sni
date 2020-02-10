import React, { PureComponent } from "react";
import RecentPage from 'app/pages/Search/Recent/RecentPage.page';
import { connect } from "react-redux";
import { compose } from "redux";
import useInjectSaga from "app/utils/injectSaga";
import useInjectReducer from "app/utils/injectReducer";

import { makeRecent } from "app/selectors/RecentSearch/selector";
import { Search } from 'app/models/home/Search.model';
import reducer from "app/reducers/Recent/reducer";
import saga from "app/saga/Recent/saga";
import { GetRecent } from "app/actions/Recent/action";
import { getLoading } from "app/selectors/selector";
import { createStructuredSelector } from "reselect";

const key = "recent";
class RecentContainer extends PureComponent<any, any> {
  __model:Search;
  constructor (props:any) {
    super(props);
   this.__model = new Search();
  }
  async __setOfflineData(__props:any){
    await this.__model.recentLoads(__props.data);
    return __props;
  }
  getLoads(){
    if (this.props.data.length === 0 && !this.props.loading) {
  
    }
  }
  render() {
    
    return <RecentPage getLoads={this.getLoads.bind(this)} />;
  }
} 

const mapStateToProps = createStructuredSelector({
  loading: getLoading(),
  data: makeRecent()
});

const mapDispatchToProps = (dispatch: Function) => ({
  updateData: () => dispatch(GetRecent)
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = useInjectReducer({ key, reducer });
const withSaga = useInjectSaga({ key, saga });

export default compose(
  withSaga,
  withReducer,
  withConnect
)(RecentContainer);