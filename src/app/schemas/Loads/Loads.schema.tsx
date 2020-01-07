    export interface LoadInfo {
        schneider_loads_id: number;
        price_split: string;
        load_terms: string;
        stop_id: string;
        load_status: boolean;
        payment_status: boolean;
    }

    export interface LoadStops {
            dispatcher_id: number;
            driver_id: number;
            schneider_loads_id: number;
            id: number;
            load_stop_index: number;
            arrival: string;
            trailer_in_number: number;
            trailer_out_number: number;
            departure: number;
    }
    
    export interface ILoads {
        schneider_loads_id?: number;
        load_status?: string;
        origin_city?: string;
        origin_state?: string;
        origin_from_date?: Date;
        origin_to_date_time?: Date;
        origin_deadhead?: number;
        destination_city?: string;
        destination_state?: string;
        destination_from_date?: Date;
        destination_to_date_time?: string;
        destination_deadhead?: number;
        total_weight?: string;
        total_distance?: number;
        total_stops?: number;
        trailer?: number;
        price?: number;
    }
       
    export interface LoadInfoDocs {
        id: number;
        schneider_loads_id: number;
        doc_id: string;
        stop_id: string;
        doc: boolean;
    }

    export interface StopDetails {
        city?: string;
        state?: string;
        from_date?: Date;
        from_date_time?: Date;
    }
    
    
    