import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonImg,
  IonRow,
  IonCol,
  IonFooter
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
import { ManageLaneContainer } from "app/containers/ManageContainer/ManageLaneContainer";
import { CarrierAssignedContainer } from "app/containers/ExecuteContainer/CarrierAssignedContainer";
import { AddDriverContainer } from "app/containers/ExecuteContainer/AddDriverContainer";
import { AssignDriverContainer } from "app/containers/ExecuteContainer/AssignDriverContainer";

interface MainTabsProps { isBarBottom: boolean }

const RootLevelTabs: React.FC<MainTabsProps> = ({isBarBottom}) => {
  console.log(isBarBottom, 'isBarBottom')
  return (

    <IonRouterOutlet class="desktop-page-container">
      <Route
        path="/app"
        render={() => (
          <>
            <div className="tab-bar-div">
              <img src="assets/icon/Logo.png" className="tab-bar-logo" />
              <IonTabs>
                <IonRouterOutlet>
                  <Route path="/app/search" render={(props: any) => <SearchContainer {...props} />} exact />
                  <Route path="/app/search/results" component={SearchResultContainer} exact />
                  <Route path="/app/home" render={(props: any) => <Home {...props} />} exact={true} />
                  <Route path="/app/(home/recommended|home/watched|search|MyLoad/CarrierAssigned)/:id" component={LoadDetailsContainer} />
                  <Route path="/app/menu/faq" component={FAQMenuPage} />
                  <Route path="/app/manage/ProfileDetails" component={ProfileContainer} />
                  <Route path="/app/manage/CarrierProfileDetails" component={CarrierProfileContainer} />
                  <Route path="/app/manage/ManageTruck" component={ManageTruckContainer} />
                  <Route path="/app/manage/ManageUser" component={ManageUserContainer} />
                  <Route path="/app/manage/ManageLane" component={ManageLaneContainer} />
                  <Route path="/app/execute" component={ExecuteContainer} sexact={true} />
                  <Route path="/app/MyLoad/CarrierAssigned" render={(props: any) => <CarrierAssignedContainer {...props} />} exact={true} />
                  <Route path="/app/MyLoad/addDriver" render={(props: any) => <AddDriverContainer {...props} />} exact={true} />
                  <Route path="/app/MyLoad/driverAssign" render={(props: any) => <AssignDriverContainer {...props} />} exact={true} />
                  <Route
                    path="/app/MyLoad"
                    render={(props: any) => <ExecuteContainer {...props} />} exact={true}
                  />
                  <Route
                    path="/app/manage"
                    component={ManageContainer}
                    exact={true}
                  />
                  <Route
                    path="/app/more" render={(props: any) => <MenuContainer {...props} />} exact={true} />

                  <Route path="/app" render={() => <Redirect to="/app/home" />} />

                </IonRouterOutlet>
                {isBarBottom? <IonTabBar slot="bottom">
                  <IonTabButton tab="home" href="/app/home" >
                    <IonIcon src="assets/icon/nav_home icon.svg" class="home_icon"></IonIcon>
                    <IonLabel class="tab_footer_label">Home {isBarBottom}</IonLabel>

                  </IonTabButton>
                  <IonTabButton tab="search" href="/app/search">
                    <IonIcon src="assets/icon/bottom_search_icon.svg" class="search_icon"></IonIcon>
                    <IonLabel class="tab_footer_label search_label">Search</IonLabel>
                  </IonTabButton>

                  <IonTabButton tab="execute" href="/app/MyLoad" >
                    <IonIcon src="assets/icon/My Load.svg" class="my_load_icon"></IonIcon>
                    <IonLabel class="tab_footer_label execute_label">My Loads</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="manage" href="/app/manage">
                    <IonIcon src="assets/icon/manag icon.svg" class="manage_icon"></IonIcon>
                    <IonLabel class="tab_footer_label tab_footer_label_manage">Profile</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="more" href="/app/more">
                    <IonIcon src="assets/icon/more icon.svg" class="more_icon"></IonIcon>
                    <IonLabel class="tab_footer_label tab_footer_label_more">More</IonLabel>
                  </IonTabButton>

                </IonTabBar> : null}
              </IonTabs>
              <div className="tab-bar-profile">
                <IonRow>
                  <IonCol>
                    <IonImg src="assets/icon/man.svg"></IonImg>
                  </IonCol>
                  <IonCol class="name-col">
                    <span>Welcome</span> <br /><span>Igor</span>
                  </IonCol>
                  <IonCol>
                    <i className="downArrow"></i>
                  </IonCol>
                </IonRow>


              </div>
            </div>
            <IonFooter class="copyright-div">
              <span>© 2019 Schneider. All Rights Reserved.</span>
              <span>Home | Sitemap | Privacy Policy</span>
            </IonFooter>
          </>
        )}
        exact={true} />
    </IonRouterOutlet>

  );
}

export default RootLevelTabs;