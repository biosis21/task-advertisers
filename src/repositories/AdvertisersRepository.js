import MockAPI from '../apis/MockAPI';

const getAdvertisers = () => MockAPI.get(`/advertisers`);

const getAdvertiserStatistics = () => MockAPI.get(`/advertiser-statistics`);

export default {
    getAdvertisers,
    getAdvertiserStatistics
};