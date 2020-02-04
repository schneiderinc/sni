import { IonContent, IonPage } from '@ionic/react';
import React,{Component} from 'react';
import AppHeader from 'app/components/app/Bars/Bar-header';
import MapView from "app/components/shared/MapView";

class ExecutePage extends Component<any,any> {
	constructor (props:any) {
		super(props);
	}
	
	render() {
		return (
		 	
					  <MapView />
			
		);
	}
}
export default ExecutePage;