import React, { PureComponent } from "react";
import CarrierProfilePage from 'app/pages/Manage/CarrierProfile/CarrierProfile.page';
import { connect } from "react-redux";
import { compose } from "redux";
import useInjectSaga from "app/utils/injectSaga";
import useInjectReducer from "app/utils/injectReducer";
import { makeManageCarrier, makeManageCarrierInsurance, makeManageCarrierInsurance2,makemanageContact } from "app/selectors/ManageCarrier/selector";
import reducer from "app/reducers/manageCarrier/reducer";
import saga from "app/saga/ManageCarrier/saga";
import { CarrierManageData, CarrierInsuranceData, CarrierInsuranceData2 ,CarrierContactData} from "app/actions/manageCarrier/action";
import { getLoading } from "app/selectors/selector";
import { createStructuredSelector } from "reselect";
const key = "manageCarrier";
class CarrierProfileContainer extends PureComponent<any, any> {
    constructor(props: any) {
        super(props);

    }
    componentDidMount() {
        if (this.props.manageCarrierdata.length === 0 && !this.props.loading) {
            this.props.manageCarrierData();
        }
        if (this.props.manageContactdata.length === 0 && !this.props.loading) {
            this.props.manageContactData();
        }
        if (this.props.manageInsuranceData.length === 0 && !this.props.loading) {
            this.props.manageCarrierInsurance();
        }
        if (this.props.manageInsuranceData2.length === 0 && !this.props.loading) {
            this.props.manageCarrierInsurance2();
        }
    }

    render() {
        return <CarrierProfilePage {...this.props} />;
    }
}

const mapStateToProps = createStructuredSelector({
    loading: getLoading(),
    manageCarrierdata: makeManageCarrier(),
    manageInsuranceData: makeManageCarrierInsurance(),
    manageInsuranceData2: makeManageCarrierInsurance2(),
    manageContactdata:makemanageContact()
});

const mapDispatchToProps = (dispatch: Function) => ({
    //   updateData: (img:any) => dispatch(PROFILE_IMAGE_SET(img))
    manageCarrierData: () => dispatch(CarrierManageData()),
    manageContactData: () => dispatch(CarrierContactData()),

    manageCarrierInsurance: () => dispatch(CarrierInsuranceData()),
    manageCarrierInsurance2: () => dispatch(CarrierInsuranceData2())

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
)(CarrierProfileContainer);