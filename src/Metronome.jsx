import { Component } from 'react';

class Metronome extends Component {
    constructor(prop) {
        super(prop);

        // get callbacks and invoke them when the timer fires.
        this._callback = prop.onTick;
        this.state = {
            intervalId: 0,
            tempo: prop.tempo,
            interval: 100
        };
    }

    render() {
        return null;
    }

    setTempo = (tempo) => {
        console.log("Metronome:setTempo " + tempo);

        this.setTempoValues(tempo);

        // reset any running timer
        if (this.state.intervalId) {
            this.stop();
            this.start();
        }
    }

    setTempoValues = (tempo) => {
        this.setState({ tempo: tempo });
        // 60000 ms per minute / tempo
        this.setState({ interval: 60000 / tempo });
    }

    start = () => {
        // do not start a new metronome if one is already running.
        if (this.state.intervalId) return;

        console.log('starting the metronome at ' + this.state.tempo);
        // The first time play immediately. Then, on interval.
        this._callback();

        var id = setInterval(this.onInterval, this.state.interval);
        //this.setState({ intervalId: id });
        this.setState({ intervalId: id });
    }

    stop = () => {
        clearInterval(this.state.intervalId);
        // reset id
        this._intervalId = 0;
    }

    onInterval = () => {
        // timer hit. reply back
        this._callback();
    }
}

export default Metronome;