import { DeviceInfo } from '@capacitor/core';

export interface GlobalState {
    lastUpdatedDate: string;
    loading: boolean;
    error: boolean;
    currentUser: boolean;
    userData: any;
    showPermissionAlert: boolean;
    permissionAlertMessage?: string
    permissionAlertTitle?: string
    alertError?: boolean; //Not using
    networkStatus: Object;
    deviceInfo: Object;
    Hidden?: boolean;
    loginToken?: string
}

export interface Location {
    id: number;
    name?: string;
    lat: number;
    lng: number;
}

