import { Component } from 'react';

class Metronome extends Component {
    constructor(prop) {
        super(prop);

        // get callbacks and invoke them when the timer fires.
        this._callback = prop.onTick;
        // this.state = {
        //     tempo: prop.tempo
        // }
        // 60000 ms per minute / tempo
        this.setTempo(prop.tempo);
    }

    setTempo = (tempo) => {
        // tempo updated
        this._tempo = tempo;
        this._interval = 60000 / this._tempo;

        // reset any running timer
        if (this._intervalId) {
            this.stop();
            this.start();
        }
    }

    start = () => {
        // do not start a new metronome if one is already running.
        if (this._intervalId) return;

        console.log('starting the metronome at ' + this._tempo);
        // The first time play immediately. Then, on interval.
        this._callback();
        
        var id = setInterval(this.onInterval, this._interval);
        //this.setState({ intervalId: id });
        this._intervalId = id;
    }

    stop = () => {
        clearInterval(this._intervalId);
        // reset id
        this._intervalId = 0;
    }

    onInterval = () => {
        // timer hit. reply back
        this._callback();
    }
}

export default Metronome;