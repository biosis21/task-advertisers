import React, {Fragment} from "react";
import {connect} from "react-redux";
import {Route} from "react-router-dom";

import {fetchAdvertisers} from "../actions";
import AdvertisersPage from "../pages/AdvertisersPage";

const App = (props) => {

    props.fetchAdvertisers();

    return (
        <Fragment>

            <Route
                exact
                path="/"
                component={AdvertisersPage}
            />
            
        </Fragment>
    );
};


export default connect(null, {fetchAdvertisers})(App);