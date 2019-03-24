import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import { combinedEpics } from './app.epic';
import { combinedReducers } from './app.reducer';

export const getStore = (initialState = {}) => {
    let composeEnhancers = compose;

    if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }

    const epicMiddleware = createEpicMiddleware();
    // Create Redux store with initial state
    const store = createStore(combinedReducers, initialState, composeEnhancers(applyMiddleware(thunk, epicMiddleware)));

    epicMiddleware.run(combinedEpics);

    return store;
};
