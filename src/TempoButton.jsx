import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class TempoButton extends Component {
    constructor(prop) {
        super(prop);

        this._title = prop.title;
        this._onSelect = prop.onSelect;
        this._tempo = prop.tempo;
    }

    render() {
        return(
            <Button color="link" onClick={this.onSelected}>{this._title}</Button>
        );
    }

    onSelected = (e) => {
        this._onSelect(this._tempo);
    }
}

export default TempoButton;