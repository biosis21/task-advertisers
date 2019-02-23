import React from "react";

import "./styles.scss";

const AdvertisersTableSortDirection = ({direction, show}) => {
    if (!show) {
        return null;
    }

    return (
        <i
            className="advertisers-table-sort-direction"
            style={{"transform": `rotate(${direction === "desc" ? "180deg" : "0deg"})`}}
        >
            ^
        </i>
    );
};


export default AdvertisersTableSortDirection;