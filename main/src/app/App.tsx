import React from "react";
import {IonLoading} from '@ionic/react'

import { createStructuredSelector } from "reselect";
import { getLoading } from "./selectors/selector";

import { connect } from "react-redux";

import RootLevelTabs from 'app/components/app/Bars/Bar-bottom'
const App: React.FC = (props:any) => {
  const {loading} = props;
  return (
    <React.Fragment>
     <RootLevelTabs />
      <IonLoading 
       isOpen={loading}
       message={'Loading...'}
       show-backdrop = {false}
       spinner = "circles"
       />
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: getLoading()
})

export default connect(mapStateToProps, null)(App);