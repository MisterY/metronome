import { Component } from 'react';

class Metronome extends Component {
    constructor(prop) {
        super(prop);

        // get callbacks and invoke them when the timer fires.
        this._callback = prop.onTick;
        this._intervalId = undefined;
        this._tempo = prop.tempo;
        this._interval = this.getInterval(prop.tempo);
    }

    componentWillUnmount = () => {
         this.stop()
    }

    getInterval(tempo) {
        return 60000 / tempo;
    }

    render() {
        return null;
    }

    setTempo = (tempo) => {
        console.log("Metronome:setTempo " + tempo);

        this.setTempoValues(tempo);

        // reset any running timer
        if (this._intervalId) {
            this.stop();
            this.start();
        }
    }

    setTempoValues = (tempo) => {
        this._tempo = tempo;
        // 60000 ms per minute / tempo
        this._interval = this.getInterval(tempo);
    }

    start = () => {
        // do not start a new metronome if one is already running.
        if (this._intervalId) return;

        console.log('starting the metronome at ' + this._tempo);
        // The first time play immediately. Then, on interval.
        this._callback();

        var id = setInterval(this.onInterval, this._interval);
        this._intervalId = id;

        console.log("started timer " + id);
    }

    stop = () => {
        console.log("stopping timer " + this._intervalId);

        clearInterval(this._intervalId);
        // reset id
        this._intervalId = undefined;
    }

    onInterval = () => {
        // timer hit. reply back
        this._callback();
    }
}

export default Metronome;