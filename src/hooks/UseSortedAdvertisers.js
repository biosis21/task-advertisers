import {SORTING_TYPE} from "../types";

/**
 * Function for comparing two values
 * @param {*} a
 * @param {*} b
 * @param {number} direction - sorting directions
 * @returns {number}
 */
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

/**
 * Function for comparing two strings
 * @param {string} a
 * @param {string} b
 * @param {number} direction - sorting direction
 * @returns {number}
 */
const sortByName = (a, b, direction) => {
    const res = ("" + a).localeCompare(b);
    return direction > 0 ? res : -res;
};

/**
 * Factory for invoking specific function by related key
 * @param {String} key - key for sorting
 * @param {object} a
 * @param {object} b
 * @param {number} direction - sorting direction
 * @returns {number}
 */
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

/**
 * Custom hook for sorting advertisers by name, impressions, clicks and etc.
 * @param {object} sorting - ex. {key: "name", direction: "asc"}
 * @param {array} advertisers
 * @param {object} advertiserStatistics
 * @returns {array} - sorted advertisers by specific sorting properties
 */
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