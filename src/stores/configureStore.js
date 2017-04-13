
import {createStore, applyMiddleware} from 'redux'
import reducers from '../reducers/index'
import {createLogger} from 'redux-logger'

const logger = createLogger()

const createStoreWithMiddleware = applyMiddleware(logger)(createStore)

// adding thunk later
const configureStore = (initialState) => {
    return createStoreWithMiddleware(reducers, initialState);
}

export default configureStore
