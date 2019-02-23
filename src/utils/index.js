/**
 * Function for converting array to object with specific prop
 * @example
 *
 * from
 * const arr = [{id: 1, name: "Tom"}, {id: 2, name: "Jack"}]
 *
 * fromArrayToObject(arr, "id");
 *
 * to
 * {1: {id: 1, name: "Tom"}, 2: {id: 2, name: "Jack"}}
 *
 * @param {array} arr
 * @param {string} prop
 * @returns {array}
 */
export const fromArrayToObject = (arr = [], prop) => {
    return arr.reduce((acc, v, i) => {
        const c = v[prop] || i;
        acc[c] = v;
        return acc;
    }, {});
};