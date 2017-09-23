import React, { Component } from 'react';

class Inputs extends Component {
    // constructor(prop) {
    //     super(prop);

    //     // This binding is necessary to make `this` work in the callback
    //     //this.onTempoBlur = this.onTempoBlur.bind(this);
    // }

    render() {
        return (
            <div>
                <div>Tempo</div>
                <input type='number' onBlur={this.onTempoBlur} />

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