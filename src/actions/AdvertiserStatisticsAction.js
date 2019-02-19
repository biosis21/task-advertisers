import AdvertisersServices from "../services/AdvertisersServices";
import {FETCH_ADVERTISER_STATISTICS} from "./types";

export const fetchAdvertiserStatistics = () => async (dispatch) => {
    const payload = await AdvertisersServices.getAdvertiserStatistics();

    dispatch({
        type: FETCH_ADVERTISER_STATISTICS,
        payload
    });
};