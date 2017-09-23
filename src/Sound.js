class Sound extends Component {
    render() {
        return (
            <Sound
                url="tick.wav"
                playStatus={Sound.status.PLAYING}
                playFromPosition={300 /* in milliseconds */}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
            />
        );
    }
}