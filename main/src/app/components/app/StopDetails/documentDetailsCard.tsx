import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';


const DocumentDetailsCard = (props: any) => {
	return (
		<IonGrid class="document_details" onClick = {() => props.showPdf(props.details.document_name)}>
			<IonRow>
				<IonCol size="11">
					<IonRow>
						<IonCol>Document Type : {props.details.document_type}</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>By {props.details.uploaded_by} | {props.details.uploaded_time}</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>{props.details.document_name} </IonCol>
					</IonRow>
				</IonCol>
				<IonCol size="1">
					<IonIcon src="assets/icon/view.svg" class="document_view_button"></IonIcon>
				</IonCol>
			</IonRow>
		</IonGrid>
	)
}

const DocumentCard = (props: any) =>{
    const [showDocument, setshowDocument]=useState(false);
    const mock_document_details = props.mock_document_details;
    const showPdf = (name: any) =>{
		console.log("hi" + name);
	}
    return(
        <IonCard class="ion-card">
            <IonCardHeader class="accordion-header" onClick={() => {setshowDocument(!showDocument)}}>
                <span>Documents</span>

                {
                    showDocument ?
                        <i className="up"></i>
                        :
                        <i className="down"></i>
                }
            </IonCardHeader>
            <IonCardContent class={`document_details_card ${showDocument ? 'fadein' : 'fadeout'}`}>
                {
                    mock_document_details.map((details: any, index: any) => (
                        <DocumentDetailsCard details={details} key={index} showPdf = {showPdf}/>
                    ))
                }
            </IonCardContent>
        </IonCard>
    )
}
export default DocumentCard;