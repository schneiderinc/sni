

import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import useInjectSaga from "app/utils/injectSaga";
import useInjectReducer from "app/utils/injectReducer";
import { makeSelectHome } from "app/selectors/Home/selector";

import saga from "app/saga/Home/saga";
import { updateData } from "app/actions/carrierAssign/action";
import { getLoading } from "app/selectors/selector";
import { createStructuredSelector } from "reselect";
import CarrierAssignedPage from 'app/pages/Execute/CarrierAssigned/CarrierAssignedPage.page';
import { getShowToasterValue } from "app/selectors/carrierAssign/selector";
import reducer from "app/reducers/carrierAssign/reducer";
import { upadateShowToaster } from 'app/actions/carrierAssign/action';

const key = "carrierAssigned";
class CarrierAssignedContainer extends PureComponent<any, any> {
 
  constructor(props: any) {
    super(props);
    
  }
  
  componentDidMount() {
    if (this.props.data.length === 0 && !this.props.loading) {
      this.props.updateData();
    }
  }
  chnageValue = () => {
    this.props.changeToasterValue();
  }
  render() {
    return <CarrierAssignedPage {...this.props} chnageValue={this.chnageValue} />;
  } 
}

const mapStateToProps = createStructuredSelector({
  loading: getLoading(),
  data: makeSelectHome(),
  getToasterValue: getShowToasterValue()
});

const mapDispatchToProps = (dispatch: Function) => ({
  updateData: () => dispatch(updateData()),
  changeToasterValue: () => dispatch(upadateShowToaster())
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
)(CarrierAssignedContainer);
