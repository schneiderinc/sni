import { ILoads } from "app/schemas/Loads/Loads.schema";
import { setObject, getObject } from "app/utils/common";

export class Recommended {

    __distance: string = "miles";
    __currency: string = "$";

    private __carrier_state: ILoads = {};

    get schneider_loads_id() {
        return this.__carrier_state.schneider_loads_id;
    }

    get load_status() {
        return this.__carrier_state.load_status;
    }

    get origin_city() {
        return this.__carrier_state.origin_city;
    }

    get origin_state() {
        return this.__carrier_state.origin_state;
    }

    get origin_from_date() {
        return this.__carrier_state.origin_from_date;
    }

    get origin_to_date_time() {
        return this.__carrier_state.origin_to_date_time;
    }

    get origin_deadhead() {
        return this.__carrier_state.destination_deadhead + this.__distance;
    }

    get destination_city() {
        return this.__carrier_state.origin_city;
    }

    get destination_state() {
        return this.__carrier_state.origin_state;
    }

    get Destination_from_date() {
        return this.__carrier_state.origin_from_date;
    }

    get Destination_to_date_time() {
        return this.__carrier_state.origin_to_date_time;
    }

    get Destination_deadhead() {
        return this.__carrier_state.destination_deadhead + this.__distance;
    }

    get total_weight() {
        return this.__carrier_state.total_weight + 'lbs';
    }

    get total_distance() {
        return this.__carrier_state.total_distance + this.__distance;
    }

    get total_stops() {
        return this.__carrier_state.total_stops;
    }

    get trailer() {
        return this.__carrier_state.trailer;
    }

    get price() {
        return '$' + this.__carrier_state.price;
    }

    onLoadClick() {

    }

    persistLoads(_loads: []) {
        return setObject('Carrier-rcmd-Loads', _loads);
    }

    getLoads() {
        return getObject('Carrier-rcmd-Loads');
    }

    setofflineWatchedLoads(_loads: []) {
        return setObject('Carrier-offline-Watched-Loads', _loads);
    }

    getofflineWatchedLoads() {
        return getObject('Carrier-offline-Watched-Loads');
    }
    setWeight() {
        this.validLoad();
    }

    private validLoad() {

    }
}