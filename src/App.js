import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from './static/wittner.jpg';
import './App.css';
import TempoSelector from './TempoSelector';
import TickAudio from './TickAudio';
import Metronome from './Metronome';
import PlayButton from './PlayButton';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import { Container, Row, Col } from 'reactstrap';
import TempoKnob from './TempoKnob';

//let MetronomeWorker = require("Worker.js");

class App extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      volume: 80,
      tempo: 100
    };
  }

  componentWillMount = () => {
    document.addEventListener("keydown", this.onKeyDown, false);
  }

  componentWillUnmount = () => {
    document.removeEventListener("click", this.onKeyDown, false);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <a href="https://github.com/MisterY/metronome">
            <img style={{ position: "absolute", top: 0, right: 0, border: 0 }} src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png" />
          </a>

          <img src={logo} className="App-logo" alt="logo" />
          <div style={{ marginLeft: 2 + "em" }}>
            <h1>Alen's Metronome</h1>
          </div>
        </div>
        <p className="App-intro">
          This is a metronome implemented in JavaScript using ReactJS. You can control it using keyboard (space = start/stop, cursor keys for volume and tempo control).
        </p>

        {/* metronome contains logic */}
        <Metronome
          ref={(x) => { this._metronome = x; }}
          onTick={this.onMetronomeClick} tempo={this.state.tempo} />
        <TickAudio
          volume={this.state.volume / 100}
          ref={(component) => { this._tick = component; }} />
        <TempoSelector
          ref={(x) => { this._tempoSelector = x; }} onTempoChanged={this.onTempoChanged} />

        <Container>
          <Row>
            <Col xs="4">
              <TempoKnob
                ref={(x) => { this._tempoKnob = x; }}
                tempo={this.state.tempo} onTempoChanged={this.onTempoChanged} />
            </Col>
            <Col xs="4" style={{ display: "flex", flexDirection: "column", justifyContent: "center", justifyContent: "center" }}>
              <PlayButton
                ref={(component) => { this._playButton = component; }}
                onClick={this.onPlayButtonClick} />
            </Col>
            <Col xs="4">
              Volume
              <Slider
                min={0}
                max={100}
                value={this.state.volume}
                orientation="vertical"
                //onChangeStart={this.handleChangeStart}
                onChange={this.changeVolume}
                //onChangeComplete={this.handleChangeComplete} 
                ref={(x) => { this._volumeControl = x; }}
              />
            </Col>
          </Row>
        </Container>

      </div >
    );
  }

  changeVolume = (value) => {
    console.log("volume: " + value);

    if (value > 100) value = 100;
    if (value < 0) value = 0;

    // update the control, as this can be triggered both ways.
    this._volumeControl.value = value;

    this.setState({ volume: value });
    this._tick.setVolume(value / 100);
  }

  onKeyDown = (e) => {
    console.log(e);

    // use 300ms buffer when processing keyboard events.
    // todo: react-throttle

    switch (e.key) {
      case "ArrowLeft":
        // decrease tempo
        this.onTempoChanged(this._tempoSelector.state.tempo - 1);
        break;
      case "ArrowRight":
        // increase tempo
        this.onTempoChanged(this._tempoSelector.state.tempo + 1);
        break;
      case "ArrowUp":
        // increase volume
        this.changeVolume(this.state.volume + 1);
        break;
      case "ArrowDown":
        // reduce volume
        this.changeVolume(this.state.volume - 1);
        break;
      case " ":
        this._playButton.toggle();
        break;
      default:
        break;
    }
  }

  onPlayButtonClick = (state) => {
    if (state === 1) {
      this._metronome.start();
    } else {
      this._metronome.stop();
    }

    // Move focus from the play button to avoid double-triggering via keyboard.
    // todo this._playButton._playButton.blur();
    document.activeElement.blur();
  }

  /**
   * Play the sound.
   */
  onMetronomeClick = () => {
    // signal received from the metronome.
    this._tick.play();
  }

  onTempoChanged = (tempo) => {
    if (tempo < 0) tempo = 0;

    // update the metronome
    this._metronome.setTempo(tempo);
    this._tempoSelector.setTempo(tempo);
    this._tempoKnob.setTempo(tempo);
  }
}

export default App;