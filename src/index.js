import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';
import Channels from './Channels';

ReactDOM.render(<Channels />, document.getElementById('forms'));

serviceWorker.register(); // unregister for online 
