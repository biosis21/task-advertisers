import React from "react";

import "./styles.scss";

const AdvertisersTableHeader = () => {

    return (
        <div className="advertisers-table-header">
            <div className="advertisers-table-header__col">Advertiser</div>
            <div className="advertisers-table-header__col">Creation date</div>
            <div className="advertisers-table-header__col"># Campaigns</div>
            <div className="advertisers-table-header__col">Impressions</div>
            <div className="advertisers-table-header__col">Clicks</div>
        </div>
    );
};


export default AdvertisersTableHeader;