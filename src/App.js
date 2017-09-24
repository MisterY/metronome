import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from './static/wittner.jpg';
import './App.css';
import Inputs from './Inputs';
import TickAudio from './TickAudio';
import Metronome from './Metronome';
import PlayButton from './PlayButton';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

//let MetronomeWorker = require("Worker.js");

class App extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      volume: 75
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
          <img src={logo} className="App-logo" alt="logo" />
          <div style={{ marginLeft: 2 + "em" }}>
            <h1>Alen's Metronome</h1>
          </div>
        </div>
        <p className="App-intro">
          This is a metronome implemented in JavaScript using ReactJS.
        </p>

        <Inputs 
          ref={(ui) => { this._ui = ui; }} onTempoChanged={this.onTempoChanged} />
        <Metronome 
          ref={(m) => { this._metronome = m; }} 
          onTick={this.onMetronomeClick} tempo={100} />
        <TickAudio
          volume={this.state.volume / 100}
          ref={(component) => { this._tick = component; }} />

        <PlayButton
          ref={(component) => { this._playButton = component; }}
          onClick={this.onPlayButtonClick} />

        <div className='slider orientation-reversed'>
          <div className='slider-group'>
            <div className='slider-vertical'>
              <Slider
                min={0}
                max={100}
                value={this.state.volume}
                orientation="vertical"
                onChangeStart={this.handleChangeStart}
                onChange={this.changeVolume}
                onChangeComplete={this.handleChangeComplete} />
            </div>
          </div>
        </div>

      </div>
    );
  }

  changeVolume = (value) => {
    console.log("volume: " + value);

    this.setState({ volume: value});
    this._tick.setVolume(value / 100);
  }

  onKeyDown = (e) => {
    console.log(e);

    switch (e.key) {
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
  }

  /**
   * Play the sound.
   */
  onMetronomeClick = () => {
    // signal received from the metronome.
    this._tick.play();
  }

  onTempoChanged = (tempo) => {
    // update the metronome
    this._metronome.setTempo(tempo);
  }
}

export default App;