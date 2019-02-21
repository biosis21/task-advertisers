import {FETCH_STATUS} from "../types";
import AdvertisersRepository from "../repositories/AdvertisersRepository";

const getAdvertisers = async () => {
    try {
        const data = (await AdvertisersRepository.getAdvertisers()).data;
        return {
            data,
            status: FETCH_STATUS.SUCCESS
        };
    } catch (e) {
        return {
            data: null,
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
            data: null,
            status: FETCH_STATUS.ERROR
        };
    }
};

export default {
    getAdvertisers,
    getAdvertiserStatistics
};