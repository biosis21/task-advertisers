import React, {useContext} from "react";

import "./styles.scss";
import {TABLE_COLUMNS} from "../../types/TableColumns";
import {AdvertisersTableSoringContext} from "../../contexts";
import AdvertisersTableSortDirection from "../AdvertisersTableSortDirection";

const AdvertisersTableHeader = () => {

    const [sorting, toggleSorting] = useContext(AdvertisersTableSoringContext);

    const renderedColumns = TABLE_COLUMNS.map((column) => (
        <div
            key={column.key}
            className="advertisers-table-header__col"
            onClick={() => toggleSorting(column.key)}
        >
            {column.title}
            <AdvertisersTableSortDirection
                show={column.key === sorting.key}
                direction={sorting.direction}
            />
        </div>
    ));

    return (
        <div className="advertisers-table-header">
            {renderedColumns}
        </div>
    );
};


export default AdvertisersTableHeader;