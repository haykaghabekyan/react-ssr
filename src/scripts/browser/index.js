import '../../styles/index.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from '../universal/app/app';
import { getStore } from '../universal/app/model/app.store';

// Grab the state from a global variable injected into the server-generated HTML
const initialState = window['__INITIAL_STATE__'];
// Allow the passed state to be garbage-collected
delete window['__INITIAL_STATE__'];

// Create Redux store with initial state
const store = getStore(initialState);

const a = (
    <BrowserRouter>
        <Provider store={ store }>
            <App />
        </Provider>
    </BrowserRouter>
);

ReactDOM.hydrate(a, document.getElementById('root'), () => console.log('hydrate callback'));
