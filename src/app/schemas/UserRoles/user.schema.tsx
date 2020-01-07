export interface UserCred {
    id: number;
    role: string;
}
export interface User {
    carrier_id: number;
    id: number;
    email_id: number;
    phone_number: number;
    first_name: string;
    last_name: string;
    zip_code: number;
    is_active: boolean;
    is_deleted: boolean;
    created_at: string;
}

export interface UserPref {
    id: number;
    is_location_access_enabled: boolean;
    is_accelerometer_access_enabled0: boolean;
    is_pushnotif_access_enabled: boolean;
    is_biometric_access_enabled: boolean;
    is_sms_access_enabled: boolean;
    is_email_comms_enabled: string;
}



