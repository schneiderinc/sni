export interface GlobalState {
    lastUpdatedDate: string;
    loading: boolean;
    error: boolean;
    currentUser: boolean;
    userData: any;
    showPermissionAlert: boolean;
    permissionAlertMessage?: string
    alertError?: boolean; //Not using

}

export interface Location {
    id: number;
    name?: string;
    lat: number;
    lng: number;
}

