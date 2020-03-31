import {
    Plugins,
    PushNotification,
    PushNotificationToken,
    PushNotificationActionPerformed
} from '@capacitor/core';

import React, { useState } from 'react';
const { PushNotifications } = Plugins;

export const usePushNotification = () => {
    const [registrationStatus, setRegistration] = useState<any>({})
    const [registrationError, setRegistrationError] = useState<any>({})

    let registerPush = () => {
        PushNotifications.register()
        addPushListeners();
        //setRegistration(isRegisterd);
    }


    let addPushListeners = () => {
        // On success, we should be able to receive notifications
        PushNotifications.addListener('registration',
            (token: PushNotificationToken) => {
                setRegistration(token);
                alert('Push registration success, token: ' + token.value);
            }
        );

        // Some issue with our setup and push will not work
        PushNotifications.addListener('registrationError',
            (error: any) => {
                setRegistrationError(error);
                alert('Error on registration: ' + JSON.stringify(error));
            }
        );

        PushNotifications.addListener('pushNotificationReceived',
            (notification: PushNotification) => {
                alert('Push received: ' + JSON.stringify(notification));
            }
        );

        // Method called when tapping on a notification
        PushNotifications.addListener('pushNotificationActionPerformed',
            (notification: PushNotificationActionPerformed) => {
                alert('Push action performed: ' + JSON.stringify(notification));
            }
        );
    }


    return {
        registerPush,
        addPushListeners,
        registrationStatus,
        registrationError
    }
}
