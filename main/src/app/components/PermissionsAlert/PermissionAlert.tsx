import React from 'react';
import { IonAlert } from '@ionic/react';

export const PermissionAlert = (props: any) => {
    return (
        <>
            <IonAlert
                isOpen={props.isOpen}
                message={props.message}
                backdropDismiss={false}
                header={props.title}
                buttons={
                    [
                        {
                            text: 'Ok',
                            role: 'Ok',
                            cssClass: 'secondary',
                            handler: () => { props.close() }
                        }
                    ]
                } />

        </>
    )
}