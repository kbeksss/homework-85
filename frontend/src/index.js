import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createBrowserHistory} from "history";
import {ConnectedRouter, connectRouter, routerMiddleware} from "connected-react-router";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import artistsReducer from "./store/reducers/artistsReducer";
import albumsReducer from "./store/reducers/albumsReducer";
import tracksReducer from "./store/reducers/tracksReducer";
import usersReducer from "./store/reducers/usersReducer";
import trackHistoryReducer from "./store/reducers/trackHistoryReducer";

const history = createBrowserHistory();

const rootReducer = combineReducers({
    router: connectRouter(history),
    artists: artistsReducer,
    albums: albumsReducer,
    tracks: tracksReducer,
    users: usersReducer,
    trackHistory: trackHistoryReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancers);
const app = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
