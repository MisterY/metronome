import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Tick from './TickSound';
//import sound from './DirectSound';
import Inputs from './Inputs';
import Audio from './TickAudio';
//import ReactAudioPlayer from 'react-audio-player';
//import SimpleAudio from './SimpleAudio';
import Metronome from './Metronome';

//let MetronomeWorker = require("Worker.js");

class App extends Component {
  constructor(prop) {
    super(prop);

    // initialize options.
    // this.state = {
    //   //tempo: 100
    // }
    this._metronome = new Metronome({
      onTick: this.metronomeClick,
      tempo: 100
    });
    //this._worker = new MetronomeWorker();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>My Metronome</h1>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {/* <Click ref={(component) => { this._tick = component; }} /> */}
        {/* <ReactAudioPlayer
          src={soundFile}
          autoPlay={false}
          ref={(player) => { this._tick = player; }}
          onPlay={() => console.log('playing?')}
          onError={() => console.log('error')}
          preload='auto'
          controls
        /> */}
        {/* controls loop={true} */}
        {/* <SimpleAudio ref={(component) => { this._tick = component; }}  /> */}

        <Inputs ref={(ui) => { this._ui = ui; }} />

        <Audio ref={(component) => { this._tick = component; }} />

        <button onClick={this.tick}>Tick</button>
        <div>
          <button onClick={this.start}>Start</button>
          <button onClick={this.stop}>Stop</button>
        </div>
      </div>
    );
  }

  tick = () => {
    console.log('tick!');
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
}

export default App;
