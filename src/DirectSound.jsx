import React, { Component } from 'react';
import soundFile from './tick.wav';

class DirectSound extends Component {
    constructor(props) {
        super(props);
        this.onPlay = this.onPlay.bind(this);
        this.sound = new Audio(soundFile);
    }

    onPlay() {
        this.sound.play();
    }
}

export default DirectSound;