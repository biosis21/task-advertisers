import {FETCH_STATUS} from "../types/FetchStatus";
import {FETCH_ADVERTISERS} from "../actions/types";
import {fromArrayToObject} from "../utils";

const INITIAL_VALUE = {
    data: {},
    status: FETCH_STATUS.LOADING
};

const AdvertisersReducer = (advertisers = INITIAL_VALUE, action) => {

    if (action.type === FETCH_ADVERTISERS && action.payload.status === FETCH_STATUS.SUCCESS) {
        return {
            data: fromArrayToObject(action.payload.data, "id"),
            status: action.payload.status
        };
    }

    if (action.type === FETCH_ADVERTISERS && action.payload.status === FETCH_STATUS.ERROR) {
        return {
            data: {},
            status: action.payload.status
        };
    }

    return advertisers;

};


export default AdvertisersReducer;