import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';
import ZbrainForm from './ZbrainForm';

ReactDOM.render(<ZbrainForm />, document.getElementById('channels_form'));

serviceWorker.register(); // unregister for online 
