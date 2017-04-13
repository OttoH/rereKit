
import React from 'react';
import { connect } from 'react-redux';
import Stream from './presenter'

// bind actions
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'

const mapStateToProps = (state) => {
    return {
        ...state.auth,
        ...state.tracks
    }
}

const mapDispathToProps = (dispatch) => {
    return (
        {
            onAuth: bindActionCreators(actions.auth, dispatch)
        }
    )
}

export default connect(mapStateToProps, mapDispathToProps)(Stream)
