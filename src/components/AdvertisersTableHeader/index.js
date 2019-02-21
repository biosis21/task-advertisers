import React, {useContext} from "react";

import "./styles.scss";
import {AdvertisersTableSoringContext} from "../../contexts";

const AdvertisersTableHeader = () => {

    const [sorting, toggleSorting] = useContext(AdvertisersTableSoringContext);

    const columns = [
        {
            key: "name",
            title: "Advertiser"
        },
        {
            key: "creationAt",
            title: "Creation date"
        },
        {
            key: "campaignsIds",
            title: "# Campaigns"
        },
        {
            key: "impressions",
            title: "Impressions"
        },
        {
            key: "clicks",
            title: "Clicks"
        }
    ];

    const renderOrder = (columnKey) => {
        if (columnKey !== sorting.key) {
            return null;
        }

        return (
            <i
                className="advertisers-table-header__direction"
                style={{"transform": `rotate(${sorting.direction === "desc" ? "180deg" : "0deg"})`}}
            >
                ^
            </i>
        );
    };

    const renderedColumns = columns.map((column) => (
        <div
            key={column.key}
            className="advertisers-table-header__col"
            onClick={() => toggleSorting(column.key)}
        >
            {column.title}
            {renderOrder(column.key)}
        </div>
    ));

    return (
        <div className="advertisers-table-header">
            {renderedColumns}
        </div>
    );
};


export default AdvertisersTableHeader;