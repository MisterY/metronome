import React, { Component } from 'react';
import Sound from 'react-sound';
import soundFile from './tick.wav';

class Tick extends Component {
    // constructor(props) {
    //     super(props);

    //     // do any initialization here.
    // }

    render() {
        return (
            // <Sound
            //     url="./tick.wav"
            //     playStatus={Sound.status.PLAYING}
            //     playFromPosition={0 /* in milliseconds */}
            //     onLoading={this.handleSongLoading}
            //     onPlaying={this.handleSongPlaying}
            //     onFinishedPlaying={this.handleSongFinishedPlaying}
            // />

            <Sound
                url={soundFile}
                playStatus={Sound.status.PLAYING}
                playFromPosition={0}
                //volume={volume}
                loop={false}
                onLoading={({ bytesLoaded, bytesTotal }) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
                onLoad={() => console.log('Loaded')}
                onPlaying={({ position }) => console.log(position)}
                onPause={() => console.log('Paused')}
                onResume={() => console.log('Resumed')}
                onStop={() => console.log('Stopped')}
                onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })} />
        );
    }

    handleSongLoading() {
        console.log("song loading");
    }

    handleSongPlaying() {
        console.log("song playing");
    }
}

export default Tick;