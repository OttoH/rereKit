
import * as actionTypes from '../constants/actionTypes'

export const setTracks = (tracks) => {
    return {
        type: actionTypes.TRACKS_SET,
        tracks: tracks
    }
}
