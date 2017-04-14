import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import configureStore from './stores/configureStore'
import { actionCreators as tracksActionCreator } from './ducks/tracks'
import App from './components/App/presenter'
import Callback from './components/Callback'
import Stream from './components/Stream'
import { CLIENT_ID, REDIRECT_URI } from './constants/auth'

import './style';

// soundcloud  initialize
import SoundCloud from 'soundcloud'
SoundCloud.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI })

const tracks = [
    {
        title: 'coldplay'
    },
    {
        title: 'green days'
    }
]

const store = configureStore();

// router
const history = syncHistoryWithStore(browserHistory, store)

// demostrate initial
store.dispatch(tracksActionCreator.doSetTracks(tracks))

ReactDOM.render(
    <AppContainer>
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Stream} />
                <Route path="/" component={Stream} />
                <Route path="/callback" component={Callback} />
            </Route>
        </Router>
    </Provider>
    </AppContainer>,
    document.getElementById('app')
)

//module.hot.accept()

if (module.hot) {
  module.hot.accept('./components/App/presenter', () => {
    render(App)
  });
}
