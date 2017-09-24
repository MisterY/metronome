import { Component } from 'react';
//import soundFile from './static/tick_9.mp3';
import soundFile from './static/tick.mp3';

/**
 * A very simple wrapper around the Audio HTML element.
 */
class TickAudio extends Component {
    constructor(prop) {
        super(prop);

        this._audio = new Audio(soundFile);
        this._audio.load();
        this._audio.volume = prop.volume;
    }

    render() {
        return null;
    }

    play = () => {
        //var audio = new Audio(soundFile);
        //audio.load();
        //audio.volume = 0.5;
        //audio.volume = _audio
        this._audio.play();
    }

    setVolume = (value) => {
        this._audio.volume = value;
    }
}

export default TickAudio;