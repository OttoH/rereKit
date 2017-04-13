import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore'
import * as actions from './actions'
import Stream from './components/Stream';

const tracks = [
    {
        title: 'coldplay'
    },
    {
        title: 'green day'
    }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
    <Provider store={store}>
        <Stream />
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();
