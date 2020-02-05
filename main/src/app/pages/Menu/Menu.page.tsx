import React, { Component } from 'react';
import { IonContent, IonPage, IonCard, IonList,IonLabel, IonItem } from '@ionic/react';
import './Menu.page.scss';
import { Link } from 'react-router-dom';
import AppHeader from 'app/components/app/Bars/Bar-header';

const ListItem = (props: any) => {
	const heading = props.headings.heading;
	const sub_heading = props.headings.sub_heading
    return (
		<>
			<IonLabel class="menu_list_heading">{heading}</IonLabel>
			<IonCard mode="md" class="menu_list_card">
				<IonList mode="ios">
					{
						sub_heading.map((lable: String, index:any)=>(
							<Link to={{ pathname: '/app/menu/faq' }} key={index}>
							<IonItem  class="menu_list_item" onClick={()=>{console.log(lable)}} lines={index === sub_heading.length-1 ? 'none': 'inset'}>
								{lable} <i className="arrow_forward" slot="end"></i>
							</IonItem>
							</Link>
						))
					}
				</IonList>
			</IonCard>
		</>
    );
}

class MenuPage extends Component<any,any> {
	constructor (props:any) {
		super(props);
	   	this.state = {
			tab:false,
			toggleBtn:false
		};
	}
	
	render() {
		const menuHeadingList = this.props.menuHeadingList;
		return (
		  	<IonPage className="menu_page">
				   <AppHeader title="Menu"  />
			  		<IonContent class="menu_page_content">
					{
						menuHeadingList.map((headings: any, index:any)=>(
							<ListItem key = {index} headings = {headings}/>
						))
					}
                    
				</IonContent>
    		</IonPage>
		);
	}
}
export default MenuPage;