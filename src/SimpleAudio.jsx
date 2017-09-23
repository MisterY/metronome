import React, { Component } from 'react';
import soundFile from './tick.mp3';

class SimpleAudio extends Component {
    render() {
        return (
            <audio src={soundFile} controls preload='auto' />
        );
    }
}

export default SimpleAudio;