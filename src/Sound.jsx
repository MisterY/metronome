//var Sound = require('react-sound').default;

import React, { Component } from 'react';
import Sound from 'react-sound';

class Tick extends Component {
    render() {
        return (
            <Sound
                url="./tick.wav"
                playStatus={Sound.status.PLAYING}
                playFromPosition={0 /* in milliseconds */}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
            />
        );
    }
}

export default Tick;