import React, { Component } from 'react';
import Knob from 'react-canvas-knob';
import { Button, ButtonGroup } from 'reactstrap';

class Inputs extends Component {
    constructor(prop) {
        super(prop);

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
                    <ButtonGroup>
                        <Button color="link">Lento</Button>
                        <Button color="link">Adagio</Button>
                        <Button color="link">Andantino</Button>
                        <Button color="link">Andante (76–108 bpm)</Button>
                        <Button color="link">Moderato</Button>
                        <Button color="link" onClick={() => { this.setTextualTempo("Allegro"); }}>Allegro</Button>
                        <Button color="link">Allegretto</Button>
                        <Button color="link">Allegro assai</Button>
                    </ButtonGroup>
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

    setTextualTempo = (tempoName) => {
        var tempo;

        switch (tempoName) {
            case "Andante":
                tempo = 90;
                break;
            case "Allegro":
                tempo = 130;
                break;
        }
        this.changeTempo(tempo);
    }
}

export default Inputs;