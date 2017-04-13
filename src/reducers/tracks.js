
import * as actionTypes from '../constants/actionTypes'

// initial here ?
const initialState = {}

export default (state = initialState, action) => {
    const { type, tracks } = action

    switch (type) {
        case actionTypes.TRACKS_SET:
            return {
                ...state,
                tracks: tracks
            }

        default:
            return state;
    }
}
