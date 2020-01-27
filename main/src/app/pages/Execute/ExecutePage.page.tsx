import { IonContent, IonPage } from '@ionic/react';
import React,{Component} from 'react';
import AppHeader from 'app/components/app/Bars/Bar-header';

class ExecutePage extends Component<any,any> {
	constructor (props:any) {
		super(props);
	}
	
	render() {
		return (
		 	<IonPage>
				<AppHeader title="Execute"  />
			  	<IonContent>
			  	</IonContent>
			</IonPage>
		);
	}
}
export default ExecutePage;