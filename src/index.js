import React from 'react';
import ReactDOM from 'react-dom';
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// Code
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
