import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlLogin from './ControlLogin';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ControlLogin />, document.getElementById('root'));
registerServiceWorker();
