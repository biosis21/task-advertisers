export const useQueryParams = (history) => {

    const getParam = (param) => {
        const params = new URLSearchParams(history.location.search);
        return params.get(param);
    };

    const setParam = (param, value) => {
        const searchParams = new URLSearchParams();
        searchParams.set(param, value);
        history.push(`?${searchParams.toString()}`);
    };

    return {getParam, setParam};
};