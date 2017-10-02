import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <hr style={{ width: "80%" }} />
                <ul style={{ fontSize: "xx-small" }}>
                    <li>Credits: </li>
                    <li>Tick sound: <a href="https://github.com/wilson428/metronome">source</a>;</li>
                    <li>Metronome image: <a href="https://www.amazon.com/Wittner-845131-804K-Metronome/dp/B000E4UBEW">Amazon</a>;</li>
                    <li>Metronome favicon: <span>Icons made by <a href="https://www.flaticon.com/authors/dale-humphries" title="Dale Humphries">Dale Humphries</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></span>;</li>
                </ul>
            </div>
        );
    }
}

export default Footer;