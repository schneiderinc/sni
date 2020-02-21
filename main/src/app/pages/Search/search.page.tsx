
import React, { useState } from 'react';
import './search.page.scss'
import { IonContent, IonPage } from '@ionic/react';
import { SectionContainer } from "app/containers/SearchContainer/sectionContainer";
import AppHeader from 'app/components/app/Bars/Bar-header';

interface SearchProps { };
const Search: React.FC<SearchProps> = ({ }) => {
	const [segment, setSegment] = useState<any>({ name: 'New', data: {} });
	return (
		<IonPage className="desktop-page search-page"> 
			<AppHeader title={segment.name === "New" ? "New Search" : segment.name === "Recent" ? "Recent Search" : "Favorite Search"} getSegment={(e:any) => setSegment({name:e.detail.value as any, data:{}})} segments={['New', 'Recent', 'Favorite']} activeSegment={segment.name}/>
			<IonContent className="ion-padding load-page-content search-page-content">
				<SectionContainer section={segment.name} />
			</IonContent>
		</IonPage>
	);
}
export default Search;