import AdvertisersRepository from "../repositories/AdvertisersRepository";
import {FETCH_STATUS} from "../types/FetchStatus";

const getAdvertisers = async () => {
    try {
        const data = (await AdvertisersRepository.getAdvertisers()).data;
        return {
            data,
            status: FETCH_STATUS.SUCCESS
        };
    } catch (e) {
        return {
            data: {},
            status: FETCH_STATUS.ERROR
        };
    }
};

const getAdvertiserStatistics = async () => {
    try {
        const data = (await AdvertisersRepository.getAdvertiserStatistics()).data;
        return {
            data,
            status: FETCH_STATUS.SUCCESS
        };
    } catch (e) {
        return {
            data: {},
            status: FETCH_STATUS.ERROR
        }
    }
};

export default {
    getAdvertisers,
    getAdvertiserStatistics
};