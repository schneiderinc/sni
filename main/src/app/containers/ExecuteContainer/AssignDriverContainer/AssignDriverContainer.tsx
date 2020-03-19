import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import useInjectReducer from "app/utils/injectReducer";
import { HideTabBar } from "app/actions/Login/action";
import reducer from "app/reducers/carrierAssign/reducer";
import { getLoading } from "app/selectors/selector";
import { createStructuredSelector } from "reselect";
import DriverAssignList from 'app/pages/Execute/AssignDriverList/AssignDriverList';
import { upadateShowToaster } from 'app/actions/carrierAssign/action';

const key = "carrierAssigned";
class AssignDriverContainer extends PureComponent<any, any> {

  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    if (!this.props.makeHideTabBar) {
        this.props.HideTabBar();

    }
}
  getShowToasterValue = () => {
    this.props.showToasterValue();
  }
  render() {
    return <DriverAssignList {...this.props} getShowToasterValue={this.getShowToasterValue} />;
  }
}


const mapStateToProps = createStructuredSelector({
  loading: getLoading(),

});

const mapDispatchToProps = (dispatch: Function) => ({
  showToasterValue: () => dispatch(upadateShowToaster()),
  HideTabBar: () => dispatch(HideTabBar()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = useInjectReducer({ key, reducer });

export default compose(
  withReducer,
  withConnect
)(AssignDriverContainer);
