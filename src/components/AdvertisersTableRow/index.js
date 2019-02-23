import React from "react";
import {connect} from "react-redux";

import "./styles.scss";
import CreationDate from "../CreationDate";
import {FETCH_STATUS} from "../../types/FetchStatus";

const AdvertisersTableRow = ({advertiser, advertiserStatistics, status}) => {

    const validate = (value) => {
        if (status === FETCH_STATUS.LOADING) {
            return "Loading..."
        } else if (status === FETCH_STATUS.ERROR) {
            return "Cloud not load";
        } else if (value === undefined) {
            return "n/a";
        } else {
            return value;
        }
    };

    return (
        <div className="advertisers-table-row">

            <div className="advertisers-table-row__cell">
                {advertiser.name}
            </div>

            <div className="advertisers-table-row__cell">
                <CreationDate date={advertiser.createdAt} />
            </div>

            <div className="advertisers-table-row__cell">
                {advertiser.campaignIds.length}
            </div>

            <div className="advertisers-table-row__cell">
                {validate(advertiserStatistics.impressions)}
            </div>

            <div className="advertisers-table-row__cell">
                {validate(advertiserStatistics.clicks)}
            </div>

        </div>
    );
};

const mapStateToProps = (state, props) => {
    const advertiserId = parseInt(props.advertiserId, 10);
    const {status, data} = state.advertiserStatistics;

    return {
        advertiser: state.advertisers.data[advertiserId],
        advertiserStatistics: data[advertiserId] || {},
        status
    };
};


export default connect(mapStateToProps)(AdvertisersTableRow);