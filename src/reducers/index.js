
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './auth'
import tracks from './tracks'

export default combineReducers({
    auth,
    tracks,
    routing: routerReducer
})
