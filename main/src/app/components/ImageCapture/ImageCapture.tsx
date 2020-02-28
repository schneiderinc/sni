import React, { Component } from 'react';
import { IonAlert } from '@ionic/react';
import { Plugins, CameraResultType } from '@capacitor/core';

const { Camera } = Plugins;
const ERROR_ACCESS_DENIED_ANDROID = 'Unable to access camera, user denied permission request'; //android
const ERROR_ACCESS_DENIED_IOS = 'User denied access to camera'; //ios
const ERROR_ACCESS_DENINDE_WEB = 'Permission denied'; // web
const ERROR_MESSAGE_ON_ACCESS_DENIED = "Please,Enable Your camera permissions";
const ERROR_REQUESTED_DEVICE_NOT_FOUND = 'Requested device not found'; // web
const ERROR_VERIFY_CAMERA_FILE_PERMISSIONS =
    'Please verify if your Camera/Gallery preferences are switched ON';

class ImageCapture extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            imagePath: "assets/images/man@2x.png"
        };
    }

    imageCapture = async () => {
        try {
            const image = await Camera.getPhoto({
                quality: 80,
                allowEditing: true,
                resultType: CameraResultType.DataUrl
            });

            this.setState({ imagePath: image.dataUrl });
            this.props.profileImg(image.dataUrl)

        }
        catch (error) {
            console.log("ERR::", (error));

            // error.errorMessage - (ios).
            // error.message - (android).

            let errorMessage = error.errorMessage || error.message || error;

            if (
                errorMessage == ERROR_ACCESS_DENIED_IOS
                // || errorMessage == ERROR_ACCESS_DENIED_ANDROID
                || errorMessage == ERROR_ACCESS_DENINDE_WEB
                || errorMessage === ERROR_REQUESTED_DEVICE_NOT_FOUND) {
                errorMessage = ERROR_VERIFY_CAMERA_FILE_PERMISSIONS;
                let title = 'Camera,Gallery Access';

                this.props.showPermissionAlert({
                    isShowPermissionAlert: true,
                    permissionAlertMessage: ERROR_VERIFY_CAMERA_FILE_PERMISSIONS,
                    permissionAlertTitle: title
                })
            }
        }
    }

    render() {
        // const { getShowPermissionAlert, getPermissionAlertMessage } = this.props;
        return (
            <>
                <img alt="profile" src={this.state.imagePath} className="profileImg" onClick={this.imageCapture}></img>
                {/* {getShowPermissionAlert ? <IonAlert
                    isOpen={getShowPermissionAlert} message={getPermissionAlertMessage}
                    buttons={[
                        {
                            text: 'Ok',
                            role: 'Ok',
                            cssClass: 'secondary',
                            handler: () => {
                                this.props.closePermissionAlert()
                            }
                        },]}
                /> : null} */}
            </>
        );
    }
}

export default ImageCapture;