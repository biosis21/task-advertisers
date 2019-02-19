import {FETCH_STATUS} from "../types/FetchStatus";
import {FETCH_ADVERTISER_STATISTICS} from "../actions/types";
import {fromArrayToObject} from "../utils";

const INITIAL_VALUE = {
    data: {},
    status: FETCH_STATUS.LOADING
};

const AdvertiserStatisticsReducer = (advertiserStatistics = INITIAL_VALUE, action) => {

    if (action.type === FETCH_ADVERTISER_STATISTICS && action.payload.status === FETCH_STATUS.SUCCESS) {
        return {
            data: fromArrayToObject(action.payload.data, "advertiserId"),
            status: action.payload.status
        };
    }

    if (action.type === FETCH_ADVERTISER_STATISTICS && action.payload.status === FETCH_STATUS.ERROR) {
        return {
            data: {},
            status: action.payload.status
        };
    }

    return advertiserStatistics;

};


export default AdvertiserStatisticsReducer;