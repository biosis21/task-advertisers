import React from "react";

import "./styles.scss";

const AdvertisersTableSortDirection = ({direction, show}) => {
    if (!show) {
        return null;
    }

    const style = {"transform": `rotate(${direction === "desc" ? "180deg" : "0deg"})`};

    return (
        <i
            className="advertisers-table-sort-direction"
            style={style}
        >
            ^
        </i>
    );
};


export default AdvertisersTableSortDirection;