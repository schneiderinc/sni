import { IonContent, IonPage } from '@ionic/react';
import React,{Component} from 'react';
import {TabHeader} from 'app/components/app/Bars/Bar-header'

class ExecutePage extends Component<any,any> {
	constructor (props:any) {
		super(props);
	
	   this.state = {
	
    tab:false,
    toggleBtn:false
	  };
	  }
	
	render() {
		return (
		 <IonPage>
	
	
			  
			  <IonContent>
			  <TabHeader  Title="Execute"  toggleBtn={this.state.toggleBtn}  tab={this.state.tab} />
       
			
			  </IonContent>
     </IonPage>
		
		
		);
	}
}
export default ExecutePage;