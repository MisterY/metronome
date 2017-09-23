import { Component } from 'react';
import soundFile from './tick.mp3';

class TickAudio extends Component {
    render() {
        return null;
    }

    play() {
        console.log('playing?!');

        var audio = new Audio(soundFile);
        audio.load();
        //audio.volume = 0.5;
        audio.volume = 1;
        audio.play();
    }
}

export default TickAudio;