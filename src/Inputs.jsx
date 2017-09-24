import React, { Component } from 'react';

class Inputs extends Component {
    constructor(prop) {
        super(prop);

        // This binding is necessary to make `this` work in the callback
        this.state = {
            tempo: prop.tempo ? prop.tempo : 100
        }
    }

    render() {
        return (
            <div>
                <div>Tempo</div>
                <input type='number' defaultValue={this.state.tempo} onBlur={this.onTempoBlur} />

            </div>
        );
    }

    // onTempoBlur(e) {
    //     console.log('blurrrrr');
    // }
    onTempoBlur = (e) => {
        console.log('blurrrred');
        // todo: apply tempo
    }

    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    // handleClick = () => {
    //     console.log('this is:', this);
    // }
}

export default Inputs;