import React, { Component } from 'react';
import Sound from 'react-sound';
import soundFile from './tick.wav';

class Tick extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: props.playStatus ? props.playStatus : Sound.status.STOPPED,
            loop: props.loop ? props.loop : false
        };
    }

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
                autoLoad={true}
                url={soundFile}
                playStatus={this.state.status}
                //playFromPosition={0}
                //volume={volume}
                loop={this.state.loop}
                onLoading={({ bytesLoaded, bytesTotal }) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
                onLoad={() => console.log('Loaded')}
                onPlaying={({ position }) => console.log(position)}
                onPause={() => console.log('Paused')}
                onResume={() => console.log('Resumed')}
                onStop={() => console.log('Stopped')}
                onFinishedPlaying={this.onFinishedPlaying} />
        );
    }

    play() {
        this.setState({ status: Sound.status.PLAYING });
    }

    stop() {
        this.setState({ status: Sound.status.STOPPED });
    }

    handleSongLoading() {
        console.log("song loading");
    }

    handleSongPlaying() {
        console.log("song playing");
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        this.setState({ status: Sound.status.STOPPED });
    }

    onFinishedPlaying = () => {
        console.log('finished playing');

        this.setState({ status: Sound.status.STOPPED });
    }
}

export default Tick;