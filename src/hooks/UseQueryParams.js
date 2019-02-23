export const useQueryParams = (history) => {

    /**
     * Parse location history and return required param
     * @param {string} param
     * @returns {string | null}
     */
    const getParam = (param) => {
        const params = new URLSearchParams(history.location.search);
        return params.get(param);
    };

    /**
     * Set specific param value and update history
     */
    const setParam = (param, value) => {
        const searchParams = new URLSearchParams();
        searchParams.set(param, value);
        history.push(`?${searchParams.toString()}`);
    };

    return {getParam, setParam};
};