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
  constructor(prop) {
    super(prop);

    this._running = false;
    this.state = {
      playTitle: "Play"
    };
  }

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

        {/* <SimpleAudio ref={(component) => { this._tick = component; }}  /> */}

        <Inputs ref={(ui) => { this._ui = ui; }} onTempoChanged={this.onTempoChanged} />
        <Metronome ref={(m) => { this._metronome = m; }} onTick={this.metronomeClick} tempo={100} />
        <Audio ref={(component) => { this._tick = component; }} />

        <button onClick={this.tick}>Tick</button>
        <div>
          <Button
            onClick={this.onPlayClicked}
            ref={(component) => { this._playButton = component; }} >
            <FontAwesome
              //className='super-crazy-colors'
              name={this.state.playTitle.toLowerCase()}
              //size='2x'
              //spin
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
            &nbsp;{this.state.playTitle}
            </Button>
        </div>
      </div>
    );
  }

  tick = () => {
    //console.log('tick!');
    this._tick.play();
  }

  onPlayClicked = (e) => {
    if (!this._running) {
      this.start();
    } else {
      this.stop();
    }
  }

  start = () => {
    this._metronome.start();

    this._running = true;
    // update UI
    this._playButton.hidden = true;
    this.setState({ playTitle: "Stop"});
  }

  stop = () => {
    //console.log('stopping');

    this._metronome.stop();

    this._running = false;
    this.setState({ playTitle: "Play"});
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