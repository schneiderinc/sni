import React, { Component } from 'react';
import AppHeader from 'app/components/app/Bars/Bar-header';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardContent, IonRow, IonCol} from '@ionic/react';
import './Menu.page.scss';

class FAQMenuPage extends Component<any,any> {
	constructor (props:any) {
        super(props);
        this.state = {
            showContent: true
		};
	}
	loadTerms = () => {
		this.setState({ showContent: !this.state.showContent });
	}
	render() {
		return (
		  	<IonPage className="menu_page">
                  <AppHeader title="FAQ" backUrl={"/app/"+this.props.module} isSearch={true} />
				<IonContent class="ion-padding menu_list_page_content">
                <IonCard class="ion-card" >
                    <IonCardHeader class="accordion-header" onClick={this.loadTerms}>
                        <span>Search Loads </span>
                        {
                            this.state.showContent ?
                                <i className="down"></i>
                                :
                                <i className="up"></i>
                        }
                    </IonCardHeader>
                    <IonCardContent class={this.state.showContent ? 'fadeout' : 'fadein'}>
                        <IonRow class="list_row">
                            <IonCol>
                                <IonRow>
                                    <IonCol class="list_row_heading">
                                        How to search loads
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                        <IonRow class="list_row">
                            <IonCol>
                                <IonRow>
                                    <IonCol class="list_row_heading">
                                        How to search loads
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonRow>
                                    <IonCol class="list_row_heading">
                                        How to search loads
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonCardContent>
                </IonCard>
                <IonCard class="ion-card" >
                    <IonCardHeader class="accordion-header">
                        <span>Assign Load</span> <i className="down"></i>
                                
                    </IonCardHeader>
                </IonCard>
                <IonCard class="ion-card" >
                    <IonCardHeader class="accordion-header">
                        <span>Manage User</span> <i className="down"></i>
                    </IonCardHeader>
                </IonCard>
				</IonContent>
    		</IonPage>
		);
	}
}
export default FAQMenuPage;