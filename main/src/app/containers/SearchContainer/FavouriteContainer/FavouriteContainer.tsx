import React, { PureComponent } from "react";
import FavouritePage from 'app/pages/Search/Favourite/Favorite.page';
import { connect } from "react-redux";
import { compose } from "redux";
import useInjectSaga from "app/utils/injectSaga";
import useInjectReducer from "app/utils/injectReducer";

import { makeFavorite } from "app/selectors/FavouriteSearch/selector";
import { Search } from 'app/models/home/Search.model';
import reducer from "app/reducers/Favorite/reducer";
import saga from "app/saga/Recent/saga";
import { getFavorite } from "app/actions/Favorite/action";
import { getLoading } from "app/selectors/selector";
import { createStructuredSelector } from "reselect";

const key = "Favorite";
class FavouriteContainer extends PureComponent<any, any> {
  __model:Search;
  constructor (props:any) {
    super(props);
   this.__model = new Search();
  }
  async __setOfflineData(__props:any){
    await this.__model.favoriteLoads(__props.data);
    return __props;
  }
  getLoads(){
    if (this.props.data.length === 0 && !this.props.loading) {
    
    }
  }
  render() {
     
    return <FavouritePage getLoads={this.getLoads.bind(this)} />;
  }
} 

const mapStateToProps = createStructuredSelector({
  loading: getLoading(),
  data: makeFavorite()
});

const mapDispatchToProps = (dispatch: Function) => ({
  updateData: () => dispatch(getFavorite)
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
)(FavouriteContainer);