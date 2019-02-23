import React from "react";
import {Route} from "react-router-dom";
import AdvertisersPage from "../pages/AdvertisersPage";

const App = () => {

    return (
        <>

            <Route
                exact
                path="/"
                component={AdvertisersPage}
            />

        </>
    );
};


export default App;