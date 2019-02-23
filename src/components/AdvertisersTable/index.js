import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import "./styles.scss";
import {FETCH_STATUS} from "../../types";
import {fetchAdvertisers} from "../../actions";
import AdvertisersTableRow from "../AdvertisersTableRow";
import {AdvertisersTableSoringContext} from "../../contexts";
import {useSortedAdvertisers, useSorting} from "../../hooks";
import AdvertisersTableHeader from "../AdvertisersTableHeader";

const AdvertisersTable = ({advertisers, status, advertiserStatistics, history}) => {

    const {sorting, toggleSorting} = useSorting(history);
    const sortedAdvertisers = useSortedAdvertisers(sorting, advertisers, advertiserStatistics);

    const buildList = () => sortedAdvertisers.map((advertiser) => (
        <AdvertisersTableRow
            key={advertiser.id}
            advertiserId={advertiser.id}
        />
    ));

    const renderList = () => {
        if (status === FETCH_STATUS.LOADING) {
            return (<div className="advertisers-table__status">Loading...</div>);
        }

        if (status === FETCH_STATUS.ERROR) {
            return (<div className="advertisers-table__status">Could not load advertisers</div>);
        }

        return buildList();
    };

    const disableTableClick = () => {
        return status === FETCH_STATUS.SUCCESS ? null : {"pointer-events": "none"};
    };

    return (
        <div
            className="advertisers-table"
            style={disableTableClick()}
        >

            <AdvertisersTableSoringContext.Provider value={[sorting, toggleSorting]}>
                <AdvertisersTableHeader />
            </AdvertisersTableSoringContext.Provider>

            {renderList()}

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        advertisers: Object.values(state.advertisers.data),
        advertiserStatistics: state.advertiserStatistics,
        status: state.advertisers.status
    };
};

export default withRouter(connect(mapStateToProps, {fetchAdvertisers})(AdvertisersTable));