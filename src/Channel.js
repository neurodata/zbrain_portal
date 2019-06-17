import React from 'react';
import { atlasLayer, fullRequest } from './Datas';

function readFile(file) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
      var allText = xmlhttp.responseText;
    }
  };
  xmlhttp.open("GET", file, false);
  xmlhttp.send();
  return xmlhttp.responseText;
}


class Channel extends React.Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    this.props.handleChannelChange(e.target.value);
  }


  showAllOptions() {
    const channels = readFile('source_short.csv').split('\n');
    return (
      channels.map((item) => <option key={item} value={item}> {item} </option> )
    );
  }

  render() {
    return(
      <div>
      <form>
        <label> Select Channel
          <select name="channel" value={this.props.curChannel}
          onChange={this.handleChange}>
          {this.showAllOptions()}
          </select>
          </label>
          </form>
    </div>
    );
  }
}

export default Channel;
