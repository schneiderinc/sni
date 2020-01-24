
import React, { useState } from 'react';
import './search.page.scss'
import { IonContent, IonPage, IonSegment, IonSegmentButton, IonHeader, IonLabel } from '@ionic/react';
import { SectionContainer } from "app/containers/SearchContainer/sectionContainer";

interface SearchProps { };
const Search: React.FC<SearchProps> = ({ }) => {
	const [segment, setSegment] = useState<any>({ name: 'New', data: {} });
	return (
		<IonPage> 
			<IonHeader className="page-header">
				<div id="header-title">{segment.name === "New" ? "New Search" : segment.name === "Recent" ? "Recent Search" : "Favorite Search"}</div>

				<IonSegment mode="ios" onIonChange={(e) => setSegment({ name: e.detail.value as any, data: {} })} class="segment_control_tabs segment_control_tabs_search">
					<IonSegmentButton mode="ios" value="New" checked={segment.name === 'New'}>
						<IonLabel>New</IonLabel>
					</IonSegmentButton>
					<IonSegmentButton mode="ios" value="Recent" checked={segment.name === 'Recent'}>
						<IonLabel>Recent</IonLabel>
					</IonSegmentButton>
					<IonSegmentButton mode="ios" value="Favorite" checked={segment.name === 'Favorite'}>
						<IonLabel>Favorite</IonLabel>
					</IonSegmentButton>
				</IonSegment>
			</IonHeader>
			<IonContent className="ion-padding load-page-content">
				<SectionContainer section={segment.name} />
			</IonContent>
			{/* <IonContent>
				<Route path="/app/search/new" component={NewContainer} />
				<Route path="/app/search/recent" component={RecentContainer} />
				<Route path="/app/search/favorite" component={FavouriteContainer} />
				<Route path="/app/search/results" render={ (props:any)=>(<SearchResultContainer {...props} />)}/>
				<Route path="/app/search" render={() => <Redirect to="/app/search/new" />} exact />
			</IonContent> */}
		</IonPage>
	);
}
export default Search;