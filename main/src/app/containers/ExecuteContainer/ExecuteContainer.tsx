

import React, {PureComponent} from 'react';
import ExecutePage from 'app/pages/Execute/ExecutePage.page';
import { connect } from "react-redux";
import { compose } from "redux";
import useInjectSaga from "app/utils/injectSaga";
import useInjectReducer from "app/utils/injectReducer";
import { makeMyLoadCardData } from "app/selectors/Myload/selector";
import reducer from "app/reducers/myload/reducer";
import saga from "app/saga/MyLoad/saga";
import { MyLoadCard, profileImageSet } from "app/actions/myload/action";
import { showPermissionAlert } from 'app/actions/Login/action';
import { getLoading } from "app/selectors/selector";
import { createStructuredSelector } from "reselect";

const key = "myload";
class ExecuteContainer extends PureComponent<any, any> {

    componentDidMount() {
        if (this.props.myLoadCard.length === 0 && !this.props.loading) {
            this.props.myLoadData();

        }
    }
    render() {
        return (<ExecutePage {...this.props}/>)
    }
}


const mapStateToProps = createStructuredSelector({
    loading: getLoading(),
    // Image: makeSelectImg(),
    myLoadCard: makeMyLoadCardData()
});

const mapDispatchToProps = (dispatch: Function) => ({
    myLoadData: () => dispatch(MyLoadCard()),
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
)(ExecuteContainer);