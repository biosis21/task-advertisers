import {FETCH_STATUS} from "../types";
import {AdvertiserModel, AdvertiserStatisticsModel} from "../models";
import AdvertisersRepository from "../repositories/AdvertisersRepository";

const getAdvertisers = async () => {
    try {
        const data = (await AdvertisersRepository.getAdvertisers()).data;
        return {
            data: data.map((value) => new AdvertiserModel(value)),
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
            data: data.map((value) => new AdvertiserStatisticsModel(value)),
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