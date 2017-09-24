import React, { Component } from 'react';
import Knob from 'react-canvas-knob';
import { Button, ButtonGroup } from 'reactstrap';
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
                        <TempoButton tempo={30} title="Grave" onSelect={this.setTempo} />
                        <TempoButton tempo={40} title="Largo" onSelect={this.setTempo} />
                        <TempoButton tempo={50} title="Lento" onSelect={this.setTempo} />
                        <TempoButton tempo={70} title="Adagio" onSelect={this.setTempo} />
                        <TempoButton tempo={95} title="Andante" onSelect={this.setTempo} />
                        <TempoButton tempo={100} title="Andantino" onSelect={this.setTempo} />
                        <TempoButton tempo={112} title="Moderato" onSelect={this.setTempo} />
                        <TempoButton tempo={130} title="Allegretto" onSelect={this.setTempo} />
                        <TempoButton tempo={143} title="Allegro" onSelect={this.setTempo} />
                        <TempoButton tempo={163} title="Vivace" onSelect={this.setTempo} />
                        <TempoButton tempo={180} title="Presto" onSelect={this.setTempo} />
                        <TempoButton tempo={208} title="Prestissimo" onSelect={this.setTempo} />

                        <Button color="link">Allegro assai</Button>
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
        console.log("Input:selected tempo " + newValue);

        this.setState({ tempo: newValue });
        this._tempoChanged(newValue);
    }
}

export default Inputs;