import React, { Component } from 'react';
import Knob from 'react-canvas-knob';

class TempoKnob extends Component {
    constructor(prop) {
        super(prop);

        this.state = {
            tempo: prop.tempo
        }
        this._tempoChanged = prop.onTempoChanged;
    }

    render() {
        return (
            <Knob
                value={this.state.tempo}
                onChange={this.onTempoSelected}
                onChangeEnd={this.onTempoSelected}
                min={20}
                max={250}
                thickness={0.15}
                fgColor="black"
                bgColor="darkgray"
                angleArc={330}
                angleOffset={-165}
                cursor={true}
            />
        );
    }

    onTempoSelected = (value) => {
        this.setState({ tempo: value });
        this._tempoChanged(value);
    }

        /**
     * This is called from outside to set the inputs to the new value.
     */
    setTempo = (value) => {
        //console.log("Input:selected tempo " + newValue);
        if (value === this._tempo) return;

        this.setState({ tempo: value });
    }

}

export default TempoKnob;