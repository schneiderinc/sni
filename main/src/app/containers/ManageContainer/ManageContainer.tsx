import React, { PureComponent } from "react";
import ManagePage from 'app/pages/Manage/Manage.page';
import { connect } from "react-redux";
import { compose } from "redux";
import useInjectSaga from "app/utils/injectSaga";
import useInjectReducer from "app/utils/injectReducer";
import { makeManageCardData } from "app/selectors/Manage/selector";
import reducer from "app/reducers/manage/reducer";
import saga from "app/saga/Manage/saga";
import { ManageCard, profileImageSet } from "app/actions/manage/action";
import { showPermissionAlert } from 'app/actions/Login/action';
import { getLoading } from "app/selectors/selector";
import { createStructuredSelector } from "reselect";

const key = "manage";
class ManageContainer extends PureComponent<any, any> {

    componentDidMount() {
        if (this.props.manageCard.length === 0 && !this.props.loading) {
            this.props.manageData();

        }
    }
    // SetImage = (img: any) => {
    //     this.props.profileImg(img)
    // }

    render() {
        return <ManagePage {...this.props} /* setImage={this.SetImage} setImageError={this.setImageError} setAlert={this.setAlert} */ />;
    }
}

const mapStateToProps = createStructuredSelector({
    loading: getLoading(),
    // Image: makeSelectImg(),
    manageCard: makeManageCardData()
});

const mapDispatchToProps = (dispatch: Function) => ({
    manageData: () => dispatch(ManageCard()),
    showPermissionAlert: (data: any) => dispatch(showPermissionAlert(data)),
    profileImg: (data: any) => dispatch(profileImageSet(data))
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
)(ManageContainer);







