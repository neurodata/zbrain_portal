import React from 'react';
import ReactDOM from 'react-dom';

import './util/index.css';
import './util/logo.svg'
import * as serviceWorker from './util/serviceWorker';

import App from './App';

ReactDOM.render(<App />,
  document.getElementById('root')
);


serviceWorker.register(); // unregister for online
