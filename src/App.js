import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from './static/wittner.jpg';
import './App.css';
//import Tick from './TickSound';
//import sound from './DirectSound';
import Inputs from './Inputs';
import Audio from './TickAudio';
//import ReactAudioPlayer from 'react-audio-player';
//import SimpleAudio from './SimpleAudio';
import Metronome from './Metronome';
import { Button, ButtonGroup } from 'reactstrap';
import keydown from 'react-keydown';
import PlayButton from './PlayButton';

//let MetronomeWorker = require("Worker.js");

class App extends Component {
  // constructor(prop) {
  //   super(prop);
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div style={{ marginLeft: 2 + "em" }}>
            <h1>Alen's Metronome</h1>
          </div>
        </div>
        <p className="App-intro">
          This is a metronome implemented in JavaScript using ReactJS.
        </p>

        <Inputs ref={(ui) => { this._ui = ui; }} onTempoChanged={this.onTempoChanged} />
        <Metronome ref={(m) => { this._metronome = m; }} onTick={this.metronomeClick} tempo={100} />
        <Audio ref={(component) => { this._tick = component; }} />

        <PlayButton onClick={this.onPlayButtonClick} />
      </div>
    );
  }

  onPlayButtonClick = (state) => {
    if (state === 1) {
      this.start();
    } else {
      this.stop();
    }
  }

  /**
   * Play the sound.
   */
  tick = () => {
    //console.log('tick!');
    this._tick.play();
  }

  start = () => {
    this._metronome.start();
  }

  stop = () => {
    this._metronome.stop();
  }

  metronomeClick = () => {
    // signal received from the metronome.
    // play sound
    this.tick();
  }

  onTempoChanged = (tempo) => {
    // update the metronome
    this._metronome.setTempo(tempo);
  }
}

export default App;