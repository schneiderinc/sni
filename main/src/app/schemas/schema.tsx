export interface GlobalState {
    lastUpdatedDate: string;
    loading: boolean;
    error: boolean;
    currentUser: boolean;
    userData:any;
}

export interface Location {
    id: number;
    name?: string;
    lat: number;
    lng: number;
  }
  
