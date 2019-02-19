import React from "react";
import {connect} from "react-redux";

import "./styles.scss";
import {fetchAdvertisers} from "../../actions";
import AdvertisersTableRow from "../AdvertisersTableRow";
import {FETCH_STATUS} from "../../types/FetchStatus";
import AdvertisersTableHeader from "../AdvertisersTableHeader";

const AdvertisersTable = ({advertisers, status}) => {

    const buildList = () => advertisers.map((advertiser) => (
        <AdvertisersTableRow
            key={advertiser.id}
            advertiserId={advertiser.id}
        />
    ));

    const renderList = () => {
        if (status === FETCH_STATUS.LOADING) {
            return (<div className="advertisers-table-body__status">Loading...</div>);
        }

        if (status === FETCH_STATUS.ERROR) {
            return (<div className="advertisers-table-body__status">Could not load advertisers</div>);
        }

        return buildList();
    };

    return (
        <div className="advertisers-table">
            <AdvertisersTableHeader />

            {renderList()}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        advertisers: Object.values(state.advertisers.data),
        status: state.advertisers.status
    };
};

export default connect(mapStateToProps, {fetchAdvertisers})(AdvertisersTable);