import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon


} from "@ionic/react";
import Home from "app/pages/Home/Home.page";
import { SearchContainer } from "app/containers/SearchContainer";
import { SearchResultContainer } from "app/containers/SearchContainer/SearchResultContainer";
// import { LogOutContainer } from "app/containers/LogOutContainer";
import { ManageContainer } from "app/containers/ManageContainer";
import { ExecuteContainer } from "app/containers/ExecuteContainer";
import { LoadDetailsContainer } from "app/containers/LoadDetailsContainer";
import MenuContainer from "app/containers/MenuContainer/MenuContainer";
import { ProfileContainer } from "app/containers/ManageContainer/ProfileContainer";
import { CarrierProfileContainer } from "app/containers/ManageContainer/CarrieProfileContainer";
import FAQMenuPage from "app/pages/Menu/faq_menu.page";
import { ManageTruckContainer } from "app/containers/ManageContainer/ManageTruckContainer";
import { ManageUserContainer } from "app/containers/ManageContainer/ManageUserContainer";

interface MainTabsProps { }

const RootLevelTabs : React.FC<MainTabsProps> = () => {
    return (

      <IonRouterOutlet>
        <Route
          path="/app"
          render={() => (

            <IonTabs>
              <IonRouterOutlet>

                <Route path="/app/search" render={(props:any)=><SearchContainer {...props} />} exact />
                <Route path="/app/search/results" component={ SearchResultContainer } exact />
                <Route path="/app/home" render={(props: any) => <Home {...props} />} exact={true} />
                <Route path="/app/(home|search)/:id" component={LoadDetailsContainer} />
                <Route path="/app/menu/faq" component={FAQMenuPage}/>
                <Route path="/app/ProfileDetails" component={ProfileContainer} />
                <Route path="/app/CarrierProfileDetails" component={CarrierProfileContainer} />
                <Route path="/app/ManageTruck" component={ManageTruckContainer} />
                <Route path="/app/ManageUser" component={ManageUserContainer} />
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
                  component={MenuContainer}
                  exact={true}
                />

                <Route path="/app" render={() => <Redirect to="/app/home" />} />

              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/app/home" >
                  <IonIcon src="assets/icon/home_icon.svg"></IonIcon>
                  <IonLabel class="tab_footer_label">HOME</IonLabel>
                </IonTabButton>
                <IonTabButton tab="search" href="/app/search">
                  <IonIcon src="assets/icon/search_icon.svg"></IonIcon>
                  <IonLabel class="tab_footer_label">SEARCH</IonLabel>
                </IonTabButton>

                <IonTabButton tab="execute" href="/app/execute" >
                  <IonIcon src="assets/icon/execute_icon.svg"></IonIcon>
                  <IonLabel class="tab_footer_label">EXECUTE</IonLabel>
                </IonTabButton>
                <IonTabButton tab="manage" href="/app/manage" >
                  <IonIcon src="assets/icon/manage_icon.svg"></IonIcon>
                  <IonLabel class="tab_footer_label_manage">MANAGE</IonLabel>
                </IonTabButton>
                <IonTabButton tab="more" href="/app/more">
                <IonIcon src="assets/icon/more_icon.svg"></IonIcon>
                  <IonLabel class="tab_footer_label_more">MORE</IonLabel>
                </IonTabButton>

              </IonTabBar>
            </IonTabs>
          )}
        exact={true}/>
      </IonRouterOutlet>

    );
  }

export default RootLevelTabs;