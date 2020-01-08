import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,

  IonLabel


} from "@ionic/react";
import { HomeContainer } from "app/containers/HomeContainer";
import { SearchContainer } from "app/containers/SearchContainer";
import { LogOutContainer } from "app/containers/LogOutContainer";
import { ManageContainer } from "app/containers/ManageContainer";
import { ExecuteContainer } from "app/containers/ExecuteContainer";
import { LoadDetailsContainer } from "app/containers/LoadDetailsContainer";
import { SearchResultContainer } from "app/containers/SearchContainer/SearchResultContainer";

class Tabs extends React.Component<any> {
  // eslint-disable-next-line
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (

      <IonRouterOutlet>
        <Route
          path="/app"
          render={() => (

            <IonTabs>
              <IonRouterOutlet>

                <Route path="/app/search" render={(props:any)=><SearchContainer {...props} />} />
                <Route path="/app/results" component={(props:any)=><SearchResultContainer {...props} />}/>
                <Route path="/app/loaddetails" component={(props:any)=><LoadDetailsContainer {...props} />}/>
                <Route
                  path="/app/home"
                  component={HomeContainer}
                  exact={true}
                />
                <Route
                  path="/app/execute"
                  component={ExecuteContainer}
                  exact={true}
                />
                <Route
                  path="/app/manage"
                  component={ManageContainer}
                  exact={true}
                />
                <Route
                  path="/app/more"
                  component={LogOutContainer}
                  exact={true}
                />

                <Route path="/app" render={() => <Redirect to="/app/home" />} />

              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/app/home" >

                  <img alt="logo" src="assets/icon/Path 1042@2x.png" width="26px" height="22.38px" color="var(--ion-color-primary)" />
                  <IonLabel class="tab_footer_label">HOME</IonLabel>
                </IonTabButton>
                <IonTabButton tab="search" href="/app/search">
                  <img alt="logo" src="assets/icon/Search icon@2x.png" width="25px" height="25px" />
                  <IonLabel class="tab_footer_label">SEARCH</IonLabel>
                </IonTabButton>

                <IonTabButton tab="execute" href="/app/execute" >
                  <img alt="logo" src="assets/icon/truck@2x.png" width="27px" height="23.71px" />
                  <IonLabel class="tab_footer_label">EXECUTE</IonLabel>
                </IonTabButton>
                <IonTabButton tab="manage" href="/app/manage" >
                  <img alt="logo" src="assets/icon/Manage@2x.png" width="26.95px" height="27.21px" />
                  <IonLabel class="tab_footer_label">MANAGE</IonLabel>
                </IonTabButton>
                <IonTabButton tab="more" href="/app/more">
                  <img alt="logo" src="assets/icon/menu@2x.png" width="22px" height="17px" />
                  <IonLabel class="tab_footer_label">MORE</IonLabel>
                </IonTabButton>

              </IonTabBar>
            </IonTabs>
          )}
        exact={true}/>
      </IonRouterOutlet>

    );
  }
}

export { Tabs };
