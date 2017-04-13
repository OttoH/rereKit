
import React from 'react';

class Stream extends React.Component{

    render () {
        const { user, tracks = [], onAuth } = this.props;

        return (
            <div>
                <div>
                {
                  user ?
                    <div>{user.username}</div> :
                    <button onClick={onAuth} type="button">Login</button>
                }
                </div>
                <div>
                {
                    tracks.map((track, key) => {
                      return (
                        <div className="track" key={key}>
                          {track.title}
                        </div>
                      );
                    })
                }
                </div>
            </div>
        );
    }
}

export default Stream
