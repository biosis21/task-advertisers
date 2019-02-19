export const fromArrayToObject = (arr = [], prop) => {
    return arr.reduce((acc, v, i) => {
        const c = v[prop] || i;
        acc[c] = v;
        return acc;
    }, {});
};