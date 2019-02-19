import React from "react";
import ReactDOM from "react-dom";
import thunk from 'redux-thunk';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import {applyMiddleware, compose, createStore} from "redux";

import './variables.scss';
import './styles.scss';

import App from "./components/App";
import reducers from "./reducers";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    ,
    document.getElementById("root")
);
