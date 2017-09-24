import React, { Component } from 'react';
import { Button } from 'reactstrap';

class TempoButton extends Component {
    constructor(prop) {
        super(prop);

        this.state = {
            title: prop.title,
            tempo: prop.tempo
        };
        this._onSelect = prop.onSelect;
    }

    render() {
        return(
            <Button color="link" onClick={this.onSelected}>{this.state.title}</Button>
        );
    }

    onSelected = (e) => {
        this._onSelect(this.state.tempo);
    }
}

export default TempoButton;