import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter as Router }from 'react-router-dom'

import configureStore from "./store/configureStore";


ReactDOM.render(
    <Provider store={configureStore()}>
        <Router>
            <App/>
        </Router>
    </Provider>
    , document.getElementById('root'));
