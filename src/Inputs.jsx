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
                        <TempoButton tempo={30} title="Adagieto" onSelect={this.setTempo} />
                        <TempoButton tempo={35} title="Adagio" onSelect={this.setTempo} />
                        <TempoButton tempo={40} title="Larghetto" onSelect={this.setTempo} />
                        <TempoButton tempo={45} title="Largo" onSelect={this.setTempo} />
                        <TempoButton tempo={50} title="Lento" onSelect={this.setTempo} />
                        <TempoButton tempo={55} title="Grave" onSelect={this.setTempo} />
                        <TempoButton tempo={60} title="Sostenuto" onSelect={this.setTempo} />
                        <TempoButton tempo={65} title="Adagissimo" onSelect={this.setTempo} />
                        <TempoButton tempo={70} title="Larghissimo" onSelect={this.setTempo} />
                    </ButtonGroup>
                    <div>
                        {/* Moderate */}
                        <TempoButton tempo={75} title="Andante" onSelect={this.setTempo} />
                    </div>
                    <ButtonGroup>
                        <TempoButton tempo={80} title="Andantino" onSelect={this.setTempo} />
                        <TempoButton tempo={85} title="Allegretto" onSelect={this.setTempo} />
                        <TempoButton tempo={90} title="Moderato" onSelect={this.setTempo} />
                        <TempoButton tempo={100} title="Allegro" onSelect={this.setTempo}
                        />
                        <TempoButton tempo={110} title="Animato" onSelect={this.setTempo} />
                        <TempoButton tempo={120} title="Agitato" onSelect={this.setTempo} />
                        <TempoButton tempo={130} title="Veloce" onSelect={this.setTempo} />
                        <TempoButton tempo={140} title="Mosso" onSelect={this.setTempo} />
                        <TempoButton tempo={150} title="Vivo" onSelect={this.setTempo} />
                        <TempoButton tempo={160} title="Vivace" onSelect={this.setTempo} />
                        <TempoButton tempo={180} title="Presto" onSelect={this.setTempo} />
                        <TempoButton tempo={200} title="Prestissimo" onSelect={this.setTempo} />
                        <TempoButton tempo={230} title="Vivacissimo" onSelect={this.setTempo} />
                    </ButtonGroup>
                </div>
                <Knob
                    value={this.state.tempo}
                    onChange={this.setTempo}
                    onChangeEnd={this.setTempo}
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
     * Saves the new tempo value and notifies the parent.
     */
    setTempo = (newValue) => {
        //console.log("Input:selected tempo " + newValue);

        this.setState({ tempo: newValue });
        this._tempoChanged(newValue);
    }
}

export default Inputs;