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
//let MetronomeWorker = require("Worker.js");
var FontAwesome = require('react-fontawesome');

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
            <h1>My Metronome</h1>
          </div>
        </div>
        <p className="App-intro">
          This is a JavaScript metronome.
        </p>

        {/* <SimpleAudio ref={(component) => { this._tick = component; }}  /> */}

        <Inputs ref={(ui) => { this._ui = ui; }} onTempoChanged={this.onTempoChanged} />
        <Metronome ref={(m) => { this._metronome = m; }} onTick={this.metronomeClick} tempo={100} />
        <Audio ref={(component) => { this._tick = component; }} />

        <button onClick={this.tick}>Tick</button>
        <div>
          <Button>
            <FontAwesome
              className='super-crazy-colors'
              name='rocket'
              size='2x'
              spin
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
            Start</Button>
          <button onClick={this.start}>Start</button>
          <button onClick={this.stop}>Stop</button>
        </div>
      </div>
    );
  }

  tick = () => {
    //console.log('tick!');
    this._tick.play();
  }

  start = () => {
    this._metronome.start();
  }

  stop = () => {
    console.log('stopping');
    //this._tick.stop();
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
