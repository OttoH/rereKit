
import React from 'react';
import { connect } from 'react-redux';
import Stream from '../compoments/Stream/presenter'

const mapStateToProps = (state) => {
    return {
        ...state.tracks
    }
}

export default connect(mapStateToProps)(Stream);
