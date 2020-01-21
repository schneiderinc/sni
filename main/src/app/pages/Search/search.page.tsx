
import { Route, Redirect} from 'react-router-dom';
import React, { Component } from 'react';
import './search.page.scss'
import { IonContent, IonPage } from '@ionic/react';
import { TabHeader } from 'app/components/app/Bars/Bar-header';
import { NewContainer } from 'app/containers/SearchContainer/NewContainer';
import { RecentContainer } from 'app/containers/SearchContainer/RecentContainer';
import { FavouriteContainer } from 'app/containers/SearchContainer/FavouriteContainer';
import { SearchResultContainer } from "app/containers/SearchContainer/SearchResultContainer";

class SearchPage extends Component<any, any> {
	
	render() {
		return (
			<IonPage>
			<TabHeader {...this.props} route="search" />
			<IonContent>
				<Route path="/app/search/new" component={NewContainer} />
				<Route path="/app/search/recent" component={RecentContainer} />
				<Route path="/app/search/favorite" component={FavouriteContainer} />
				<Route path="/app/search/results" render={ (props:any)=>(<SearchResultContainer {...props} />)}/>
				<Route path="/app/search" render={() => <Redirect to="/app/search/new" />} exact />
			</IonContent>
		</IonPage>
		);
	}
}
export default SearchPage;