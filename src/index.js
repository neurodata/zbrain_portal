import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';
import ChannelForm from './ChannelForm';
import AtlasForm from'./AtlasForm'; 

ReactDOM.render(<ChannelForm />, document.getElementById('channels_form'));
ReactDOM.render(<AtlasForm />, document.getElementById('atlas_form'));

serviceWorker.register(); // unregister for online 
