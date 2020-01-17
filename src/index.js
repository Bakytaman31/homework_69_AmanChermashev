import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

import App from './App';
import {ordersReducer} from "./store/reducers/ordersReducer";
import productsReducer from "./store/reducers/productsReducer";

import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    orders: ordersReducer,
    productsReducer: productsReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app , document.getElementById('root'));