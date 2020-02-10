import React, { PureComponent } from "react";
import { HomePage } from "app/pages/Home";
import { connect } from "react-redux";
import { compose } from "redux";
import useInjectSaga from "app/utils/injectSaga";
import useInjectReducer from "app/utils/injectReducer";
import { makeSelectHome } from "app/selectors/Home/selector";
import { Recommended } from 'app/models/home/Loads.model';
import reducer from "app/reducers/Home/reducer";
import saga from "app/saga/Home/saga";
import { updateData } from "app/actions/Home/action";
import { getLoading } from "app/selectors/selector";
import { createStructuredSelector } from "reselect";

const key = "carrier";
class HomeContainer extends PureComponent<any, any> {
  __model: Recommended;
  constructor(props: any) {
    super(props);
    this.__model = new Recommended();
  }
  async __setOfflineData(__props: any) {
    await this.__model.persistLoads(__props.data);
    return __props;
  }
  componentDidMount() {
    if (this.props.data.length === 0 && !this.props.loading) {
      this.props.updateData();
    }
  }
  navigateNew() {
    this.props.history && this.props.history.push("/app/search/new", {});
  }
  render() {
    return "";
    //return <HomePage {...this.props} getLoads={this.navigateNew.bind(this)} />;
  }
}

const mapStateToProps = createStructuredSelector({
  loading: getLoading(),
  data: makeSelectHome()
});

const mapDispatchToProps = (dispatch: Function) => ({
  updateData: () => dispatch(updateData())
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
)(HomeContainer);
