import AdvertisersServices from "../services/AdvertisersServices";
import {FETCH_ADVERTISERS} from "./types";
import {fetchAdvertiserStatistics} from "./AdvertiserStatisticsAction";

export const fetchAdvertisers = () => async (dispatch) => {
    const payload = await AdvertisersServices.getAdvertisers();

    dispatch({
        type: FETCH_ADVERTISERS,
        payload
    });

    dispatch(fetchAdvertiserStatistics());
};