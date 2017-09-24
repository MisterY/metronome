import { Component } from 'react';
import soundFile from './static/tick_9.mp3';

/**
 * A very simple wrapper around the Audio HTML element.
 */
class TickAudio extends Component {
    constructor(prop) {
        super(prop);

        this._audio = new Audio(soundFile);
        this._audio.load();
        this._audio.volume = 1;
    }

    render() {
        return null;
    }

    play = () => {
        //var audio = new Audio(soundFile);
        var audio = this._audio;
        //audio.load();
        //audio.volume = 0.5;
        //audio.volume = 1;
        audio.play();
    }
}

export default TickAudio;