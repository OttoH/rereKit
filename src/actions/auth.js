
import * as actionTypes from '../constants/actionTypes'
import SoundCloud from 'soundcloud'

const setMe = (user) => {
    return {
        type: actionTypes.ME_SET,
        user
    }
}

// belows seems belong to service & API call
export const auth = () => {
    return (dispatch) => {
        SoundCloud.connect().then((session) => {
            dispatch(fetchMe(session))
        })
    }
}

const fetchMe = (session) => {
    return (dispatch) => {
        fetch('//api.soundcloud.com/me?oauth_token=${session.oauth_token}')
        .then((response) => response.json())
        .then((data) => {
          dispatch(setMe(data))
        });
    }
}
