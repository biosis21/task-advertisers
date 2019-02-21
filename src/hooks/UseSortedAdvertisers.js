import {SORTING_TYPE} from "../types";

const sortBy = (a, b, direction) => {
    if (a === undefined) {
        return direction;
    }

    if (b === undefined) {
        return -direction;
    }

    if (a > b) {
        return -direction;
    }

    if (a < b) {
        return direction;
    }

    return 0;
};

const sortByName = (a, b, direction) => {
    const res = ("" + a).localeCompare(b);
    return direction > 0 ? res : -res;
};

const sortingFactory = (key, a, b, direction) => {
    switch (key) {
        case "creationAt":
            return sortBy(new Date(a.createdAt), new Date(b.createdAt), direction);

        case "campaignsIds":
            return sortBy(a.campaignIds.length, b.campaignIds.length, direction);

        case "impressions":
            return sortBy(a.impressions, b.impressions, direction);

        case "clicks":
            return sortBy(a.clicks, b.clicks, direction);

        case "name":
        default:
            return sortByName(a.name, b.name, direction);
    }
};

export const useSortedAdvertisers = (sorting, advertisers, advertiserStatistics) => {
    const direction = sorting.direction === SORTING_TYPE.DESC ? 1 : -1;

    return advertisers.sort((a, b) => {

        if (["clicks", "impressions"].indexOf(sorting.key) > -1) {
            return sortingFactory(
                sorting.key,
                advertiserStatistics.data[a.id] || {},
                advertiserStatistics.data[b.id] || {},
                direction
            );
        }

        return sortingFactory(sorting.key, a, b, direction);
    });
};