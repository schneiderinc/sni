import React, { PureComponent } from "react";
import ProfilePage from 'app/pages/Manage/profile/Profile.page';
import { connect } from "react-redux";
import { compose } from "redux";
import useInjectSaga from "app/utils/injectSaga";
import useInjectReducer from "app/utils/injectReducer";
import { makeUserProfile } from "app/selectors/UserProfile/selector";
import reducer from "app/reducers/userProfile/reducer";
import saga from "app/saga/UserProfile/saga";
import { UserProfileData } from "app/actions/userProfile/action";
import { getLoading } from "app/selectors/selector";
import { createStructuredSelector } from "reselect";
const key = "profileData";
class ProfileContainer extends PureComponent<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        if (this.props.userProfiledata.length === 0 && !this.props.loading) {
            this.props.userProfileData();
        }
    }

    render() {
        return <ProfilePage {...this.props} module="manage"/>;
    }
}

const mapStateToProps = createStructuredSelector({
    loading: getLoading(),
    userProfiledata: makeUserProfile()
});

const mapDispatchToProps = (dispatch: Function) => ({
    userProfileData: () => dispatch(UserProfileData())
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
)(ProfileContainer);