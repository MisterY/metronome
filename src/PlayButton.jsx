import React, { Component } from 'react';
import { Button } from 'reactstrap';

var FontAwesome = require('react-fontawesome');

class PlayButton extends Component {
    constructor(prop) {
        super(prop);

        this._running = false;
        this._onClick = prop.onClick;

        this.state = {
            playTitle: "Play"
        };

    }

    render() {
        return (
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
        );
    }

    onPlayClicked = (e) => {
        if (!this._running) {
            this.start();
        } else {
            this.stop();
        }
    }

    start = () => {
        this.setState({ playTitle: "Stop" });

        this._running = true;

        // send event to the parent
        this._onClick(1);
    }

    stop = () => {
        this.setState({ playTitle: "Play" });

        this._running = false;

        // send event to the parent
        this._onClick(0);
    }
}

export default PlayButton;