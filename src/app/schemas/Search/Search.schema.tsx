
export interface Isearch {
    search_id?: number;
    origin?: string;
    origin_radius?: number;
    pickup_date?: Date;
    destination?: string;
    destination_radius?: number;
    drop_date?: Date;
    trailer_type?: string;
    isFavorite?: boolean;
}

export interface ActionType {
    type: string;
    payload?: object;
  }

  
export interface SearchState {
    loads?: object;
    params:any
}
