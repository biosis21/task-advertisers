import {useState} from "react";
import {useQueryParams} from "./UseQueryParams";
import {SORTING_TYPE} from "../types";


/**
 * Custom hook for updating URL query params
 * @param {object} history
 * @param {string} key
 * @param {SORTING_TYPE} direction
 * @returns {{sorting, toggleSorting: toggleSorting}}
 */
export const useSorting = (history, key = "name", direction = SORTING_TYPE.DESC) => {

    const {getParam, setParam} = useQueryParams(history);
    const initialParamValue = getParam("sort");

    if (initialParamValue) {
        [key, direction] = initialParamValue.split(",");
    }

    const [sorting, setSorting] = useState({key, direction});

    /**
     * Handler fires on change sorting properties
     * @param {string} key
     */
    const toggleSorting = (key) => {
        let {direction} = sorting;

        if (key === sorting.key) {
            direction = direction === SORTING_TYPE.DESC ? SORTING_TYPE.ASC : SORTING_TYPE.DESC;
        }

        setParam("sort", `${key},${direction}`);

        setSorting({
            key,
            direction
        });
    };

    return {sorting, toggleSorting};
};