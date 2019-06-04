import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import ZbrainForm from './ZbrainForm';


//var fs = require("fs");
//var text = fs.readFileSync("source_list.csv");
//var options = text.split("\n");
//
ReactDOM.render(<ZbrainForm />, document.getElementById('zbrain'));
// ReactDOM.render(<App />, document.getElementById('root'));

/*
function glancer(props) {
  return (

<Iframe url="https://www.google.com"
        width="450px"
        height="450px"
        display="initial"
        position="relative"
        allowFullScreen/>
  );
}

ReactDOM.render(
  <glancer src="https://www.google.com/" />,
  document.getElementById('glancer')
);

*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
