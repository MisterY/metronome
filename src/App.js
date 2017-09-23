import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tick from './Tick';
//import sound from './DirectSound';
import Ui from './MetronomeUI';

class App extends Component {
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

        <Tick ref={(tick) => { this._tick = tick; }} />

        <Ui />

        <button onClick={this.tick}>Tick</button>
        <button onClick={this.stop}>Stop</button>
      </div>
    );
  }

  tick = () => {
    console.log('tick!');
    this._tick.play();
  }

  stop = () => {
    this._tick.stop();
  }
}

export default App;
