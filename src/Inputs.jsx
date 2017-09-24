import React, { Component } from 'react';
import Knob from 'react-canvas-knob';

class Inputs extends Component {
    constructor(prop) {
        super(prop);

        // This binding is necessary to make `this` work in the callback
        this.state = {
            tempo: prop.tempo ? prop.tempo : 100
        }
        this._tempoChanged = prop.onTempoChanged;
    }

    render() {
        return (
            <div>
                <h2>Tempo</h2>

                <div> 
                    - Andante - 
                </div>

                <Knob
                    value={this.state.tempo}
                    onChange={this.changeTempo}
                    onChangeEnd={this.notifyParent}
                    min={20}
                    max={250}
                    value={this.state.tempo}
                    thickness={0.15}
                    fgColor="black"
                    bgColor="darkgray"
                    angleArc={330}
                    angleOffset={-165}
                    cursor={true}
                />

                {/* <input type='number' defaultValue={this.state.tempo} onBlur={this.onTempoBlur} onChange={e => this.onTempoChanged(e)} onClick={e => this.onTempoClicked(e)} /> */}
            </div>
        );
    }

    /**
     * Saves the new tempo value and notifies the parent.
     */
    changeTempo = (newValue) => {
        //console.log(newValue);
        this.setState({ tempo: newValue });
    }

    notifyParent = () => {
        this._tempoChanged(this.state.tempo);
    }

    // onTempoBlur = (e) => {
    //     console.log('tempo set to ' + this.state.tempo);
    //     // notify the parent
    //     this._tempoChanged(this.state.tempo);
    // }

    // onTempoChanged = (e) => {
    //     var tempo = e.target.value;
    //     console.log('changing tempo to ' + tempo);
    //     this.setState({ tempo: tempo });
    // }

    // onTempoClicked = (e) => {
    //     var tempo = e.target.value;
    //     console.log('changing tempo to ' + tempo);
    //     this.setState({ tempo: tempo });
    //     // update immediately when changing the tempo by clicking.
    //     this._tempoChanged(this.state.tempo);
    // }

    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    // handleClick = () => {
    //     console.log('this is:', this);
    // }
}

export default Inputs;