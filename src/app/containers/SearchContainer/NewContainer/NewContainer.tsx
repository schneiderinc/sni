import { connect } from "react-redux";
import { compose } from "redux";
import useInjectSaga from "app/utils/injectSaga";
import useInjectReducer from "app/utils/injectReducer";
import { makeSearch } from "app/selectors/Search/selector";
import reducer from "app/reducers/Search/reducer";
import saga from "app/saga/Search/Search.saga";
import { SEARCH_DATA } from "app/actions/Search/action";
import { createStructuredSelector } from "reselect";
import React, {PureComponent} from 'react';
import {Isearch} from 'app/schemas/Search/Search.schema';
import NewPage from 'app/pages/Search/New/NewPage.page';
import { getLoading } from "app/selectors/selector";
import {Search} from 'app/models/home/Search.model';
import {DomainConverter} from 'app/utils/common';
import { Redirect } from "react-router";

const key = "search";
class NewContainer extends PureComponent<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      arr: []
    }
  }
   __params:Isearch = {};
   __onSearch:any = false;

    onsubmit(data:any){
      this.__onSearch = true;
        var __model = DomainConverter.dataToDomain<Search>(Search, data);
        this.__params = DomainConverter.domainToData(__model) as Isearch;
        this.props.searchData(this.__params);   
        if (data.favorite) {
          this.setState({ arr: this.state.arr.push(data) })
          console.log(this.state.arr, "aarr")
    
        }  
    }
    render() {
        return (this.props.data.length !== 0 && this.__onSearch) ?(this.__onSearch = false,<Redirect to={{pathname:"/app/results", state:{data:this.props.data, params:this.__params}}} />):(<NewPage data={this.props.location.state ? this.props.location.state.data:{}} search_Submit={(data:any)=>{this.onsubmit(data)}} />)
    }
}

const mapStateToProps = createStructuredSelector({
    loading: getLoading(),
    data: makeSearch()
  });

const mapDispatchToProps = (dispatch: Function) => ({
    searchData: (data:any) => dispatch(SEARCH_DATA(data))
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
  


  