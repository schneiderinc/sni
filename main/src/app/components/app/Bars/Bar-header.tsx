import * as React from "react";
import { IonHeader, IonRow, IonCol, IonImg, IonBackButton} from "@ionic/react";
import Toggle from 'app/components/shared/toggle/Toggle';
import { IonLabel, IonTabBar, IonTabButton } from '@ionic/react';
import './search-header.scss';
import { arrowBack } from "ionicons/icons";
import searchModel from 'app/models/home/Search.model';

interface State {
  subtitle: string;
  value: string;
  isContextsearchvisible: boolean;
};
class TabHeader extends React.Component<any, State> {
  // eslint-disable-next-line
  constructor(props: any) {
    super(props);
    this.state = {
      subtitle: "Recommended",
      value: 'Distance',
      isContextsearchvisible: true
    }
  }
  handleChange = (e: any) => {
    this.setState({ value: e.target.value })
  }
  handleToggleStateChange = (value: any) => {
    this.props.onToggleStateChange(value);

    if (value === "Recommended") {
        this.setState({ subtitle: "Recommended", isContextsearchvisible: true })
    } else {
        this.setState({ subtitle: "Watched", isContextsearchvisible: false })
    }
}
  editSearch = (values: any) => {

    this.props.history && this.props.history.push("/app/search/new", { data: values });
  }
  getTitle(title:any) {
    switch (title) {
      case '/app/search/new':
        return "New Search";
      case '/app/search/recent':
        return "Recent Search";
      case '/app/search/favorite':
        return "Favorite Search";
      case '/app/search/results':
          return "Search Results";
      default:
        return "New Search"; 
    }
  }
  public render() {
    const srchScn: any = this.props.location && /new|recent|favorite/.test(this.props.location.pathname);
    return (
      <IonHeader className={`page-header ${this.props.loadDetailsTab ? "load_details_header":""}`}>
      {this.props.loadDetailsTab ? 
        <div className="header_title header_back_button">
        <IonRow>
         
          <IonCol size="1"><IonBackButton icon={arrowBack} text="" defaultHref="/app/home"></IonBackButton></IonCol>
          <IonCol size="9">{this.props.Title}</IonCol>
          <IonCol size="2"><img src="assets/icon/Map.png" alt="icon"/></IonCol>
        </IonRow>
        
        </div>
        :
        <>
        <div id="header-title">{(this.props.location && /search/.test(this.props.location.pathname)) ? this.getTitle(this.props.location.pathname):this.props.Title}
        </div>
        {this.props.location && /results/.test(this.props.location.pathname) ? <IonImg slot="end" alt="logo" src="../../assets/icon/Edit.png" item-right class="header_edit_search_button" onClick={() => this.editSearch(searchModel.searchResults.params)}/> : ''}
        {this.props.toggleBtn ? <Toggle onToggleStateChange={(value: any) => this.handleToggleStateChange(value)} data={this.props.LoadsList} /> : null}

        {this.props.route === "search" && srchScn && (

          <IonTabBar slot="top">
            <IonTabButton tab="new" href="/app/search/new">
              <IonLabel>New</IonLabel>
            </IonTabButton>
            <IonTabButton tab="recent" href="/app/search/recent">
              <IonLabel>Recent</IonLabel>
            </IonTabButton>
            <IonTabButton tab="favorite" href="/app/search/favorite">
              <IonLabel>Favorite</IonLabel>
            </IonTabButton>
          </IonTabBar>
        )}
        </>
        }
      </IonHeader>
    );
  }
}

export { TabHeader };

