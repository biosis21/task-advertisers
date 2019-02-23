import React, {useEffect} from "react";

import "./styles.scss";

import PageHeader from "../components/PageHeader";
import AdvertisersTable from "../components/AdvertisersTable";
import {fetchAdvertisers} from "../actions";
import {connect} from "react-redux";

const AdvertisersPage = ({fetchAdvertisers}) => {

    useEffect(() => {
        fetchAdvertisers();
    }, []);

    return (
        <div className="container advertises-page">
            <PageHeader title="Overview of Advertisers" />

            <AdvertisersTable />
        </div>
    );
};


export default connect(null, {fetchAdvertisers})(AdvertisersPage);