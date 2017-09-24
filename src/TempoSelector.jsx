import React, { Component } from 'react';
import Knob from 'react-canvas-knob';
import { ButtonGroup } from 'reactstrap';
import TempoButton from './TempoButton';

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
                        <TempoButton tempo={30} title="Adagieto" onSelect={this.onTempoSelected} />
                        <TempoButton tempo={35} title="Adagio" onSelect={this.onTempoSelected} />
                        <TempoButton tempo={40} title="Larghetto" onSelect={this.onTempoSelected} />
                        <TempoButton tempo={45} title="Largo" onSelect={this.onTempoSelected} />
                        <TempoButton tempo={50} title="Lento" onSelect={this.onTempoSelected} />
                        <TempoButton tempo={55} title="Grave" onSelect={this.onTempoSelected} />
                        <TempoButton tempo={60} title="Sostenuto" onSelect={this.onTempoSelected} />
                        <TempoButton tempo={65} title="Adagissimo" onSelect={this.onTempoSelected} />
                        <TempoButton tempo={70} title="Larghissimo" onSelect={this.onTempoSelected} />
                    </ButtonGroup>
                    <div>
                        {/* Moderate */}
                        <TempoButton tempo={75} title="Andante" onSelect={this.onTempoSelected} />
                    </div>
                    <ButtonGroup>
                        <TempoButton tempo={80} title="Andantino" onSelect={this.onTempoSelected} />
                        <TempoButton tempo={85} title="Allegretto" onSelect={this.onTempoSelected} />
                        <TempoButton tempo={90} title="Moderato" onSelect={this.onTempoSelected} />
                        <TempoButton tempo={100} title="Allegro" onSelect={this.onTempoSelected}
                        />
                        <TempoButton tempo={110} title="Animato" onSelect={this.onTempoSelected} />
                        <TempoButton tempo={120} title="Agitato" onSelect={this.onTempoSelected} />
                        <TempoButton tempo={130} title="Veloce" onSelect={this.onTempoSelected} />
                        <TempoButton tempo={140} title="Mosso" onSelect={this.onTempoSelected} />
                        <TempoButton tempo={150} title="Vivo" onSelect={this.onTempoSelected} />
                        <TempoButton tempo={160} title="Vivace" onSelect={this.onTempoSelected} />
                        <TempoButton tempo={180} title="Presto" onSelect={this.onTempoSelected} />
                        <TempoButton tempo={200} title="Prestissimo" onSelect={this.onTempoSelected} />
                        <TempoButton tempo={230} title="Vivacissimo" onSelect={this.onTempoSelected} />
                    </ButtonGroup>
                </div>
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
            </div>
        );
    }

    /**
     * This is called from outside to set the inputs to the new value.
     */
    setTempo = (value) => {
        //console.log("Input:selected tempo " + newValue);

        this.setState({ tempo: value });
    }

    /**
     * Saves the new tempo value and notifies the parent.
     */
    onTempoSelected = (value) => {
        this.setState({ tempo: value });
        this._tempoChanged(value);
    }
}

export default Inputs;