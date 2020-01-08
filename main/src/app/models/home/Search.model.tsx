import { Isearch } from "app/schemas/Search/Search.schema";
import { setObject, getObject } from "app/utils/common";

export class Search {

    __distance: string = "mi";
    private __isSearchResult:any = {searched:false};
    private __search_state: Isearch = {};

    get search_id() {
        return this.__search_state.search_id;
    }

    get origin() {
        return this.__search_state.origin;
    }

    get origin_radius() {
        return this.__search_state.origin_radius + this.__distance;
    }

    get pickup_date() {
        return this.__search_state.pickup_date;
    }

    get destination() {
        return this.__search_state.destination;
    }

    get destination_radius() {
        return this.__search_state.destination_radius + this.__distance;
    }

    get drop_date() {
        return this.__search_state.drop_date ;
    }

    get trailer_type() {
        return this.__search_state.trailer_type;
    }

    get isFavorite() {
        return this.__search_state.isFavorite;
    }
    get searchResults() {
        return this.__isSearchResult.searched;
    }

    onLoadClick() {

    }

    setResults(val:any) {
        this.__isSearchResult.searched = val;
    }

    persistLoads(_loads: []) {
        return setObject('Search-Loads', _loads);
    }

    getLoads() {
        return getObject('Search-Loads');
    }

}
const searchModel = new Search();
Object.freeze(searchModel);

export default searchModel;