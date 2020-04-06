import {
    Plugins,
    PushNotification,
    PushNotificationToken,
    PushNotificationActionPerformed
} from '@capacitor/core';

export const usePushNotification = () => {
    const { PushNotifications } = Plugins;
    let registerPush = () => {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register()

    }

    let addPushListeners = () => {

        // On succcess, we should be able to receive notifications
        PushNotifications.addListener('registration',
            (token: PushNotificationToken) => {
                //  alert('Push registration success, token: ' + token.value);
            }
        );

        // Some issue with your setup and push will not work
        PushNotifications.addListener('registrationError',
            (error: any) => {
                //  alert('Error on registration: ' + JSON.stringify(error));
            }
        );

        // Show us the notification payload if the app is open on our device
        PushNotifications.addListener('pushNotificationReceived',
            (notification: PushNotification) => {
                alert('pushNotificationReceived, token: ' + JSON.stringify(notification));
            }
        );

        // Method called when tapping on a notification
        PushNotifications.addListener('pushNotificationActionPerformed',
            (notification: PushNotificationActionPerformed) => {
                alert('pushNotificationActionPerformed, token: ' + JSON.stringify(notification.notification));
            }
        );
    }


    return {
        registerPush,
        addPushListeners,
    }
}
