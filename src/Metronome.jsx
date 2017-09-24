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
        this._interval = 60000 / prop.tempo;
    }

    start = () => {
        // The first time play immediately. Then, on interval.
        this._callback();
        
        var id = setInterval(this.onInterval, this._interval);
        //this.setState({ intervalId: id });
        this._intervalId = id;
    }

    stop = () => {
        clearInterval(this._intervalId);
    }

    onInterval = () => {
        // timer hit. reply back
        this._callback();
    }
}

export default Metronome;