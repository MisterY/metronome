import React, { Component } from 'react';

class MetronomeUI extends Component {
    constructor(prop) {
        super(prop);

        // This binding is necessary to make `this` work in the callback
        this.onTempoBlur = this.onTempoBlur.bind(this);
    }

    render() {
        return (
            <div>
                <div>Tempo</div>
                <input type='number' onBlur={this.onTempoBlur} />
            </div>
        );
    }

    onTempoBlur(e) {
        console.log('blurrrrr');
    }

}

export default MetronomeUI;