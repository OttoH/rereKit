
import * as actionTypes from '../constants/actionTypes'

const initialState = {}

export default (state = initialState, action) => {
    const {user} = action

    switch (action.type) {
        case actionTypes.ME_SET:
            return (
                {
                    ...state,
                    user
                }
            )

        default:
            return state
    }
}
