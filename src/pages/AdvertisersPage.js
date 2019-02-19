import React from "react";

import "./styles.scss";

import PageHeader from "../components/PageHeader";
import AdvertisersTable from "../components/AdvertisersTable";

const AdvertisersPage = () => {

    return (
        <div className="container advertises-page">
            <PageHeader title="Overview of Advertisers" />

            <AdvertisersTable />
        </div>
    );
};


export default AdvertisersPage;