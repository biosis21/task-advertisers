import {combineReducers} from "redux";

import AdvertisersReducer from "./AdvertisersReducer";
import AdvertiserStatisticsReducer from "./AdvertiserStatisticsReducer";

export default combineReducers({
    advertisers: AdvertisersReducer,
    advertiserStatistics: AdvertiserStatisticsReducer
});